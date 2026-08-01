(function(){

  // ─── 1) TEMPEL firebaseConfig KAMU DI SINI ───────────────────────────────
const firebaseConfig = {
  apiKey: "AIzaSyCiKjdHF9-18JPBF5O7ovW7XhH1_2liDbU",
  authDomain: "siagabencana-2ec06.firebaseapp.com",
  projectId: "siagabencana-2ec06",
  storageBucket: "siagabencana-2ec06.firebasestorage.app",
  messagingSenderId: "1018218295428",
  appId: "1:1018218295428:web:f070872c2c8a3967cc92d1",
  measurementId: "G-T1E57T4RCY"
};
  // ──────────────────────────────────────────────────────────────────────────

  // Domain semu untuk mengonversi NAMA pemain menjadi format email
  // (Firebase Authentication mewajibkan format email, tapi game ini login pakai nama saja)
  const EMAIL_DOMAIN = 'bencanahero.local';

  let auth = null, db = null, active = false;

  try {
    if (firebaseConfig.apiKey && window.firebase && firebase.initializeApp) {
      firebase.initializeApp(firebaseConfig);
      auth = firebase.auth();
      db = firebase.firestore();
      active = true;
    }
  } catch (err) {
    console.warn('[BencanaHero] Firebase gagal diinisialisasi — memakai mode lokal sementara.', err);
    active = false;
  }

  function nameToEmail(name){
    const slug = String(name).trim().toLowerCase()
      .replace(/[^a-z0-9]+/g, '.')
      .replace(/^\.+|\.+$/g, '') || 'pemain';
    return slug + '@' + EMAIL_DOMAIN;
  }

  function userDocRef(uid){ return db.collection('siswa').doc(uid); }

  /* ═══ DAFTAR AKUN BARU ═══
     Menyimpan profil siswa di koleksi Firestore "siswa", 1 dokumen per akun,
     berisi nama, progres tiap misi (jumlah bintang 0-3), dan jejak waktu —
     inilah data yang nanti kamu lihat/analisis di Firebase Console. */
  async function register(name, password){
    const email = nameToEmail(name);
    const cred = await auth.createUserWithEmailAndPassword(email, password);
    await cred.user.updateProfile({ displayName: name.trim() });
    await userDocRef(cred.user.uid).set({
      name: name.trim(),
      progress: {},
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      lastLogin: firebase.firestore.FieldValue.serverTimestamp()
    });
    return { uid: cred.user.uid, name: name.trim(), progress: {} };
  }

  /* ═══ MASUK ═══ */
  async function login(name, password){
    const email = nameToEmail(name);
    const cred = await auth.signInWithEmailAndPassword(email, password);
    await userDocRef(cred.user.uid).set(
      { lastLogin: firebase.firestore.FieldValue.serverTimestamp() },
      { merge: true }
    );
    const snap = await userDocRef(cred.user.uid).get();
    const data = snap.exists ? snap.data() : {};
    return {
      uid: cred.user.uid,
      name: data.name || cred.user.displayName || name,
      progress: data.progress || {},
      attempts: data.attempts || {}
    };
  }

  function logout(){ return auth.signOut(); }

  /* Dipanggil sekali saat game dimuat, supaya sesi login yang masih aktif
     (siswa belum logout sebelumnya) otomatis pulih tanpa perlu login ulang. */
  function onAuthChange(cb){ auth.onAuthStateChanged(cb); }

  async function renameAccount(newName){
    const user = auth.currentUser; if(!user) throw new Error('Belum masuk akun.');
    await user.updateProfile({ displayName: newName.trim() });
    await userDocRef(user.uid).set({ name: newName.trim() }, { merge: true });
  }

  async function changePassword(currentPw, newPw){
    const user = auth.currentUser; if(!user) throw new Error('Belum masuk akun.');
    const cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPw);
    await user.reauthenticateWithCredential(cred);
    await user.updatePassword(newPw);
  }

  async function deleteAccount(currentPw){
    const user = auth.currentUser; if(!user) throw new Error('Belum masuk akun.');
    const cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPw);
    await user.reauthenticateWithCredential(cred);
    const historySnap = await userDocRef(user.uid).collection('riwayat_main').get();
    await Promise.all(historySnap.docs.map(d => d.ref.delete()));
    await userDocRef(user.uid).delete();
    await user.delete();
  }

  /* ═══ PROGRES + RIWAYAT MAIN ═══
     Dua lapis penyimpanan:
     1) Dokumen utama siswa/{uid} — ringkasan cepat: bintang terbaik tiap misi (`progress`)
        dan jumlah percobaan tiap misi (`attempts`). Ini yang gampang dilihat sekilas.
     2) Sub-koleksi siswa/{uid}/riwayat_main — SATU dokumen baru setiap kali satu sesi
        misi selesai dimainkan (walau bukan skor terbaik), isinya skor mentah 0-100,
        jumlah bintang, ini percobaan ke berapa, dan rincian benar/salah tiap soal.
        Inilah data detail yang dipakai untuk analisis penelitian (butir soal, pola
        percobaan ulang, dsb). */
  async function loadPlayerData(){
    const user = auth.currentUser; if(!user) return { progress:{}, attempts:{} };
    const snap = await userDocRef(user.uid).get();
    const data = snap.exists ? snap.data() : {};
    return { progress: data.progress || {}, attempts: data.attempts || {} };
  }

  /* Dipanggil game.js SETIAP KALI satu sesi misi selesai (di showResult/calcAndShowResult),
     terlepas apakah itu skor terbaik baru atau bukan — supaya riwayat percobaan lengkap
     tercatat, bukan cuma skor terbaik. */
  async function recordSession({ missionId, rawScore, starCount, attemptNumber, answers, progress, attempts }){
    const user = auth.currentUser; if(!user) return;
    await userDocRef(user.uid).collection('riwayat_main').add({
      missionId, rawScore, starCount, attemptNumber,
      answers: answers || [],
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    await userDocRef(user.uid).set({
      progress: progress || {},
      attempts: attempts || {},
      lastPlayed: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
  }

  /* Terjemahkan kode error Firebase ke pesan yang ramah untuk siswa SD */
  function friendlyError(err){
    const code = (err && err.code) || '';
    const MAP = {
      'auth/email-already-in-use': 'Nama ini sudah terdaftar. Coba masuk saja.',
      'auth/weak-password': 'Kata sandi minimal 6 karakter.',
      'auth/user-not-found': 'Nama atau kata sandi salah.',
      'auth/wrong-password': 'Nama atau kata sandi salah.',
      'auth/invalid-credential': 'Nama atau kata sandi salah.',
      'auth/invalid-login-credentials': 'Nama atau kata sandi salah.',
      'auth/too-many-requests': 'Terlalu banyak percobaan. Coba lagi sebentar lagi, ya.',
      'auth/network-request-failed': 'Koneksi internet bermasalah. Coba lagi.',
      'auth/requires-recent-login': 'Demi keamanan, masuk ulang dulu sebelum melakukan ini.'
    };
    return MAP[code] || (err && err.message) || 'Terjadi kesalahan. Coba lagi, ya.';
  }

  window.BHAuth = {
    isBackendActive: () => active,
    register, login, logout, onAuthChange,
    renameAccount, changePassword, deleteAccount,
    loadPlayerData, recordSession,
    friendlyError
  };

})();

/* ═══ CONTOH FIRESTORE SECURITY RULES ═══
   Tempel ke tab "Rules" di Firestore Database → Publish.
   Isinya: tiap siswa cuma boleh baca/tulis dokumen miliknya sendiri.

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /siswa/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;

      match /riwayat_main/{sesiId} {
        allow read, write: if request.auth != null && request.auth.uid == uid;
      }
    }
  }
}
*/
