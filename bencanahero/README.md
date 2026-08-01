# BencanaHero — Game Edukasi Siaga Bencana

Game edukasi berbasis web untuk siswa SD (kelas 5–6) yang mengajarkan
kesiapsiagaan menghadapi 7 bencana alam: **Gempa Bumi, Tsunami, Banjir,
Kebakaran Hutan, Gunung Meletus, Puting Beliung, dan Tanah Longsor.**

Pemain memilih keputusan yang tepat di tiap situasi, lalu menyusun langkah
penyelamatan menggunakan blok logika bergaya Scratch. Bertema "Buku Saku Siaga".

## Fitur
- 7 misi bencana dengan skenario keputusan + fase susun blok.
- Soal keputusan **acak** (5 soal per misi) dan urutan blok **diacak** tiap main.
- Bagian **Belajar**: materi kesiapsiagaan untuk tiap bencana (dua panel).
- Video animasi latar per misi + gambar ilustrasi tiap bencana.
- Sistem bintang, kunci misi bertahap, dan koleksi.
- 100% berjalan di browser, tanpa server backend.

## Struktur Proyek
```
bencanahero/
├── index.html            # struktur halaman (semua layar)
├── css/
│   └── style.css         # seluruh gaya tampilan
├── js/
│   ├── graphics.js       # ikon, glyph, karakter, ilustrasi SVG, kartu, manifest media
│   ├── data.js           # blok, skenario, bank soal, state, progres, suara
│   └── game.js           # layar, UI, dashboard, belajar, alur permainan, init
└── assets/
    ├── images/           # 7 gambar ilustrasi bencana (.jpg)
    └── videos/           # 7 video animasi latar (.mp4, tanpa suara)
```
File dimuat berurutan: `graphics.js` → `data.js` → `game.js`.

## Menjalankan secara Lokal
Karena game memuat video & gambar dari folder `assets/`, jalankan lewat
server lokal (bukan membuka `index.html` langsung, agar video ikut termuat):

```bash
# Python 3
python -m http.server 8000
# lalu buka http://localhost:8000
```
Atau gunakan ekstensi **Live Server** di VS Code.

## Deploy ke GitHub Pages
1. Buat repository baru di GitHub, unggah semua isi folder ini.
2. Buka **Settings → Pages**.
3. Bagian **Source**: pilih **Deploy from a branch**.
4. **Branch**: `main` (atau `master`), folder `/ (root)`, lalu **Save**.
5. Tunggu beberapa menit; situs akan tersedia di
   `https://<username>.github.io/<nama-repo>/`.

File `.nojekyll` sudah disertakan agar GitHub Pages menyajikan berkas apa adanya.

## Catatan
- Progres pemain (nama & bintang) saat ini tersimpan hanya selama sesi
  (di-reset saat halaman dimuat ulang). Struktur ini disiapkan agar mudah
  disambungkan ke backend penyimpanan di kemudian hari.
- Materi & soal disusun untuk jenjang SD dan dapat disesuaikan pada
  `js/data.js` (soal, skenario) dan `js/game.js` (materi Belajar).
