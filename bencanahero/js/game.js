
  const BG_VIDEO_INTRO = 'assets/videos/background_menuutama.mp4';
  const BG_VIDEO_LOOP  = 'assets/videos/background_menuutama_loop.mp4';
  const BG_VIDEO_SCREENS = ['splash', 'menu', 'login'];

  function bgVideoEl(){ return document.getElementById('menuUtamaBgVideo'); }

  function initBgVideo(){
    const v = bgVideoEl(); if (!v) return;
    v.loop = false;
    v.dataset.stage = 'intro';
    if (!v.getAttribute('src')) v.src = BG_VIDEO_INTRO;

    // Video intro selesai → lanjut otomatis ke video loop, lalu diulang terus.
    v.addEventListener('ended', () => {
      if (v.dataset.stage !== 'loop') {
        v.dataset.stage = 'loop';
        v.loop = true;
        v.src = BG_VIDEO_LOOP;
        const p = v.play(); if (p && p.catch) p.catch(() => {});
      }
    });

    v.addEventListener('error', () => {
      if (v.dataset.stage === 'loop') {
        v.dataset.stage = 'intro-fallback';
        v.loop = true;
        v.src = BG_VIDEO_INTRO;
        const p = v.play(); if (p && p.catch) p.catch(() => {});
      }
    });
  }

  function placeBgVideo(screenId){
    const v = bgVideoEl(); if (!v) return;
    if (BG_VIDEO_SCREENS.indexOf(screenId) === -1) return;
    const host = document.getElementById(screenId); if (!host) return;
    if (v.parentElement !== host) host.prepend(v);
    const p = v.play(); if (p && p.catch) p.catch(() => {});
  }

  /* ═══ SCREEN MANAGEMENT ═══ */
  function gotoScreen(id){ document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active')); document.getElementById(id).classList.add('active'); if(id==='select') buildDashboard(); if(id==='belajar') buildLearn(); if(id==='login') openLoginScreen();

    placeBgVideo(id); // pindahkan & lanjutkan video latar bersama ke layar yang aktif

    /* Matikan dekorasi awan & matahari (#sky) saat di Menu Utama ATAU Login — keduanya sekarang
       memakai video latar yang sama, jadi efek awan/matahari bawaan tidak diperlukan di situ. */
    const sky=document.getElementById('sky'); if(sky) sky.style.display=(id==='menu'||id==='login'||id==='splash')?'none':'';
    /* Musik latar: Menu → MenuBGM. Peta Misi (select) → MainBGM (dimulai tepat saat MenuBGM berhenti,
       juga berlaku saat kembali dari sebuah misi lewat tombol "<" atau "Peta Misi", karena keduanya
       menuju layar yang sama). Saat misi sungguhan berjalan (game) → musik dimatikan. Layar login
       tidak mengubah musik sama sekali, supaya MenuBGM tetap terdengar selama proses masuk/daftar. */
    if(id==='menu'){ playBGM('MenuBGM'); }
    else if(id==='select'){ playBGM('MainBGM'); }
    else if(id==='game'){ stopBGM(); }
    else if(id==='login' || id==='belajar'){ /* biarkan musik yang sedang berjalan tetap berjalan */ }
    else { stopBGM(); }
  }

  /* ═══ FADE-IN TEKS & TOMBOL MENU UTAMA (di detik ke-8 video latar) ═══
     Teks & tombol di layar Menu (logo, tagline, 3 tombol, label bawah) sengaja disembunyikan
     lewat class "mreveal" di CSS, lalu dimunculkan berbarengan (fade-in + naik sedikit,
     dengan jeda kecil antar-elemen) begitu video latar (menuUtamaBgVideo) sudah berjalan
     selama 8 detik — dipantau lewat currentTime video itu sendiri, BUKAN lewat setTimeout
     sejak halaman dibuka, supaya tetap sinkron walau video sempat buffering/telat mulai. */
  function scheduleMenuReveal(){
    const v = bgVideoEl(); const menu = document.getElementById('menu');
    if (!v || !menu || menu.dataset.revealed) return;
    function check(){
      if (v.currentTime >= 8){
        menu.classList.add('menu-revealed');
        menu.dataset.revealed = '1';
        v.removeEventListener('timeupdate', check);
      }
    }
    v.addEventListener('timeupdate', check);
    // Cadangan: kalau video gagal dimuat/diputar (mis. autoplay diblokir), tetap tampilkan
    // teks & tombol setelah 8 detik nyata agar menu tidak kosong selamanya.
    setTimeout(() => {
      if (!menu.dataset.revealed){ menu.classList.add('menu-revealed'); menu.dataset.revealed = '1'; }
    }, 8000);
  }

  /* ═══ SPLASH + SKY ═══ */
  (function(){ const sky=document.getElementById('sky'); if(sky) sky.style.display='none'; initBgVideo(); placeBgVideo('splash'); scheduleMenuReveal(); })();
  window.addEventListener('load', ()=>{ hydrateIcons(); buildClouds(); setTimeout(()=>{ document.getElementById('sBar').style.width='100%'; },80); setTimeout(()=>{ gotoScreen('menu'); },1700);
    /* Pulihkan sesi login dari Firebase (jika backend sudah tersambung) */
    if(window.BHAuth && BHAuth.isBackendActive()){
      BHAuth.onAuthChange(async fbUser=>{
        if(fbUser){
          S.auth.user={ uid:fbUser.uid, name:fbUser.displayName||S.playerName };
          S.playerName=S.auth.user.name;
          try{ const d=await BHAuth.loadPlayerData(); S.progress=d.progress||{}; S.attempts=d.attempts||{}; }catch(e){ /* tetap lanjut dgn progres kosong bila gagal memuat */ }
        }
        buildSettingsHub();
      });
    }
  });
  function buildMenuFloats(){ const ids=['tsunami','volcano','flood','flood','fire']; const order=['tsunami','volcano','flood','earthquake','fire']; const wrap=document.getElementById('menuFloats'); const ds=[{d:2.1,dl:0},{d:2.4,dl:.3},{d:2,dl:.15},{d:2.6,dl:.45},{d:1.9,dl:.2}]; wrap.innerHTML=order.map((g,i)=>'<span class="mf-icon" style="--d:'+ds[i].d+'s;--dl:'+ds[i].dl+'s">'+GLYPH[g]+'</span>').join(''); }
  function buildClouds(){ const sky=document.getElementById('sky'); [{t:12,w:130,d:46,dl:0},{t:30,w:90,d:60,dl:-20},{t:55,w:160,d:70,dl:-45},{t:72,w:110,d:55,dl:-10}].forEach(c=>{ const el=document.createElement('div'); el.className='cloud'; el.style.cssText='top:'+c.t+'%;width:'+c.w+'px;height:'+(c.w*0.32)+'px;animation-duration:'+c.d+'s;animation-delay:'+c.dl+'s;'; sky.appendChild(el); }); }

  /* ═══ MODAL + SETTINGS ═══ */
  function openModal(id){
    document.getElementById(id).classList.add('open');
    if(id==='settingsModal') buildSettingsHub();
    if(id==='settingsAccountModal') buildAccountBox();
    if(id==='settingsAudioModal') buildAudioBox();
    if(id==='koleksiModal') buildKoleksi();
    if(id==='howtoplayModal') initHTP();
  }
  /* Navigasi antar tampilan di dalam menu Pengaturan */
  function openSubSettings(id){ closeModal('settingsModal'); openModal(id); try{sfxClick();}catch(e){} }
  function backToSettings(id){ closeModal(id); openModal('settingsModal'); }

  /* ═══ PENGATURAN: ringkasan di menu utama Pengaturan ═══ */
  function buildSettingsHub(){
    const accSub=document.getElementById('sgAccountSub');
    if(accSub) accSub.textContent = S.auth.user ? ('Masuk sebagai '+S.auth.user.name) : 'Belum masuk';
  }

  /* ═══ PENGATURAN: Suara (Audio Utama → Musik & SFX) ═══ */
  const AUD_KEYS = { master:'Master', music:'Music', sfx:'Sfx' };
  function buildAudioBox(){
    Object.keys(AUD_KEYS).forEach(key=>{
      const suf=AUD_KEYS[key];
      const range=document.getElementById('range'+suf), val=document.getElementById('val'+suf), muteBtn=document.getElementById('mute'+suf);
      const muted=!!S.audio[key+'Muted'];
      if(range) range.value=S.audio[key];
      if(val) val.textContent=S.audio[key];
      if(muteBtn){
        muteBtn.classList.toggle('muted',muted);
        muteBtn.innerHTML='<span class="ic-h" data-ic="'+(muted?'volumeOff':'volume')+'"></span>';
        hydrateIcons(muteBtn);
      }
    });
  }
  function onAudioSlide(key,value){
    S.audio[key]=Math.max(0,Math.min(100,parseInt(value,10)||0));
    S.audio[key+'Muted']=false; // menyesuaikan volume otomatis membatalkan mute
    buildAudioBox();
    if(key==='music'||key==='master') updateBGMVolume();
  }
  function toggleAudioMute(key){
    S.audio[key+'Muted']=!S.audio[key+'Muted'];
    buildAudioBox();
    if(key==='music'||key==='master') updateBGMVolume();
    if(key==='sfx'||key==='master'){ if(!S.audio[key+'Muted']){ try{sfxClick();}catch(e){} } }
  }

  /* ═══ AKUN: kotak status di Pengaturan ═══ */
  function buildAccountBox(){
    const box=document.getElementById('sgAccount'); if(!box) return;
    const u=S.auth.user;
    if(u){
      const initial=(u.name||'?').trim().charAt(0).toUpperCase();
      box.innerHTML=
        '<div class="sg-label">Akun</div>'+
        '<div class="auth-acc-row"><div class="auth-acc-info"><span class="auth-acc-ava">'+initial+'</span><span class="auth-acc-text"><span class="auth-acc-name">'+u.name+'</span></span></div><button type="button" class="btn btn-secondary btn-xs" onclick="logoutAccount()">Keluar</button></div>'+

        '<div class="sg-label" style="margin-top:18px;">Ubah Nama Akun</div>'+
        '<div style="display:flex;gap:8px;"><input class="sg-input" type="text" id="accNameInput" value="'+u.name+'" maxlength="20" style="flex:1"><button type="button" class="btn btn-teal btn-xs" onclick="updateAccountName()">Simpan</button></div>'+

        '<div class="sg-label" style="margin-top:18px;display:flex;align-items:center;gap:6px;"><span class="ic-h" data-ic="key"></span> Ubah Kata Sandi</div>'+
        '<div style="display:flex;flex-direction:column;gap:8px;">'+
          '<input class="sg-input" type="password" id="accPwCurrent" placeholder="Kata sandi saat ini" autocomplete="current-password">'+
          '<input class="sg-input" type="password" id="accPwNew" placeholder="Kata sandi baru (min. 6 karakter)" autocomplete="new-password" minlength="6">'+
          '<input class="sg-input" type="password" id="accPwNew2" placeholder="Ulangi kata sandi baru" autocomplete="new-password" minlength="6">'+
          '<button type="button" class="btn btn-teal btn-xs" onclick="changeAccountPassword()" style="align-self:flex-start;">Simpan Kata Sandi</button>'+
        '</div>'+
        '<div class="auth-msg" id="accMsg"></div>'+

        '<button type="button" class="btn btn-secondary btn-sm auth-danger" style="width:100%;margin-top:18px;" onclick="confirmDeleteAccount()"><span class="ic-h" data-ic="trash"></span> Hapus Akun</button>';
      hydrateIcons(box);
    } else {
      box.innerHTML='<div class="sg-label">Akun</div><div class="auth-acc-row"><span style="font-size:13.5px;color:var(--ink-soft);font-weight:700;">Belum masuk</span><button type="button" class="btn btn-primary btn-xs" onclick="closeModal(\'settingsAccountModal\');closeModal(\'settingsModal\');gotoScreen(\'login\')">Masuk</button></div>';
    }
  }
  function showAccMsg(msg,type){ const el=document.getElementById('accMsg'); if(!el) return; el.textContent=msg; el.className='auth-msg show '+(type||'err'); }

  async function logoutAccount(){
    try{ if(window.BHAuth && BHAuth.isBackendActive()) await BHAuth.logout(); }catch(err){ /* tetap keluar secara lokal walau gagal */ }
    
    // Reset data user
    S.auth.user=null; 
    S.playerName='Pahlawan'; // Kembalikan nama ke default
    
    // Perbarui UI pengaturan
    buildAccountBox(); 
    buildSettingsHub(); 
    
    // Tutup modal pengaturan yang sedang terbuka
    closeModal('settingsAccountModal'); 
    closeModal('settingsModal');
    
    // Arahkan kembali ke menu utama (beranda)
    gotoScreen('menu'); 
    
    // Tampilkan notifikasi
    showToast('Kamu telah keluar dari akun.');
  }

  async function updateAccountName(){
    const inp=document.getElementById('accNameInput'); if(!inp) return;
    const newName=inp.value.trim();
    if(!newName){ showAccMsg('Nama tidak boleh kosong.'); return; }
    try{
      if(window.BHAuth && BHAuth.isBackendActive()){
        await BHAuth.renameAccount(newName);
      } else {
        if(newName.toLowerCase()!==S.auth.user.name.toLowerCase() && findAccount(newName)){ showAccMsg('Nama itu sudah dipakai pemain lain.'); return; }
        renameAccount(S.auth.user.name,newName);
      }
      S.auth.user.name=newName; S.playerName=newName;
      buildAccountBox(); buildSettingsHub();
      showToast('Nama berhasil diperbarui.');
    } catch(err){
      showAccMsg(window.BHAuth?BHAuth.friendlyError(err):'Gagal memperbarui nama.');
      try{sfxBad();}catch(e){}
    }
  }

  async function changeAccountPassword(){
    const curEl=document.getElementById('accPwCurrent'), newEl=document.getElementById('accPwNew'), new2El=document.getElementById('accPwNew2');
    if(!curEl) return;
    const cur=curEl.value, nw=newEl.value, nw2=new2El.value;
    if(!cur||!nw||!nw2){ showAccMsg('Isi semua kolom kata sandi.'); return; }
    if(nw.length<6){ showAccMsg('Kata sandi baru minimal 6 karakter.'); return; }
    if(nw!==nw2){ showAccMsg('Kata sandi baru dan ulangannya tidak sama.'); return; }
    try{
      if(window.BHAuth && BHAuth.isBackendActive()){
        await BHAuth.changePassword(cur,nw);
      } else {
        const acc=findAccount(S.auth.user.name);
        if(!acc||acc.password!==cur){ showAccMsg('Kata sandi saat ini salah.'); return; }
        acc.password=nw;
      }
      showAccMsg('Kata sandi berhasil diperbarui.','ok');
      try{sfxOk();}catch(e){}
      curEl.value=''; newEl.value=''; new2El.value='';
    } catch(err){
      showAccMsg(window.BHAuth?BHAuth.friendlyError(err):'Gagal memperbarui kata sandi.');
      try{sfxBad();}catch(e){}
    }
  }

  async function confirmDeleteAccount(){
    if(!confirm('Yakin ingin menghapus akun ini? Progres dan data akun akan hilang.')) return;
    try{
      if(window.BHAuth && BHAuth.isBackendActive()){
        const curEl=document.getElementById('accPwCurrent');
        await BHAuth.deleteAccount(curEl?curEl.value:'');
      } else {
        deleteAccount(S.auth.user.name);
      }
      S.auth.user=null; S.playerName='Pahlawan'; S.progress={}; S.attempts={};
      buildAccountBox(); buildSettingsHub();
      closeModal('settingsAccountModal'); closeModal('settingsModal');
      gotoScreen('menu');
      showToast('Akun telah dihapus.');
    } catch(err){
      showAccMsg(window.BHAuth?BHAuth.friendlyError(err):'Gagal menghapus akun. Coba masuk ulang lalu coba lagi.');
      try{sfxBad();}catch(e){}
    }
  }

  /* ═══ AKUN: alur gerbang sebelum bermain ═══ */
  function startPlayFlow(){ if(S.auth.user){ gotoScreen('select'); } else { S.authRedirect='select'; gotoScreen('login'); } }
  function openLoginScreen(){ if(!document.getElementById('tabLogin').classList.contains('on')) switchAuthTab('login'); hideAuthMsg(); }
  function switchAuthTab(tab){
    const isLogin=tab==='login';
    document.getElementById('tabLogin').classList.toggle('on',isLogin);
    document.getElementById('tabRegister').classList.toggle('on',!isLogin);
    document.getElementById('formLogin').classList.toggle('show',isLogin);
    document.getElementById('formRegister').classList.toggle('show',!isLogin);
    hideAuthMsg();
  }
  function togglePw(id,btn){
    const inp=document.getElementById(id); const show=inp.type==='password';
    inp.type=show?'text':'password';
    btn.innerHTML=svgIcon(show?'eyeOff':'eye');
  }
  function showAuthMsg(msg,type){ const el=document.getElementById('authMsg'); el.textContent=msg; el.className='auth-msg show '+(type||'err'); }
  function hideAuthMsg(){ const el=document.getElementById('authMsg'); if(el){ el.className='auth-msg'; el.textContent=''; } }
  async function attemptRegister(e){
    e.preventDefault();
    const btn=document.querySelector('#formRegister .auth-submit');
    const name=document.getElementById('regName').value.trim();
    const pw=document.getElementById('regPassword').value;
    const pw2=document.getElementById('regPassword2').value;
    if(!name||!pw||!pw2){ showAuthMsg('Semua kolom wajib diisi.'); return false; }
    if(pw.length<6){ showAuthMsg('Kata sandi minimal 6 karakter.'); return false; }
    if(pw!==pw2){ showAuthMsg('Kata sandi dan ulanginya tidak sama.'); return false; }
    if(btn){ btn.disabled=true; }
    try{
      if(window.BHAuth && BHAuth.isBackendActive()){
        await BHAuth.register(name,pw);
      } else {
        if(findAccount(name)){ showAuthMsg('Nama ini sudah terdaftar. Coba masuk saja.'); return false; }
        registerAccount(name,pw);
      }
      document.getElementById('formRegister').reset();
      switchAuthTab('login');
      document.getElementById('loginName').value=name;
      showAuthMsg('Akun berhasil dibuat! Silakan masuk untuk mulai bermain.','ok');
      try{sfxOk();}catch(err){}
    } catch(err){
      showAuthMsg(window.BHAuth?BHAuth.friendlyError(err):'Gagal membuat akun. Coba lagi, ya.');
      try{sfxBad();}catch(err2){}
    } finally { if(btn){ btn.disabled=false; } }
    return false;
  }
  async function attemptLogin(e){
    e.preventDefault();
    const btn=document.querySelector('#formLogin .auth-submit');
    const name=document.getElementById('loginName').value.trim();
    const pw=document.getElementById('loginPassword').value;
    if(!name||!pw){ showAuthMsg('Isi nama dan kata sandi dulu, ya.'); return false; }
    if(btn){ btn.disabled=true; }
    try{
      let user;
      if(window.BHAuth && BHAuth.isBackendActive()){
        user=await BHAuth.login(name,pw);
      } else {
        const acc=findAccount(name);
        if(!acc||acc.password!==pw){ showAuthMsg('Nama atau kata sandi salah.'); try{sfxBad();}catch(err){} return false; }
        user={ name:acc.name };
      }
      S.auth.user=user;
      S.playerName=user.name;
      S.progress = user.progress || {};
      S.attempts = user.attempts || {};
      hideAuthMsg();
      try{sfxOk();}catch(err){}
      const target=S.authRedirect||'select'; S.authRedirect=null;
      gotoScreen(target);
    } catch(err){
      showAuthMsg(window.BHAuth?BHAuth.friendlyError(err):'Nama atau kata sandi salah.');
      try{sfxBad();}catch(err2){}
    } finally { if(btn){ btn.disabled=false; } }
    return false;
  }
  function closeModal(id){ document.getElementById(id).classList.remove('open'); }
  function applyAnim(){ document.body.classList.toggle('no-anim',!S.anim); }
  function buildKoleksi(){
    let total=0; SCENARIOS.forEach(s=>{ total+=(S.progress[s.id]||0); }); const max=SCENARIOS.length*3;
    const tier= total>=max?'Pahlawan Siaga': total>=14?'Jagoan Siaga': total>=7?'Penjelajah Siaga':'Pemula Siaga';
    let html='<div class="kol-head"><div class="kol-tier">'+tier+'</div><div class="kol-track"><div class="kol-fill" style="width:'+Math.round(total/max*100)+'%"></div></div><div class="kol-count">'+total+' / '+max+' BINTANG</div></div>';
    if(total===0){ html+='<div class="kol-empty">'+mascotSvg('mascot')+'<p>Lencana pertamamu menunggu!<br>Selesaikan misi untuk mengumpulkan bintang dan lencana.</p><button class="btn btn-primary" onclick="closeModal(\'koleksiModal\');gotoScreen(\'select\')">'+svgIcon('play')+' Mulai Misi Pertama</button></div>'; }
    else { html+='<div class="bdg-grid">'+SCENARIOS.map(s=>{ const st=S.progress[s.id]||0; return '<div class="bdg t'+st+'" style="--cc:'+s.cardColor+'"><div class="bdg-ring">'+cardArt(s.id)+'</div><div class="bdg-name">'+s.title+'</div><div class="bdg-stars">'+starsMarkup(st)+'</div></div>'; }).join('')+'</div>'; }
    document.getElementById('kolList').innerHTML=html;
  }

  /* ═══ HOW TO PLAY ═══ */
  function initHTP(){ S.htpIdx=0; renderHTPDots(); showHTPSlide(0); }
  function renderHTPDots(){ liquidDots('htpDots', S.HTP_TOTAL, S.htpIdx, null); }
  function showHTPSlide(i){ document.querySelectorAll('.htp-slide').forEach((s,si)=>s.classList.toggle('show',si===i)); renderHTPDots(); document.getElementById('htpNextBtn').textContent=(i===S.HTP_TOTAL-1)?'Tutup':'Selanjutnya'; }
  function htpNext(){ if(S.htpIdx<S.HTP_TOTAL-1){ S.htpIdx++; showHTPSlide(S.htpIdx); } else closeModal('howtoplayModal'); }
  function htpPrev(){ if(S.htpIdx>0){ S.htpIdx--; showHTPSlide(S.htpIdx); } else closeModal('howtoplayModal'); }

  /* ═══ DASHBOARD ═══ */
  const MCODE={earthquake:'MISI 01',flood:'MISI 02',landslide:'MISI 03',tornado:'MISI 04',fire:'MISI 05',volcano:'MISI 06',tsunami:'MISI 07'};
  function nextMissionId(){
    for(const id of MISSION_ORDER){ if(isMissionUnlocked(id) && (S.progress[id]||0)<2) return id; }
    for(const id of MISSION_ORDER){ if(isMissionUnlocked(id) && (S.progress[id]||0)<3) return id; }
    return MISSION_ORDER[MISSION_ORDER.length-1];
  }
  function buildAdvBg(){
    /* Latar belakang jalur misi berupa elemen <img id="advBgImg"> sungguhan (lihat index.html),
       fungsi ini hanya menyesuaikan tinggi gambarnya mengikuti panjang jalur.
       PENTING: jangan ukur dari sc.scrollHeight — gambar ini sendiri adalah anak dari
       #selContent, sehingga tingginya ikut masuk ke perhitungan scrollHeight milik
       kontainernya sendiri. Akibatnya, begitu tinggi gambar sempat membesar sekali saja
       (misalnya karena reflow sesaat saat browser di-zoom), scrollHeight tidak akan pernah
       lagi lebih kecil dari nilai itu, sehingga gambar "nyangkut" pada ukuran zoom yang
       salah walau zoom sudah dikembalikan ke 100%. Untuk itu, tinggi diukur dari posisi
       & tinggi konten asli (#scGrid), yang sama sekali tidak dipengaruhi oleh gambar. */
    const sc=document.getElementById('selContent'); const img=document.getElementById('advBgImg');
    const grid=document.getElementById('scGrid');
    if(!sc||!img) return;
    const contentBottom = grid ? (grid.offsetTop + grid.offsetHeight) : 0;
    const padBottom = parseFloat(getComputedStyle(sc).paddingBottom)||0;
    const h = Math.max(contentBottom + padBottom + 60, sc.clientHeight||0, 1);
    img.style.height = h+'px';
  }
  function buildDashboard(){
    document.getElementById('selGreeting').textContent='Halo, '+S.playerName+'!';
    let total=0; SCENARIOS.forEach(s=>{ total+=(S.progress[s.id]||0); });
    document.getElementById('selTotal').textContent=total;
    const max=SCENARIOS.length*3;
    const pf=document.getElementById('selProgFill'); if(pf) pf.style.width=Math.round(total/max*100)+'%';
    const pl=document.getElementById('selProgLbl'); if(pl) pl.textContent=total+'/'+max+' bintang terkumpul';
    const grid=document.getElementById('scGrid'); grid.className='adv-path';
    const activeId=nextMissionId();
    const ROW=158, xs=[18,50,82,50,18,50,82];
    let html='<svg class="adv-svg" id="advSvg" aria-hidden="true"></svg>';
    SCENARIOS.forEach((s,i)=>{
      const unlocked=isMissionUnlocked(s.id), st=S.progress[s.id]||0;
      const cls=!unlocked?'locked':(st>=2?'done':(st>0?'part':''));
      const act=((s.id===activeId&&unlocked)?' adv-active':'')+(i===SCENARIOS.length-1?' adv-boss':'');
      const prev=SCENARIOS[i-1];
      html+='<button class="adv-node '+cls+act+'" style="--cc:'+s.cardColor+';left:'+xs[i%xs.length]+'%;top:'+(i*ROW)+'px" onclick="openMissionSheet(\''+s.id+'\')">'+
        '<span class="adv-ring"><span class="adv-img">'+cardArt(s.id)+'</span>'+(unlocked?'':'<span class="adv-lock">'+svgIcon('lock')+'</span>')+((s.id===activeId&&unlocked)?'<span class="adv-go">MULAI</span>':'')+'</span>'+(i===SCENARIOS.length-1?'<span class="adv-boss-chip">MISI TERAKHIR</span>':'')+
        '<span class="adv-code">'+(MCODE[s.id]||'MISI')+'</span>'+
        '<span class="adv-title">'+s.title+'</span>'+
        (unlocked?'<span class="adv-stars">'+starsMarkup(st)+'</span>':'<span class="adv-req">'+svgIcon('lock')+'Butuh 2 bintang di '+(prev?MCODE[prev.id]:'misi sebelumnya')+'</span>')+
        '</button>';
    });
    grid.style.height=(SCENARIOS.length*ROW+70)+'px';
    grid.innerHTML=html;
    requestAnimationFrame(()=>{ drawAdvPath(); buildAdvBg(); });
  }
  /* Bentuk satu jejak sepatu (siluet sol sepatu), pusatnya sudah dinolkan lewat translate(-10,-17)
     saat dipakai, supaya rotate/scale terjadi tepat di tengah jejak. */
  const FOOT_SHAPE = '<path d="M10 0c4.5 0 7.6 3.4 7.6 8.6 0 4-1.8 6-2.4 9-.7 3.4.4 7-1 10.8C13.2 32 11.7 34 10 34s-3.2-2-4.2-5.6c-1.4-3.8-.3-7.4-1-10.8-.6-3-2.4-5-2.4-9C2.4 3.4 5.5 0 10 0z"/>';
  function bezPt(t,p0,p1,p2,p3){ const mt=1-t, a=mt*mt*mt, b=3*mt*mt*t, c=3*mt*t*t, d=t*t*t; return { x:a*p0.x+b*p1.x+c*p2.x+d*p3.x, y:a*p0.y+b*p1.y+c*p2.y+d*p3.y }; }
  function drawAdvPath(){
    const grid=document.getElementById('scGrid'); const svg=document.getElementById('advSvg');
    if(!grid||!svg||!grid.classList.contains('adv-path')) return;
    const W=grid.clientWidth||520, H=grid.clientHeight||1;
    const nodes=[...grid.querySelectorAll('.adv-node')]; if(nodes.length<2) return;
    const pts=nodes.map(n=>{ const ring=n.querySelector('.adv-ring'); return { x:n.offsetLeft, y:n.offsetTop+ring.offsetTop+ring.offsetHeight/2 }; });
    svg.setAttribute('viewBox','0 0 '+W+' '+H);
    const STEP=28; // tidak lagi dipakai untuk jejak, disisakan untuk kompatibilitas komentar
    let trackOut='';
    for(let i=0;i<pts.length-1;i++){
      const a=pts[i], b=pts[i+1], my=(a.y+b.y)/2;
      const c1={x:a.x,y:my}, c2={x:b.x,y:my};
      const open=isMissionUnlocked(SCENARIOS[i+1].id);
      const d='M '+a.x.toFixed(1)+' '+a.y.toFixed(1)+' C '+c1.x.toFixed(1)+' '+c1.y.toFixed(1)+', '+c2.x.toFixed(1)+' '+c2.y.toFixed(1)+', '+b.x.toFixed(1)+' '+b.y.toFixed(1);
      trackOut+='<path class="adv-track '+(open?'open':'locked')+'" d="'+d+'"/>';
    }
    svg.innerHTML=trackOut;
  }
  window.addEventListener('resize', ()=>{ const sel=document.getElementById('select'); if(sel&&sel.classList.contains('active')){ drawAdvPath(); buildAdvBg(); } });
  function openMissionSheet(id){
    const s=SCENARIOS.find(x=>x.id===id); const unlocked=isMissionUnlocked(id); const st=S.progress[id]||0;
    const i=MISSION_ORDER.indexOf(id); const prev=SCENARIOS[i-1];
    const card=document.getElementById('missionSheetCard');
    card.style.setProperty('--cc', s.cardColor);
    card.innerHTML='<div class="sh-art'+(unlocked?'':' locked')+'">'+cardArt(id)+'<button class="sh-close" onclick="closeModal(\'missionSheet\')" aria-label="Tutup">'+svgIcon('close')+'</button></div>'+
      '<div class="sh-body"><div class="sh-code">'+(MCODE[id]||'MISI')+'</div><div class="sh-title">'+s.title+'</div>'+
      '<span class="sh-loc">'+svgIcon('pin')+' '+s.location+'</span>'+
      '<div class="sh-stars">'+starsMarkup(st)+'</div>'+
      (unlocked
        ? '<div class="sh-actions"><button class="btn btn-primary" onclick="closeModal(\'missionSheet\');startScenario(\''+id+'\')">'+svgIcon('play')+' Mulai Misi</button></div>'
        : '<div class="sh-req">'+svgIcon('lock')+'<span>Misi ini masih terkunci. Dapatkan minimal <b>2 bintang</b> di misi \''+(prev?prev.title:'sebelumnya')+'\' untuk membukanya.</span></div>'+
          '<div class="sh-actions"><button class="btn btn-secondary" onclick="closeModal(\'missionSheet\')">'+svgIcon('close')+' Tutup</button></div>')+
      '</div>';
    openModal('missionSheet');
  }

  /* ═══ START GAME ═══ */
  function placeHero(el,pose,x,y){ el.innerHTML=heroPose(pose); el.style.left=x+'%'; el.style.bottom=y+'%'; }
  /* ═══ BELAJAR / MATERI ═══ */
  const LCODE={earthquake:'MATERI 01',flood:'MATERI 02',landslide:'MATERI 03',tornado:'MATERI 04',fire:'MATERI 05',volcano:'MATERI 06',tsunami:'MATERI 07'};
  function buildLearn(){
    document.getElementById('learnRail').innerHTML=SCENARIOS.map((s,i)=>{
      const num=('0'+(i+1)).slice(-2);
      return '<button class="rd-item" id="rd-item-'+s.id+'" style="--cc:'+s.cardColor+'" onclick="selectMateri(\''+s.id+'\')">'+
        '<span class="rd-ithumb">'+cardArt(s.id)+'</span><span class="rd-inum">'+num+'</span><span class="rd-ititle">'+s.title+'</span></button>';
    }).join('');
    selectMateri(SCENARIOS[0].id);
  }
  function renderLearnBody(sections){
    if(!sections || !sections.length) return '<div class="lb-empty">'+svgIcon('book')+'<b>Materi sedang disiapkan</b><span>Konten untuk topik ini akan segera ditambahkan.</span></div>';
    return sections.map(sec=>{
      const hd=sec.heading||''; const hic= hd.indexOf('Apa itu')>-1?'question': hd.indexOf('Tanda')>-1?'alert': hd.indexOf('Dampak')>-1?'target': hd.indexOf('Menyelamatkan')>-1?'runSafe':'book';
      const h=hd?'<h3 class="lb-h"><span class="lb-hic">'+svgIcon(hic)+'</span>'+hd+'</h3>':'';
      const paras=(sec.paras||[]).map(p=>'<p class="lb-p">'+p+'</p>').join('');
      const list=(sec.list&&sec.list.length)?'<ol class="lb-list">'+sec.list.map(li=>'<li>'+li+'</li>').join('')+'</ol>':'';
      const tip=sec.tip?'<div class="lb-tip">'+mascotSvg('mascot')+'<span class="lb-tip-body"><b>Kata Siaga</b>'+sec.tip+'</span></div>':'';
      return '<section class="lb-sec">'+h+paras+list+tip+'</section>';
    }).join('');
  }
  function selectMateri(id){
    const m=LEARN[id]||{}; const sc=SCENARIOS.find(s=>s.id===id)||{}; const color=sc.cardColor||'var(--siaga)';
    document.getElementById('learnRead').innerHTML=
      '<div class="rd-hero" style="--cc:'+color+'"><div class="rd-hero-art">'+cardArt(id)+'</div>'+
      '<div class="rd-hero-info"><div class="rd-code">'+(LCODE[id]||'MATERI')+'</div><div class="rd-title">'+(m.title||sc.title||'')+'</div>'+
      '<div class="rd-sub">'+(m.subtitle||'')+'</div>'+
      '<div class="rd-meta"><span class="rd-chap">'+svgIcon('book')+' Bab '+(SCENARIOS.findIndex(x=>x.id===id)+1)+' dari '+SCENARIOS.length+'</span><span class="rd-hero-stars">'+starsMarkup(S.progress[id]||0)+'</span></div></div></div>'+
      '<div class="learn-body">'+renderLearnBody(m.sections)+'</div>';
    document.querySelectorAll('#learnRail .rd-item').forEach(el=>el.classList.remove('active'));
    const act=document.getElementById('rd-item-'+id); if(act) act.classList.add('active');
    const mn=document.getElementById('belajarMain'); if(mn) mn.scrollTop=0;
    try{sfxClick();}catch(e){}
  }

  function shuffleArr(arr){ const a=arr.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); const t=a[i]; a[i]=a[j]; a[j]=t; } return a; }

  /* ═══ LIQUID DOT INDICATOR ═══
     Dot aktif berbentuk bulat saat diam; ketika berpindah slide/soal, ia meregang
     dulu seperti "cacing" menjangkau posisi tujuan lalu menyusut kembali jadi bulat. */
  function liquidDots(containerId, total, activeIndex, colorVal){
    const wrap=document.getElementById(containerId); if(!wrap) return;
    if(wrap.offsetParent===null){ requestAnimationFrame(()=>liquidDots(containerId,total,activeIndex,colorVal)); return; }
    let dots=wrap.querySelectorAll('.dot-static');
    if(dots.length!==total){
      wrap.innerHTML='';
      for(let i=0;i<total;i++){ const d=document.createElement('div'); d.className='dot-static'; wrap.appendChild(d); }
      const liquid=document.createElement('div'); liquid.className='dot-liquid'; wrap.appendChild(liquid);
      wrap.dataset.prevIdx='-1';
      dots=wrap.querySelectorAll('.dot-static');
    }
    const liquid=wrap.querySelector('.dot-liquid'); if(!liquid) return;
    dots.forEach((d,i)=>d.classList.toggle('done', i<activeIndex));
    if(colorVal) liquid.style.background=colorVal;
    const target=dots[activeIndex]; if(!target) return;
    const tLeft=target.offsetLeft, tTop=target.offsetTop, tW=target.offsetWidth, tH=target.offsetHeight;
    const prevIdx=parseInt(wrap.dataset.prevIdx,10);
    if(isNaN(prevIdx) || prevIdx<0 || prevIdx===activeIndex || !dots[prevIdx]){
      liquid.style.transition='none';
      liquid.style.left=tLeft+'px'; liquid.style.top=tTop+'px';
      liquid.style.width=tW+'px'; liquid.style.height=tH+'px'; liquid.style.borderRadius=tH+'px';
      void liquid.offsetWidth;
      liquid.style.transition='';
    } else {
      const prevEl=dots[prevIdx];
      const pLeft=prevEl.offsetLeft, pW=prevEl.offsetWidth;
      const wormLeft=Math.min(pLeft,tLeft), wormRight=Math.max(pLeft+pW,tLeft+tW);
      liquid.style.transition='left .16s cubic-bezier(.4,0,.2,1), width .16s cubic-bezier(.4,0,.2,1)';
      liquid.style.top=tTop+'px'; liquid.style.height=tH+'px'; liquid.style.borderRadius=tH+'px';
      liquid.style.left=wormLeft+'px'; liquid.style.width=(wormRight-wormLeft)+'px';
      clearTimeout(wrap._liquidTimer);
      wrap._liquidTimer=setTimeout(()=>{
        liquid.style.transition='left .3s cubic-bezier(.34,1.56,.64,1), width .3s cubic-bezier(.34,1.56,.64,1)';
        liquid.style.left=tLeft+'px'; liquid.style.width=tW+'px';
      },170);
    }
    wrap.dataset.prevIdx=String(activeIndex);
  }

  function startScenario(id){
    if(!isMissionUnlocked(id)){ lockedTap(id); return; }
    S.scenario=SCENARIOS.find(s=>s.id===id); S.selectedDecision=null; S.workspace=[]; S.score=0;
    S.answerLog=[]; S.attempts[id]=(S.attempts[id]||0)+1;
    { const bank=QUESTIONS[id];
      const fallback={q:'Apa yang harus kamu lakukan lebih dulu?',opts:S.scenario.decisions,correct:S.scenario.correctDecision,correctHint:S.scenario.correctHint,wrongHints:S.scenario.wrongHints};
      S.qQueue=(bank&&bank.length)?shuffleArr(bank):[fallback];
      S.qIndex=0; S.q=S.qQueue[0]; }
    const sc=S.scenario;
    document.getElementById('game').style.setProperty('--cc', sc.cardColor);
    document.getElementById('gGlyph').innerHTML=GLYPH[id];
    document.getElementById('gTitle').textContent=sc.title;
    document.getElementById('gPlayer').textContent=S.playerName;
    document.getElementById('gScore').textContent='0';
    const useVid = !!(SCENE_VIDEO[id] && S.anim);
    document.getElementById('simScene').innerHTML=sceneMarkup(id,'a');
    const simC=document.getElementById('simChar'); const wA=sc.charAnims.calm||{x:40,y:22}; placeHero(simC,'idle',wA.x,wA.y); simC.style.display=useVid?'none':'';
    document.getElementById('simBubble').innerHTML=svgIcon('alert')+' Situasi darurat!';
    const sw=document.getElementById('simWater'); sw.style.height='0'; sw.style.display=useVid?'none':'';
    if(sc.waterRise && !useVid){ setTimeout(()=>{ sw.style.height='45%'; },600); }
    if(id==='earthquake' && S.anim && !useVid){ const sl=document.querySelector('#simScene .scene'); if(sl){ sl.style.animation='shake 1s ease 3'; setTimeout(()=>{ sl.style.animation=''; },3200); } }
    document.getElementById('storyTitle').textContent=sc.story.title;
    document.getElementById('storyText').textContent=sc.story.text;
    renderDecisionQuestion();
    setPhase('decision'); setPH(1);
    gotoScreen('game');
  }

  /* ═══ DECISION PHASE ═══ */
  function renderDecisionQuestion(){
    S.q=S.qQueue[S.qIndex]; S.selectedDecision=null;
    const total=S.qQueue.length, cur=S.qIndex+1;
    const lbl=document.getElementById('dpLabel'); if(lbl) lbl.textContent='Soal '+cur+' dari '+total;
    liquidDots('dpDots', S.qQueue.length, S.qIndex, (S.scenario&&S.scenario.cardColor)||null);
    const dq=document.getElementById('decQ');
    dq.innerHTML='<span class="ic-h">'+svgIcon('question')+'</span> '+S.q.q;
    const doo=document.getElementById('decOpts');
    const LETTERS=['A','B','C','D','E'];
    const shuffledOpts=shuffleArr(S.q.opts).map((o,i)=>({ origId:o.id, text:o.text, label:LETTERS[i] }));
    S.qShuffled=shuffledOpts;
    doo.innerHTML=shuffledOpts.map(d=>'<div class="dec-opt" id="opt-'+d.label+'" onclick="pickDecision(\''+d.label+'\',this)"><div class="dec-letter">'+d.label+'</div><div class="dec-text">'+d.text+'</div></div>').join('');
    if(S.anim){
      const dp=document.getElementById('decProgress');
      [dp,dq,doo].forEach(el=>{ if(!el) return; el.classList.remove('q-anim'); void el.offsetWidth; el.classList.add('q-anim'); });
      const dpDots=document.getElementById('dpDots'); if(dpDots){ dpDots.classList.remove('q-anim-dots'); void dpDots.offsetWidth; dpDots.classList.add('q-anim-dots'); }
      doo.querySelectorAll('.dec-opt').forEach(o=>o.classList.add('q-anim'));
    }
    const hb0=document.getElementById('decHint'); if(hb0){ hb0.style.display='none'; hb0.innerHTML=''; }
    const b=document.getElementById('decNextBtn'); b.disabled=true; b.style.opacity='.45';
    b.textContent=(cur<total)?'Lanjut ke Soal Berikutnya':'Lanjut ke Blok';
    try{ document.getElementById('decProgress').scrollIntoView({behavior:S.anim?'smooth':'auto',block:'nearest'}); }catch(e){}
  }
  function pickDecision(id,el){ S.selectedDecision=id; document.querySelectorAll('.dec-opt').forEach(o=>o.classList.remove('chosen')); el.classList.add('chosen'); const b=document.getElementById('decNextBtn'); b.disabled=false; b.style.opacity='1'; }
  function confirmDecision(){
    if(!S.selectedDecision) return;
    const chosen=S.qShuffled.find(d=>d.label===S.selectedDecision);
    const correctOpt=S.qShuffled.find(d=>d.origId===S.q.correct);
    document.querySelectorAll('.dec-opt').forEach(opt=>{ opt.style.pointerEvents='none'; const oId=opt.id.replace('opt-',''); if(oId===correctOpt.label) opt.classList.add('opt-correct'); else if(oId===S.selectedDecision) opt.classList.add('opt-wrong'); });
    const correct=S.selectedDecision===correctOpt.label;
    const chosenEl=document.getElementById('opt-'+S.selectedDecision);
    if(correct){ S.score+=6; sfxOk(); miniBurst(chosenEl); } else { sfxBad(); if(S.anim&&chosenEl) chosenEl.classList.add('shake'); }
    S.answerLog.push({ soal:S.q.q, dijawab:chosen.text, benar:correct });
    document.getElementById('gScore').textContent=S.score;
    const hintTxt=correct?(S.q.correctHint||'Tepat! Itu keputusan yang paling aman.'):((S.q.wrongHints&&S.q.wrongHints[chosen.origId])||'Kurang tepat. Ingat, pilih tindakan yang paling aman.');
    const hb=document.getElementById('decHint'); if(hb){ hb.className='dec-hint '+(correct?'ok':'no'); hb.style.display='flex'; hb.innerHTML='<span class="dh-bub">'+(correct?'<b>Tepat sekali!</b> ':'<b>Hmm, kurang tepat.</b> ')+hintTxt+'</span>'; try{ hb.scrollIntoView({behavior:S.anim?'smooth':'auto',block:'nearest'}); }catch(e){} }
    document.getElementById('decReminder').innerHTML='Keputusanmu: <strong style="color:var(--siaga-d)">'+chosen.text+'</strong><br><small style="color:var(--ink-soft)">'+hintTxt+'</small>';
    const nb=document.getElementById('decNextBtn'); nb.disabled=true; nb.style.opacity='.45';
    const isLast=(S.qIndex>=S.qQueue.length-1);
    setTimeout(()=>{
      if(isLast){ setPhase('blocks'); setPH(2); buildPalette(); renderWS(); updateBlkCount(); }
      else { S.qIndex++; renderDecisionQuestion(); }
    },1800);
  }
  function miniBurst(el){ if(!S.anim||!el) return; const r=el.getBoundingClientRect(); const cols=['#E0552B','#1E8A4C','#F2B43A','#2C6E8F'];
    for(let i=0;i<14;i++){ const d=document.createElement('div'); d.className='mb-dot'; d.style.position='fixed'; d.style.left=(r.left+r.width*0.5)+'px'; d.style.top=(r.top+r.height*0.5)+'px'; d.style.background=cols[i%4]; const ang=Math.random()*6.283, dist=40+Math.random()*60; d.style.setProperty('--dx',(Math.cos(ang)*dist)+'px'); d.style.setProperty('--dy',(Math.sin(ang)*dist)+'px'); document.body.appendChild(d); setTimeout(()=>d.remove(),750); }
  }

  /* ═══ PHASE SWITCH ═══ */
  function setPhase(p){ document.getElementById('ph-decision').style.display=p==='decision'?'flex':'none'; document.getElementById('ph-decision').classList.toggle('show',p==='decision'); document.getElementById('ph-blocks').style.display=p==='blocks'?'flex':'none'; document.getElementById('ph-blocks').classList.toggle('show',p==='blocks'); }
  function setPH(n){ for(let i=1;i<=3;i++){ const el=document.getElementById('ps'+i); el.classList.remove('active','done'); const num=el.querySelector('.ph-num'); if(i<n){ el.classList.add('done'); num.innerHTML=svgIcon('check'); } else if(i===n){ el.classList.add('active'); num.innerHTML='<span class="ph-numtext">'+i+'</span>'; } else { num.innerHTML='<span class="ph-numtext">'+i+'</span>'; } } }
  function backToDecision(){ setPhase('decision'); setPH(1); }

  /* ═══ BLOCKS / PALETTE ═══ */
  function buildPalette(){
    const sc=S.scenario; let ids=(S.difficulty==='hard'?Object.keys(BLOCKS):sc.availableBlocks).slice();
    for(let i=ids.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); const t=ids[i]; ids[i]=ids[j]; ids[j]=t; }
    const scroll=document.getElementById('palScroll');
    scroll.innerHTML='';
    ids.forEach(id=>{ const b=BLOCKS[id]; const el=document.createElement('div'); el.className='blk pal-blk';
      el.style.cssText='--c:'+b.color+';--fg:'+b.fg+';'; el.draggable=true; el.title=b.desc;
      el.innerHTML='<span class="ico-chip">'+svgIcon(b.icon)+'</span><span class="lbl">'+b.label+'</span><span class="add">'+svgIcon('plus')+'</span>';
      el.addEventListener('click',()=>addToWS(id));
      el.addEventListener('dragstart',e=>{ DRAG={type:'add',id:id}; e.dataTransfer.effectAllowed='copy'; try{e.dataTransfer.setData('text/plain',id);}catch(x){} });
      el.addEventListener('dragend',()=>{ DRAG=null; });
      scroll.appendChild(el); });
  }
  function maxBlocks(){ return S.difficulty==='hard'?8:6; }
  function flashFull(){ const dz=document.getElementById('dropZone'); dz.style.borderColor='var(--signal)'; setTimeout(()=>dz.style.borderColor='',800); }
  function addToWS(id){ if(S.workspace.length>=maxBlocks()){ flashFull(); return; } S.workspace.push(id); sfxAdd(); renderWS(); updateBlkCount(); }
  function insertAt(idx,id){ if(S.workspace.length>=maxBlocks()){ flashFull(); return; } S.workspace.splice(idx,0,id); sfxAdd(); renderWS(); updateBlkCount(); }
  function moveTo(from,to){ if(from===to) return; const [x]=S.workspace.splice(from,1); if(from<to) to--; S.workspace.splice(to,0,x); sfxClick(); renderWS(); updateBlkCount(); }
  function moveBlock(idx,dir){ const j=idx+dir; if(j<0||j>=S.workspace.length) return; const t=S.workspace[idx]; S.workspace[idx]=S.workspace[j]; S.workspace[j]=t; sfxClick(); renderWS(); updateBlkCount(); }
  function removeFromWS(idx){ S.workspace.splice(idx,1); sfxRemove(); renderWS(); updateBlkCount(); }
  function clearWS(){ if(S.workspace.length) sfxRemove(); S.workspace=[]; renderWS(); updateBlkCount(); }
  function renderWS(){
    const dz=document.getElementById('dropZone');
    if(S.workspace.length===0){ dz.innerHTML='<div class="drop-empty">'+mascotSvg('mascot')+'<span>Susun langkah penyelamatanmu di sini!</span><span style="font-size:12.5px;opacity:.85;">Klik atau geser blok dari panel Blok Tersedia</span></div><div class="ws-slot"><span class="ws-slot-num">1</span><span>Blok pertama diletakkan di sini</span></div>'; return; }
    dz.innerHTML=S.workspace.map((id,i)=>{ const b=BLOCKS[id];
      return '<div class="blk wsblk" data-idx="'+i+'" draggable="true" style="--c:'+b.color+';--fg:'+b.fg+';">'+
        '<span class="grip" aria-hidden="true">&#8942;&#8942;</span>'+
        '<span class="num">'+(i+1)+'</span>'+
        '<span class="ico">'+svgIcon(b.icon)+'</span>'+
        '<span class="lbl">'+b.label+'</span>'+
        '<span class="chk">'+svgIcon('check')+'</span>'+
        '<span class="ctrls"><button class="cbtn" title="Naikkan" onclick="moveBlock('+i+',-1)">'+svgIcon('arrowUp')+'</button>'+
        '<button class="cbtn" title="Turunkan" onclick="moveBlock('+i+',1)">'+svgIcon('arrowDown')+'</button>'+
        '<button class="cbtn del" title="Hapus" onclick="removeFromWS('+i+')">'+svgIcon('close')+'</button></span></div>';
    }).join('')+(S.workspace.length<maxBlocks()?'<div class="ws-slot"><span class="ws-slot-num">'+(S.workspace.length+1)+'</span><span>Tarik blok berikutnya ke sini</span></div>':'');
    dz.querySelectorAll('.wsblk').forEach(node=>{ const i=+node.dataset.idx;
      node.addEventListener('dragstart',e=>{ DRAG={type:'move',idx:i}; node.classList.add('dragging'); e.dataTransfer.effectAllowed='move'; try{e.dataTransfer.setData('text/plain','move');}catch(x){} });
      node.addEventListener('dragend',()=>{ node.classList.remove('dragging'); DRAG=null; });
      node.addEventListener('dragover',e=>{ if(!DRAG) return; e.preventDefault(); node.classList.add('drop-before'); });
      node.addEventListener('dragleave',()=>node.classList.remove('drop-before'));
      node.addEventListener('drop',e=>{ e.preventDefault(); e.stopPropagation(); node.classList.remove('drop-before'); if(!DRAG) return; if(DRAG.type==='add') insertAt(i,DRAG.id); else if(DRAG.type==='move') moveTo(DRAG.idx,i); DRAG=null; });
    });
  }
  function updateBlkCount(){ document.getElementById('blkCount').textContent=S.workspace.length; document.getElementById('runHint').textContent=(S.difficulty==='easy'&&S.workspace.length<3)?'(minimal 3 blok!)':''; }
  function dzOver(e){ e.preventDefault(); document.getElementById('dropZone').classList.add('over'); }
  function dzLeave(){ document.getElementById('dropZone').classList.remove('over'); }
  function dzDrop(e){ e.preventDefault(); document.getElementById('dropZone').classList.remove('over'); if(!DRAG) return; if(DRAG.type==='add') addToWS(DRAG.id); else if(DRAG.type==='move'){ const [x]=S.workspace.splice(DRAG.idx,1); S.workspace.push(x); sfxClick(); renderWS(); updateBlkCount(); } DRAG=null; }

  /* ═══ RUN SIMULATION ═══ */
  function delay(ms){ return new Promise(r=>setTimeout(r,ms)); }
  async function runSeq(){
    if(S.workspace.length===0){ flashFull(); return; }
    const sc=S.scenario; const rc=document.getElementById('runChar'); const rw=document.getElementById('runWater');
    const useVid = !!(SCENE_VIDEO[sc.id] && S.anim);
    const scn=document.getElementById('runScene');
    scn.innerHTML=sceneMarkup(sc.id,'b'); scn.classList.add('exec-dim');
    rw.style.height='0'; rw.style.display=useVid?'none':'';
    const wA=sc.charAnims.calm||{x:40,y:22}; placeHero(rc,'idle',wA.x,wA.y); rc.style.display=useVid?'none':'';
    if(sc.waterRise && !useVid){ setTimeout(()=>{ rw.style.height='45%'; },500); }
    const total=S.workspace.length;
    const MOTION={calm:'mv-pulse',wait:'mv-pulse',checkAround:'mv-look',shelter:'mv-bob',takeBag:'mv-bob',runSafe:'mv-run',evacuate:'mv-run',callHelp:'mv-ring'};
    document.getElementById('execDots').innerHTML=S.workspace.map(()=>'<span class="exd"></span>').join('');
    const dots=[...document.querySelectorAll('#execDots .exd')];
    const card=document.getElementById('execCard');
    function setCard(icoHtml,color,name,desc,motion){
      card.classList.remove('in'); void card.offsetWidth;
      const ic=document.getElementById('execIco');
      ic.innerHTML=icoHtml; ic.className='exec-ico '+(motion||'');
      ic.style.background=color?color+'22':'#E7F3EA'; ic.style.color=color||'var(--siaga-d)';
      document.getElementById('execName').textContent=name;
      document.getElementById('execDesc').textContent=desc;
      card.classList.add('in');
    }
    const ov=document.getElementById('execOv'); ov.classList.add('show');
    document.getElementById('execStatus').textContent='Bersiap';
    setCard(mascotSvg('mascot'),'','Bersiap...','Ayo jalankan rencana penyelamatanmu!','mv-pulse');
    await delay(1000);
    for(let i=0;i<total;i++){
      const bid=S.workspace[i]; const b=BLOCKS[bid];
      document.getElementById('execStatus').textContent='Langkah '+(i+1)+' / '+total;
      dots.forEach((d,di)=>{ d.className='exd'+(di<i?' done':(di===i?' cur':'')); });
      setCard(svgIcon(b.icon), b.color, b.label, b.desc, MOTION[bid]||'mv-pulse');
      document.querySelectorAll('#dropZone .blk').forEach((el,bi)=>{ el.classList.remove('exec-cur','exec-done'); if(bi<i) el.classList.add('exec-done'); if(bi===i) el.classList.add('exec-cur'); });
      if(!useVid){ const a=sc.charAnims[bid]||{p:'idle',x:42,y:22}; placeHero(rc,a.p,a.x,a.y); }
      sfxStep();
      await delay(1900);
    }
    document.querySelectorAll('#dropZone .blk').forEach(el=>{ el.classList.remove('exec-cur'); el.classList.add('exec-done'); });
    dots.forEach(d=>d.className='exd done');
    document.getElementById('execStatus').textContent='Selesai!';
    setCard(mascotSvg('mascot'),'','Selesai!','Kerja bagus! Menghitung poinmu...','mv-bob');
    await delay(1150); ov.classList.remove('show'); scn.classList.remove('exec-dim'); calcAndShowResult();
  }

  /* ═══ SCORING + RESULT ═══ */
  function calcAndShowResult(){
    const sc=S.scenario; const perBlock=sc.requiredBlocks.length?60/sc.requiredBlocks.length:0; let blkScore=0; sc.requiredBlocks.forEach(r=>{ if(S.workspace.includes(r)) blkScore+=perBlock; });
    let matches=0; for(let i=0;i<Math.min(S.workspace.length,sc.correctSeq.length);i++){ if(S.workspace[i]===sc.correctSeq[i]) matches++; }
    let orderBonus = matches>=3?10:(matches>=2?5:0);
    const wrong=S.workspace.filter(b=>!sc.correctSeq.includes(b)).length; const penalty=Math.min(wrong*5,20);
    S.score=Math.round(Math.max(0,Math.min(100,S.score+blkScore+orderBonus-penalty)));
    document.getElementById('gScore').textContent=S.score; setPH(3); setTimeout(showResult,300);
  }
  function showResult(){
    const sc=S.scenario, score=S.score; let starCount,title,icon,cls,bg,col;
    if(score>=80){ starCount=3; title='Luar Biasa!'; icon='trophy'; cls='great'; bg='#E7F3EA'; col='var(--siaga-d)'; }
    else if(score>=50){ starCount=2; title='Bagus!'; icon='star'; cls='good'; bg='#FBEFD4'; col='var(--marker-d)'; }
    else if(score>=25){ starCount=1; title='Hampir!'; icon='refresh'; cls='bad'; bg='#FBEAE2'; col='var(--signal-d)'; }
    else { starCount=0; title='Tetap Semangat!'; icon='book'; cls='bad'; bg='#EAF1F5'; col='var(--denim-d)'; }
    const prevBest=S.progress[sc.id]||0;
    if(prevBest < starCount) S.progress[sc.id]=starCount;
    if(window.BHAuth && BHAuth.isBackendActive() && S.auth.user){
      BHAuth.recordSession({
        missionId: sc.id,
        rawScore: score,
        starCount: starCount,
        attemptNumber: S.attempts[sc.id]||1,
        answers: S.answerLog,
        progress: S.progress,
        attempts: S.attempts
      }).catch(()=>{ /* koneksi gagal — progres tetap tersimpan di sesi lokal ini */ });
    }
    const re=document.getElementById('resEmoji'); re.style.background=bg; re.style.color=col; re.innerHTML=svgIcon(icon);
    document.getElementById('resTitle').textContent=title; document.getElementById('resTitle').className='res-title '+cls;
    const stWrap=document.getElementById('resStars');
    stWrap.innerHTML=[0,1,2].map(i=>'<span class="res-star '+(i<starCount?'on':'off')+'">'+svgIcon('star')+'</span>').join('');
    const starEls=[...stWrap.querySelectorAll('.res-star')];
    if(S.anim){ starEls.forEach((el,i)=>{ setTimeout(()=>{ el.classList.add('pop'); if(i<starCount){ try{sfxStep();}catch(e){} } }, 380+i*320); }); }
    else starEls.forEach(el=>el.classList.add('pop'));
    const se=document.getElementById('resScore');
    if(S.anim){ se.textContent='0'; let t0=null; const dur=900; const tick=(ts)=>{ if(!t0)t0=ts; const p=Math.min(1,(ts-t0)/dur); se.textContent=Math.round(p*score); if(p<1) requestAnimationFrame(tick); }; requestAnimationFrame(tick); }
    else se.textContent=score;
    const sents=sc.explanation.split('. ').map(s=>s.trim()).filter(Boolean);
    document.getElementById('resExp').innerHTML='<div class="res-pts">'+sents.slice(0,4).map(s=>'<div class="res-pt">'+svgIcon('check')+'<span>'+s+(s.endsWith('.')?'':'.')+'</span></div>').join('')+'</div>';
    const fb=document.getElementById('resFeedback'); fb.innerHTML='<p class="res-seqlabel">URUTAN TERBAIK:</p>';
    sc.correctSeq.forEach((bid,i)=>{ const b=BLOCKS[bid]; const used=S.workspace.includes(bid); const inOrder=S.workspace[i]===bid;
      const ok=inOrder||used; const mark=ok?svgIcon('check'):svgIcon('close'); const tip=sc.tips[bid]||'';
      fb.innerHTML+='<div class="fb-item '+(ok?'fb-ok':'fb-miss')+'"><span class="fb-ico" style="background:'+b.color+'22;color:'+b.color+'">'+svgIcon(b.icon)+'</span><span>'+(i+1)+'. '+b.label+'</span><span class="fb-mark">'+mark+'</span></div>'+(tip?'<div class="fb-tip">'+tip+'</div>':'');
    });
    const mas=document.getElementById('resMascot');
    const idx=MISSION_ORDER.indexOf(sc.id); const nxt=MISSION_ORDER[idx+1];
    mas.className='res-mascot';
    if(starCount<2){ mas.className='res-mascot res-solo'; mas.style.display='flex'; mas.innerHTML='<span class="dh-bub">Hampir, '+S.playerName+'! Ingat urutan yang aman, ayo coba sekali lagi. Kamu pasti bisa!</span>'; }
    else if(nxt && prevBest<2){ const ns=SCENARIOS.find(x=>x.id===nxt); mas.className='res-mascot res-unlock'; mas.style.display='flex'; mas.innerHTML='<span class="ru-lock">'+svgIcon('unlock')+'</span><span class="dh-bub"><b>Misi baru terbuka!</b> '+(MCODE[nxt]||'')+' &mdash; '+ns.title+' kini bisa dimainkan.</span>'; try{sfxOk();}catch(e){} }
    else { mas.style.display='none'; mas.innerHTML=''; }
    let btns='<button class="btn btn-secondary" onclick="retryScenario()">'+svgIcon('refresh')+' Coba Lagi</button>';
    if(nxt){
      if(starCount>=2){ btns+='<button class="btn btn-primary" onclick="startScenario(\''+nxt+'\')">'+svgIcon('play')+' Misi Berikutnya</button>'; }
      else { btns+='<button class="btn btn-primary" disabled style="opacity:.5;cursor:not-allowed;" title="Raih minimal 2 bintang untuk membuka misi berikutnya">'+svgIcon('lock')+' Misi Berikutnya</button>'; }
    } else if(starCount>=2){
      btns+='<button class="btn btn-primary" onclick="gotoScreen(\'select\');setTimeout(()=>openModal(\'koleksiModal\'),350)">'+svgIcon('trophy')+' Lihat Lencanaku</button>';
    }
    document.getElementById('resActions').innerHTML=btns;
    gotoScreen('result');
    document.getElementById('result').scrollTop=0;
    if(score>=80){ sfxWin(); confetti(); } else if(score>=50) sfxOk(); else sfxBad();
  }
  function retryScenario(){ startScenario(S.scenario.id); }

  /* ═══ CONFETTI ═══ */
  function confetti(){ if(!S.anim) return; const cols=['#E0552B','#1E8A4C','#F2B43A','#2C6E8F','#6A5AA6','#C9772E']; const wrap=document.getElementById('confetti');
    for(let i=0;i<90;i++){ const d=document.createElement('div'); d.className='cf'; d.style.left=(Math.random()*100)+'%'; d.style.background=cols[i%cols.length]; d.style.setProperty('--x',(Math.random()*240-120)+'px'); d.style.setProperty('--r',(Math.random()*800-400)+'deg'); d.style.animationDelay=(Math.random()*.4)+'s'; d.style.animationDuration=(1.6+Math.random()*1.3)+'s'; wrap.appendChild(d); }
    setTimeout(()=>{ wrap.innerHTML=''; },3400);
  }

  document.addEventListener('DOMContentLoaded',()=>{ hydrateIcons(); });