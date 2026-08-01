/* BencanaHero — data: blok, skenario, soal, state, progres, suara */
  /* ═══ DATA: BLOCKS ═══ */
  const BLOCKS = {
    calm:        { icon:'calm',        label:'TETAP TENANG',        color:'#2F8E78', fg:'#fff', cat:'Pikiran',     desc:'Tarik napas dalam-dalam... tetap tenang supaya bisa berpikir jernih.' },
    checkAround: { icon:'checkAround', label:'PERIKSA SEKITAR',     color:'#6A5AA6', fg:'#fff', cat:'Pikiran',     desc:'Mengamati keadaan sekitar untuk menentukan langkah terbaik.' },
    shelter:     { icon:'shelter',     label:'BERLINDUNG',          color:'#1E8A4C', fg:'#fff', cat:'Aksi',        desc:'Mencari perlindungan dari bahaya yang ada di sekitar.' },
    runSafe:     { icon:'runSafe',     label:'LARI KE TEMPAT AMAN', color:'#E0552B', fg:'#fff', cat:'Aksi',        desc:'Berlari sekuat tenaga menjauhi zona bahaya!' },
    evacuate:    { icon:'evacuate',    label:'EVAKUASI',            color:'#C0392B', fg:'#fff', cat:'Aksi',        desc:'Keluar dari gedung atau area bahaya dengan tertib.' },
    takeBag:     { icon:'takeBag',     label:'AMBIL TAS SIAGA',     color:'#C9772E', fg:'#fff', cat:'Persiapan',   desc:'Membawa perlengkapan darurat: air, makanan, senter, dan obat!' },
    callHelp:    { icon:'callHelp',    label:'HUBUNGI BANTUAN',     color:'#2C6E8F', fg:'#fff', cat:'Komunikasi',  desc:'Menghubungi 112 (darurat), 113 (pemadam), atau orang dewasa.' },
    wait:        { icon:'wait',        label:'TUNGGU AMAN',         color:'#E0A52E', fg:'#3A2A06', cat:'Kendali',  desc:'Menunggu dengan sabar sampai keadaan benar-benar aman.' }
  };

  /* ═══ DATA: SCENARIOS ═══ */
  const SCENARIOS = [
    {
      id:'earthquake', title:'Gempa Bumi', location:'Di Sekolah', cardColor:'#C9772E', difficulty:'Mudah',
      story:{ title:'Gempa Bumi di Sekolah!', text:'Saat pelajaran berlangsung, tiba-tiba lantai kelas bergetar cukup kuat. Lampu bergoyang dan beberapa buku jatuh dari rak. Guru meminta semua siswa tetap tenang.' },
      decisions:[
        { id:'A', text:'Berlari keluar gedung lewat tangga secepatnya' },
        { id:'B', text:'Berlindung di bawah meja dan pegang kaki meja erat-erat' },
        { id:'C', text:'Berdiri di dekat jendela untuk melihat keadaan luar' } ],
      correctDecision:'B',
      correctHint:'Teknik "Merunduk, Berlindung, Pegangan" adalah yang paling aman saat gempa!',
      wrongHints:{ A:'Tangga bisa runtuh saat guncangan masih berlangsung.', C:'Kaca jendela bisa pecah dan melukai kamu!' },
      availableBlocks:['calm','shelter','wait','checkAround','evacuate','callHelp'],
      correctSeq:['calm','shelter','wait','evacuate','callHelp'],
      requiredBlocks:['shelter','wait','evacuate'],
      explanation:'Saat gempa di dalam gedung: MERUNDUK (jongkok), BERLINDUNG di bawah meja yang kokoh, lalu PEGANGAN pada kaki meja erat-erat. Tunggu sampai guncangan berhenti, jangan berlari keluar saat lantai masih bergetar! Setelah berhenti, evakuasi dengan tertib ke lapangan terbuka yang jauh dari gedung.',
      tips:{ calm:'Tetap tenang membantumu berpikir jernih dan tidak panik.', shelter:'WAJIB! Lindungi kepalamu dari benda yang berjatuhan.', wait:'WAJIB! Jangan bergerak selama masih ada guncangan.', evacuate:'WAJIB! Setelah aman, pergi ke lapangan terbuka.', callHelp:'Hubungi orang tua atau guru setelah evakuasi.', checkAround:'Periksa teman-temanmu, adakah yang terluka?' },
      charAnims:{ calm:{p:'idle',x:42,y:22}, checkAround:{p:'look',x:46,y:22}, shelter:{p:'crouch',x:46,y:15}, wait:{p:'crouch',x:46,y:15}, evacuate:{p:'run',x:80,y:22}, callHelp:{p:'phone',x:42,y:22} }
    },
    {
      id:'tsunami', title:'Tsunami', location:'Di Pantai', cardColor:'#4FB3D9', difficulty:'Sedang',
      story:{ title:'Peringatan Tsunami!', text:'Pada hari Sabtu pagi, Rani dan keluarganya sedang berlibur di pantai. Tiba-tiba terjadi gempa bumi yang cukup kuat selama beberapa detik. Tidak lama kemudian, petugas pantai mengumumkan melalui pengeras suara bahwa ada kemungkinan terjadi tsunami dan semua pengunjung harus segera menuju tempat yang lebih tinggi. Saat akan mengungsi, Rani melihat beberapa orang masih berada di pantai untuk mengambil foto ombak. Sementara itu, adik Rani yang berusia 6 tahun terlihat ketakutan dan mulai menangis.' },
      decisions:[
        { id:'A', text:'Segera berlari ke tempat yang tinggi, jauh dari pantai' },
        { id:'B', text:'Mendekati pantai untuk melihat ikan yang terdampar' },
        { id:'C', text:'Bersembunyi di balik pohon kelapa di tepi pantai' } ],
      correctDecision:'A',
      correctHint:'Segera lari ke tempat tinggi, minimal 15 meter di atas permukaan laut!',
      wrongHints:{ B:'Air surut mendadak adalah tanda BAHAYA, bukan saatnya mendekati air!', C:'Pohon tidak bisa menahan gelombang tsunami yang sangat kuat!' },
      availableBlocks:['calm','runSafe','checkAround','callHelp','wait','takeBag'],
      correctSeq:['calm','takeBag','runSafe','callHelp'],
      requiredBlocks:['runSafe','callHelp'],
      explanation:'Air laut surut tiba-tiba setelah gempa adalah tanda BAHAYA tsunami! Segera berlari ke tempat tinggi (minimal 15 m di atas permukaan laut, atau 2 km dari pantai). Jangan kembali ke pantai sampai dinyatakan aman oleh petugas. Satu gelombang tsunami bisa diikuti gelombang berikutnya yang lebih besar.',
      tips:{ calm:'Panik membuatmu membuang waktu berharga.', runSafe:'WAJIB! Lari ke tempat tinggi, inilah yang menyelamatkan nyawa.', callHelp:'WAJIB! Hubungi 112 untuk info perkembangan.', takeBag:'Kalau tas siaga ada di dekatmu, ambil, tapi prioritas tetap berlari!', checkAround:'Ajak semua orang di sekitarmu ikut berlari.', wait:'Tunggu pengumuman resmi sebelum kembali ke pantai.' },
      charAnims:{ calm:{p:'idle',x:40,y:22}, takeBag:{p:'idle',x:34,y:22}, checkAround:{p:'look',x:40,y:22}, runSafe:{p:'run',x:82,y:30}, callHelp:{p:'phone',x:72,y:30}, wait:{p:'idle',x:82,y:30} }
    },
    {
      id:'flood', title:'Banjir', location:'Di Rumah', cardColor:'#3A7CA5', difficulty:'Mudah',
      story:{ title:'Banjir Melanda Rumah!', text:'Hujan deras turun sejak pagi. Air mulai masuk ke halaman rumah dan semakin tinggi hingga mencapai lutut orang dewasa. Listrik di sekitar rumah mulai padam.' },
      decisions:[
        { id:'A', text:'Buka pintu dan berenang ke luar mencari bantuan' },
        { id:'B', text:'Naik ke lantai atas atau atap, lalu minta tolong dari atas' },
        { id:'C', text:'Tetap di lantai satu dan tunggu banjir surut sendiri' } ],
      correctDecision:'B',
      correctHint:'Tempat yang lebih tinggi jauh lebih aman dari arus banjir.',
      wrongHints:{ A:'Arus banjir sangat kuat, bisa ada benda tajam, lubang, bahkan ular!', C:'Air bisa terus naik dan membahayakan nyawamu!' },
      availableBlocks:['calm','checkAround','runSafe','takeBag','callHelp','wait','shelter'],
      correctSeq:['calm','takeBag','shelter','callHelp','wait'],
      requiredBlocks:['shelter','callHelp','wait'],
      explanation:'Saat banjir datang: tetap tenang dan segera pindah ke tempat yang lebih tinggi seperti lantai atas atau atap. JANGAN berenang atau berjalan di air banjir, arusnya kuat dan bisa menyembunyikan benda tajam, lubang, kabel listrik, bahkan hewan berbahaya. Bawa tas siaga (air bersih, makanan, senter, obat). Hubungi 112 atau orang dewasa, lalu tunggu bantuan datang dengan sabar.',
      tips:{ calm:'Tetap tenang membantumu mengingat langkah yang benar.', takeBag:'Bawa air minum, makanan, senter, dan obat, ini bisa sangat berguna.', shelter:'WAJIB! Naik ke lantai atas atau atap rumah yang lebih tinggi.', callHelp:'WAJIB! Hubungi 112 atau minta tolong tetangga yang aman.', wait:'WAJIB! Tunggu bantuan datang, jangan berenang di air banjir.', checkAround:'Pastikan seluruh anggota keluargamu ada bersamamu.' },
      charAnims:{ calm:{p:'idle',x:38,y:22}, takeBag:{p:'idle',x:42,y:22}, checkAround:{p:'look',x:44,y:22}, shelter:{p:'crouch',x:52,y:52}, callHelp:{p:'phone',x:52,y:52}, wait:{p:'crouch',x:52,y:52}, runSafe:{p:'run',x:52,y:52} },
      waterRise:true
    },
    {
      id:'fire', title:'Kebakaran Hutan', location:'Di Hutan', cardColor:'#D9532A', difficulty:'Sedang',
      story:{ title:'Kebakaran Hutan!', text:'Sudah hampir dua bulan hujan tidak turun di Desa Suka Maju. Suatu siang, Seno yang duduk di kelas V SD melihat asap tebal dari arah hutan yang berada tidak jauh dari desanya. Beberapa jam kemudian, bau asap mulai terasa di rumahnya. Melalui pengeras suara, petugas desa mengumumkan bahwa kebakaran hutan sedang terjadi dan warga diminta tetap tenang serta bersiap jika sewaktu-waktu harus mengungsi. Saat itu, Seno sedang belajar di rumah bersama adiknya yang masih kelas I SD. Tidak lama kemudian, adiknya mulai batuk-batuk karena asap yang masuk melalui jendela.' },
      decisions:[
        { id:'A', text:'Menjauhi api ke arah berlawanan dengan angin menuju tempat terbuka' },
        { id:'B', text:'Bersembunyi di balik semak atau pohon besar menunggu api lewat' },
        { id:'C', text:'Naik ke bukit yang lebih tinggi untuk melihat arah datangnya api' } ],
      correctDecision:'A',
      correctHint:'Api menjalar cepat searah angin dan ke atas bukit. Menjauh melawan arah angin ke tempat terbuka paling aman!',
      wrongHints:{ B:'Semak dan pohon kering justru paling mudah terbakar, kamu bisa terjebak api!', C:'Api merambat jauh lebih cepat saat menanjak ke atas bukit, jangan ke tempat tinggi!' },
      availableBlocks:['calm','checkAround','runSafe','shelter','takeBag','callHelp','wait'],
      correctSeq:['calm','checkAround','runSafe','shelter','callHelp'],
      requiredBlocks:['checkAround','runSafe','callHelp'],
      explanation:'Saat kebakaran hutan: perhatikan arah angin! Api menjalar paling cepat SEARAH angin dan saat menanjak ke atas bukit. Menjauhlah melawan arah angin menuju tempat terbuka, jalan setapak, atau dekat sungai. Tutup hidung dan mulut dengan kain basah agar tidak menghirup asap. JANGAN bersembunyi di semak atau di balik pohon. Segera hubungi 113 (Pemadam) atau petugas, dan jangan kembali sebelum dinyatakan aman.',
      tips:{ calm:'Tetap tenang agar bisa menentukan arah lari yang aman, bukan asal panik.', checkAround:'WAJIB! Perhatikan arah angin dan api, lalu lari ke arah yang berlawanan.', runSafe:'WAJIB! Menjauh melawan arah angin menuju tempat terbuka atau dekat air.', shelter:'Tutup hidung dan mulut dengan kain basah untuk menghindari asap.', takeBag:'Air minum dan masker sangat membantu melindungi dari asap.', callHelp:'WAJIB! Hubungi 113 (Pemadam) atau petugas kehutanan terdekat.', wait:'Jangan kembali ke hutan sampai petugas menyatakan aman.' },
      charAnims:{ calm:{p:'idle',x:34,y:22}, checkAround:{p:'look',x:34,y:22}, takeBag:{p:'idle',x:30,y:22}, runSafe:{p:'run',x:14,y:22}, shelter:{p:'crouch',x:16,y:22}, callHelp:{p:'phone',x:14,y:22}, wait:{p:'idle',x:24,y:22} }
    },
    {
      id:'volcano', title:'Gunung Meletus', location:'Di Ladang', cardColor:'#B5462B', difficulty:'Sulit',
      story:{ title:'Gunung Meletus!', text:'Gunung di dekat desa mengeluarkan suara dentuman dan abu vulkanik mulai turun. Petugas memberi peringatan agar warga segera bersiap mengungsi.' },
      decisions:[
        { id:'A', text:'Segera berlari menjauhi gunung mengikuti jalur evakuasi' },
        { id:'B', text:'Berdiam diri untuk menyaksikan pemandangan gunung meletus' },
        { id:'C', text:'Berlindung di rumah terdekat yang ada di lereng gunung' } ],
      correctDecision:'A',
      correctHint:'Evakuasi segera mengikuti arahan petugas adalah tindakan terbaik!',
      wrongHints:{ B:'Abu vulkanik dan gas beracun bisa membahayakan nyawamu dengan cepat!', C:'Rumah di lereng bisa tersapu lahar atau tertimbun abu tebal!' },
      availableBlocks:['calm','runSafe','shelter','checkAround','takeBag','callHelp','wait'],
      correctSeq:['calm','takeBag','runSafe','shelter','callHelp'],
      requiredBlocks:['runSafe','shelter','callHelp'],
      explanation:'Saat gunung meletus: evakuasi SEGERA mengikuti jalur dan arahan petugas. Tutup hidung dan mulut dengan masker atau kain basah untuk menghindari abu vulkanik. Jauhi sungai (bahaya lahar). Jika terpaksa berlindung, masuk ke gedung yang kuat dan tutup semua ventilasi. Tunggu arahan petugas sebelum kembali ke rumah.',
      tips:{ calm:'Berteriak atau panik menghabiskan energi dan membuatmu menghirup lebih banyak abu berbahaya.', takeBag:'Masker, air, dan obat mata sangat penting untuk melindungi dari abu vulkanik.', runSafe:'WAJIB! Lari menjauhi gunung mengikuti rute evakuasi resmi.', shelter:'WAJIB! Jika terjebak abu, masuk gedung yang kuat dan tutup ventilasi.', callHelp:'WAJIB! Ikuti arahan petugas, mereka tahu kondisi sebenarnya.', checkAround:'Jangan kembali ke area bahaya sampai dinyatakan aman.' },
      charAnims:{ calm:{p:'idle',x:28,y:22}, takeBag:{p:'idle',x:24,y:22}, checkAround:{p:'look',x:30,y:22}, runSafe:{p:'run',x:14,y:22}, shelter:{p:'crouch',x:14,y:22}, callHelp:{p:'phone',x:14,y:22}, wait:{p:'idle',x:24,y:22} }
    },
    {
      id:'tornado', title:'Puting Beliung', location:'Di Desa', cardColor:'#4F6276', difficulty:'Sulit',
      story:{ title:'Angin Puting Beliung!', text:'Pada suatu sore, langit di Desa Sukamaju tiba-tiba menjadi gelap. Angin bertiup semakin kencang dan awan terlihat berputar. Melalui pengeras suara, petugas desa mengingatkan warga agar segera masuk ke dalam rumah atau bangunan yang kokoh karena ada kemungkinan terjadi angin puting beliung. Saat itu, Budi yang duduk di kelas V SD sedang bermain sepak bola bersama teman-temannya di lapangan. Tidak jauh dari lapangan terdapat balai desa yang kuat dan aman untuk berlindung. Namun, beberapa temannya masih ingin melanjutkan permainan karena pertandingan hampir selesai.' },
      decisions:[
        { id:'A', text:'Masuk ke ruangan paling dalam tanpa jendela, berjongkok dan lindungi kepala' },
        { id:'B', text:'Berdiri di dekat jendela untuk melihat datangnya pusaran angin' },
        { id:'C', text:'Berlari keluar rumah menuju lapangan terbuka yang luas' } ],
      correctDecision:'A',
      correctHint:'Ruangan dalam tanpa jendela di lantai terbawah adalah tempat paling terlindung dari puting beliung!',
      wrongHints:{ B:'Kaca jendela bisa pecah dan melukaimu, jauhi semua jendela dan pintu kaca!', C:'Di lapangan terbuka kamu tidak terlindung dari benda-benda yang beterbangan!' },
      availableBlocks:['calm','checkAround','shelter','takeBag','runSafe','callHelp','wait'],
      correctSeq:['calm','checkAround','shelter','wait','callHelp'],
      requiredBlocks:['shelter','wait','callHelp'],
      explanation:'Saat angin puting beliung: SEGERA masuk ke bangunan yang kuat. Pergi ke ruangan paling dalam di lantai terbawah tanpa jendela (misalnya kamar mandi atau di bawah meja kokoh). Berjongkok rendah dan lindungi kepala serta lehermu dengan tangan atau bantal. JAUHI jendela dan pintu kaca. Jangan berlindung di bawah pohon, baliho, atau tiang yang bisa roboh. Tetap di tempat aman sampai angin benar-benar berhenti, lalu hubungi 112 jika butuh bantuan.',
      tips:{ calm:'Tetap tenang agar bisa cepat mencari tempat berlindung yang benar.', checkAround:'Cari ruangan paling dalam tanpa jendela di lantai terbawah.', shelter:'WAJIB! Berjongkok rendah di ruang dalam dan lindungi kepalamu dengan tangan.', takeBag:'Senter dan air berguna jika listrik padam setelah angin berlalu.', runSafe:'Berlari di tempat terbuka justru berbahaya, lebih baik berlindung di dalam.', wait:'WAJIB! Jangan keluar sebelum angin benar-benar berhenti.', callHelp:'WAJIB! Setelah aman, hubungi 112 atau orang dewasa untuk bantuan.' },
      charAnims:{ calm:{p:'idle',x:30,y:22}, checkAround:{p:'look',x:30,y:22}, takeBag:{p:'idle',x:26,y:22}, shelter:{p:'crouch',x:24,y:20}, runSafe:{p:'run',x:16,y:22}, callHelp:{p:'phone',x:24,y:20}, wait:{p:'crouch',x:24,y:20} }
    },
    {
      id:'landslide', title:'Tanah Longsor', location:'Di Perbukitan', cardColor:'#8A5A2C', difficulty:'Sulit',
      story:{ title:'Tanah Longsor di Perbukitan!', text:'Hujan deras turun selama beberapa hari di daerah pegunungan. Tiba-tiba terdengar suara gemuruh dari bukit belakang rumah warga.' },
      decisions:[
        { id:'A', text:'Segera menjauh dari lereng menuju tempat yang lebih tinggi dan aman' },
        { id:'B', text:'Berlindung di dalam rumah yang berada tepat di bawah lereng' },
        { id:'C', text:'Mendekati longsoran untuk merekam videonya dengan ponsel' } ],
      correctDecision:'A',
      correctHint:'Saat longsor, segera menjauh dari jalur material menuju tempat tinggi yang aman dan stabil!',
      wrongHints:{ B:'Rumah di bawah lereng bisa tertimbun material longsor!', C:'Jangan mendekat! Longsor susulan bisa datang kapan saja.' },
      availableBlocks:['calm','checkAround','runSafe','evacuate','callHelp','wait'],
      correctSeq:['calm','runSafe','evacuate','callHelp','wait'],
      requiredBlocks:['runSafe','evacuate','wait'],
      explanation:'Saat tanah longsor: SEGERA menjauh dari lereng atau tebing ke arah yang berbeda dari jalur longsoran. Bergerak ke tempat yang lebih tinggi, terbuka, dan stabil mengikuti jalur evakuasi. JANGAN melintasi area yang sedang longsor atau tanah yang retak. Ikuti arahan orang tua, guru, atau petugas, dan tetap di tempat aman sampai keadaan dinyatakan benar-benar aman karena longsor susulan bisa terjadi.',
      tips:{ calm:'Tetap tenang agar bisa memilih arah menjauh yang benar.', checkAround:'Perhatikan arah gerakan longsoran, lalu menjauh ke arah yang berlawanan.', runSafe:'WAJIB! Segera menjauh dari lereng ke arah samping, bukan searah longsoran.', evacuate:'WAJIB! Menuju tempat tinggi dan terbuka lewat jalur evakuasi.', callHelp:'Ikuti arahan petugas dan hubungi 112 bila ada yang membutuhkan bantuan.', wait:'WAJIB! Tetap di tempat aman, longsor susulan bisa datang lagi.' },
      charAnims:{ calm:{p:'idle',x:34,y:22}, checkAround:{p:'look',x:34,y:22}, runSafe:{p:'run',x:16,y:22}, evacuate:{p:'run',x:12,y:22}, callHelp:{p:'phone',x:16,y:22}, wait:{p:'idle',x:12,y:22} }
    }
  ];

  /* ═══ DATA: BELAJAR / MATERI KESIAPSIAGAAN ═══
     Perbaikan bug: sebelumnya objek LEARN ini belum ada sama sekali di kode, padahal
     js/game.js (fungsi selectMateri) sudah memanggilnya. Akibatnya begitu layar "Belajar"
     dibuka, terjadi error "LEARN is not defined" yang membuat panel materi di sebelah
     kanan gagal terisi dan tampak kosong/hilang. Sekarang objek LEARN dilengkapi berisi
     materi kesiapsiagaan untuk ketujuh bencana. */
  const LEARN = {
    earthquake: {
      title:'Gempa Bumi', subtitle:'Kenali guncangan, lindungi dirimu dengan cara yang tepat.',
      sections:[
        { heading:'Apa itu Gempa Bumi?', paras:[
          'Gempa bumi adalah getaran atau guncangan yang terjadi di permukaan bumi akibat pergeseran lempeng bumi di bawah permukaan tanah.',
          'Gempa bisa datang tiba-tiba tanpa peringatan dan berlangsung dari beberapa detik hingga beberapa menit.' ] },
        { heading:'Tanda-tanda Bahaya', list:[
          'Lantai, dinding, atau benda-benda di sekitarmu tiba-tiba bergetar.',
          'Lampu gantung atau benda tergantung mulai berayun.',
          'Terdengar suara gemuruh dari dalam tanah.' ] },
        { heading:'Dampak yang Bisa Terjadi', paras:[
          'Bangunan bisa retak atau roboh, benda-benda bisa berjatuhan, dan gempa besar di laut bisa memicu tsunami.' ] },
        { heading:'Langkah Menyelamatkan Diri', list:[
          'MERUNDUK (jongkok) agar tidak mudah terjatuh.',
          'BERLINDUNG di bawah meja yang kokoh untuk melindungi kepala dari benda jatuh.',
          'PEGANGAN pada kaki meja erat-erat sampai guncangan berhenti.',
          'Setelah guncangan berhenti, evakuasi tertib menuju lapangan terbuka jauh dari gedung.' ],
          tip:' Jangan berlari keluar saat lantai masih bergetar — tunggu sampai guncangan benar-benar berhenti dahulu!' }
      ]
    },
    tsunami: {
      title:'Tsunami', subtitle:'Air laut surut mendadak? Itu tanda bahaya, segera ke tempat tinggi!',
      sections:[
        { heading:'Apa itu Tsunami?', paras:[
          'Tsunami adalah gelombang laut sangat besar yang biasanya dipicu oleh gempa bumi bawah laut, letusan gunung berapi di laut, atau longsor bawah laut.',
          'Tsunami bisa datang hanya beberapa menit setelah gempa terasa, sehingga waktu untuk menyelamatkan diri sangat singkat.' ] },
        { heading:'Tanda-tanda Bahaya', list:[
          'Terjadi gempa bumi kuat saat berada di dekat pantai.',
          'Air laut tiba-tiba surut jauh melebihi biasanya.',
          'Terdengar suara gemuruh keras dari arah laut.',
          'Ada peringatan resmi dari petugas atau sirene tsunami.' ] },
        { heading:'Dampak yang Bisa Terjadi', paras:[
          'Gelombang tsunami dapat menyapu bangunan, kendaraan, dan apa saja di daerah pesisir, serta bisa datang lebih dari satu kali gelombang.' ] },
        { heading:'Langkah Menyelamatkan Diri', list:[
          'Segera lari ke tempat tinggi, minimal 15 meter di atas permukaan laut atau 2 km dari pantai.',
          'Jangan mendekati pantai walau airnya terlihat surut atau ada yang terdampar.',
          'Hubungi 112 atau orang dewasa terdekat untuk info perkembangan.',
          'Tunggu pengumuman resmi sebelum kembali ke area pantai.' ],
          tip:' Satu gelombang tsunami sering diikuti gelombang berikutnya yang bisa lebih besar — jangan kembali dulu!' }
      ]
    },
    flood: {
      title:'Banjir', subtitle:'Pindah ke tempat tinggi, jangan pernah berenang di arus banjir.',
      sections:[
        { heading:'Apa itu Banjir?', paras:[
          'Banjir terjadi ketika air meluap dan menggenangi daratan, biasanya akibat hujan deras terus-menerus, luapan sungai, atau saluran air yang tersumbat.' ] },
        { heading:'Tanda-tanda Bahaya', list:[
          'Hujan deras berlangsung lama tanpa henti.',
          'Air sungai atau selokan mulai naik dengan cepat.',
          'Air mulai masuk ke halaman atau lantai rumah.' ] },
        { heading:'Dampak yang Bisa Terjadi', paras:[
          'Arus banjir bisa menyembunyikan benda tajam, lubang, kabel listrik, bahkan hewan berbahaya, serta merusak barang dan bangunan.' ] },
        { heading:'Langkah Menyelamatkan Diri', list:[
          'Tetap tenang dan pindah ke tempat lebih tinggi seperti lantai atas atau atap.',
          'Bawa tas siaga: air bersih, makanan, senter, dan obat-obatan.',
          'Hubungi 112 atau orang dewasa, lalu tunggu bantuan datang.',
          'Jangan berjalan atau berenang di air banjir.' ],
          tip:' Matikan listrik di rumah bila air mulai naik, agar terhindar dari bahaya setrum.' }
      ]
    },
    fire: {
      title:'Kebakaran Hutan', subtitle:'Perhatikan arah angin, menjauhlah melawan arahnya.',
      sections:[
        { heading:'Apa itu Kebakaran Hutan?', paras:[
          'Kebakaran hutan adalah api yang membakar area hutan atau lahan secara meluas, sering terjadi saat musim kemarau panjang.' ] },
        { heading:'Tanda-tanda Bahaya', list:[
          'Muncul asap tebal dari arah hutan atau lahan.',
          'Bau asap mulai tercium hingga ke pemukiman.',
          'Udara terasa panas dan berkabut asap.' ] },
        { heading:'Dampak yang Bisa Terjadi', paras:[
          'Asap tebal dapat mengganggu pernapasan, api bisa menjalar cepat mengikuti arah angin, dan menghanguskan rumah warga di dekat hutan.' ] },
        { heading:'Langkah Menyelamatkan Diri', list:[
          'Perhatikan arah angin dan api, lalu menjauh ke arah yang berlawanan menuju tempat terbuka.',
          'Tutup hidung dan mulut dengan kain basah atau masker agar tidak menghirup asap.',
          'Jangan bersembunyi di semak atau balik pohon karena mudah terbakar.',
          'Hubungi 113 (Pemadam) atau petugas kehutanan terdekat.' ],
          tip:' Api menjalar jauh lebih cepat saat menanjak ke atas bukit — jangan pernah lari ke arah tempat tinggi saat kebakaran hutan!' }
      ]
    },
    volcano: {
      title:'Gunung Meletus', subtitle:'Ikuti jalur evakuasi resmi dan lindungi diri dari abu vulkanik.',
      sections:[
        { heading:'Apa itu Gunung Meletus?', paras:[
          'Gunung meletus terjadi ketika magma, gas, dan abu dari dalam bumi keluar melalui gunung berapi, kadang disertai lahar dan awan panas.' ] },
        { heading:'Tanda-tanda Bahaya', list:[
          'Terdengar suara dentuman dari arah gunung.',
          'Abu vulkanik mulai turun ke pemukiman.',
          'Petugas memberi peringatan resmi untuk bersiap mengungsi.' ] },
        { heading:'Dampak yang Bisa Terjadi', paras:[
          'Abu vulkanik dan gas beracun berbahaya bagi pernapasan, sementara lahar bisa mengalir deras mengikuti sungai di lereng gunung.' ] },
        { heading:'Langkah Menyelamatkan Diri', list:[
          'Evakuasi segera mengikuti jalur dan arahan petugas.',
          'Tutup hidung dan mulut dengan masker atau kain basah.',
          'Jauhi aliran sungai yang berhulu di gunung karena bahaya lahar.',
          'Jika terjebak, berlindung di gedung kuat dan tutup semua ventilasi.' ],
          tip:' Jangan pernah berdiam diri untuk menonton gunung meletus — abu dan gasnya bisa berbahaya dengan cepat!' }
      ]
    },
    tornado: {
      title:'Puting Beliung', subtitle:'Masuk ke ruangan dalam tanpa jendela, jauhi kaca.',
      sections:[
        { heading:'Apa itu Puting Beliung?', paras:[
          'Puting beliung adalah angin kencang berputar yang terbentuk dari awan badai, dapat muncul tiba-tiba dan berlangsung singkat namun merusak.' ] },
        { heading:'Tanda-tanda Bahaya', list:[
          'Langit tiba-tiba menjadi gelap di sore atau siang hari.',
          'Angin bertiup semakin kencang dalam waktu singkat.',
          'Awan terlihat berputar membentuk pusaran.' ] },
        { heading:'Dampak yang Bisa Terjadi', paras:[
          'Puting beliung dapat menerbangkan atap rumah, merobohkan pohon, dan melemparkan benda-benda ringan dengan kecepatan tinggi.' ] },
        { heading:'Langkah Menyelamatkan Diri', list:[
          'Segera masuk ke ruangan paling dalam di lantai terbawah tanpa jendela.',
          'Berjongkok rendah dan lindungi kepala serta leher dengan tangan.',
          'Jauhi jendela dan pintu kaca.',
          'Tetap di tempat aman sampai angin benar-benar berhenti.' ],
          tip:' Jangan berlindung di bawah pohon besar atau baliho — keduanya bisa roboh diterjang angin kencang!' }
      ]
    },
    landslide: {
      title:'Tanah Longsor', subtitle:'Menjauh dari lereng ke arah samping, bukan searah longsoran.',
      sections:[
        { heading:'Apa itu Tanah Longsor?', paras:[
          'Tanah longsor adalah pergerakan tanah, batuan, atau material lereng yang meluncur ke bawah, sering dipicu oleh hujan deras terus-menerus.' ] },
        { heading:'Tanda-tanda Bahaya', list:[
          'Hujan deras berlangsung beberapa hari di daerah perbukitan.',
          'Terdengar suara gemuruh dari arah lereng atau bukit.',
          'Muncul retakan baru di tanah sekitar lereng.' ] },
        { heading:'Dampak yang Bisa Terjadi', paras:[
          'Material longsor bisa menimbun rumah dan jalan, serta longsor susulan dapat terjadi setelah longsor pertama.' ] },
        { heading:'Langkah Menyelamatkan Diri', list:[
          'Segera menjauh dari lereng ke arah samping, bukan searah aliran longsoran.',
          'Bergerak menuju tempat yang lebih tinggi, terbuka, dan stabil.',
          'Ikuti arahan orang tua, guru, atau petugas menuju jalur evakuasi.',
          'Tetap di tempat aman sampai dinyatakan benar-benar aman.' ],
          tip:' Jangan pernah mendekati area longsoran untuk melihat atau merekam — longsor susulan bisa datang kapan saja!' }
      ]
    }
  };

  /* ═══ STATE ═══ */
  const S = { playerName:'Pahlawan', difficulty:'easy', anim:true,
    audio:{ master:80, music:65, sfx:85, masterMuted:false, musicMuted:false, sfxMuted:false },
    scenario:null, q:null, selectedDecision:null, workspace:[], score:0, htpIdx:0, HTP_TOTAL:5, progress:{},
    auth:{ user:null } };
  let DRAG = null;

  /* ═══ AKUN (LOGIN / REGISTER) ═══
     Catatan integrasi backend:
     - Backend utama akun (daftar, masuk, ubah nama, ubah kata sandi, hapus akun) kini
       ditangani oleh js/firebase-auth.js (objek global BHAuth), yang terhubung ke
       Firebase Authentication + Firestore. Isi FIREBASE_CONFIG di file tersebut agar
       aktif setelah game di-publish ke Firebase Hosting.
     - ACCOUNTS di bawah ini HANYA penyimpanan CADANGAN sementara di memori browser
       (hilang saat reload). Dipakai OTOMATIS sebagai fallback ketika Firebase belum
       dikonfigurasi/terhubung (mis. saat pratinjau lokal tanpa internet), supaya alur
       login/daftar tetap bisa dicoba.
     - Login/daftar di sini hanya memakai NAMA + KATA SANDI (tanpa email), sesuai permintaan;
       js/firebase-auth.js mengonversi NAMA menjadi alamat email semu secara internal
       agar kompatibel dengan Firebase Authentication. */
  const ACCOUNTS = [];
  function findAccount(name){ return ACCOUNTS.find(a=>a.name.toLowerCase()===String(name).trim().toLowerCase()); }
  function registerAccount(name,password){ const acc={ name:name.trim(), password }; ACCOUNTS.push(acc); return acc; }
  function renameAccount(oldName,newName){ const acc=findAccount(oldName); if(acc) acc.name=newName.trim(); }
  function deleteAccount(name){ const i=ACCOUNTS.findIndex(a=>a.name.toLowerCase()===String(name).trim().toLowerCase()); if(i>-1) ACCOUNTS.splice(i,1); }

  /* ═══ MISSION UNLOCK / PROGRESS ═══ */
  const QUESTIONS = {"earthquake": [{"q": "Apa yang harus kamu lakukan pertama kali?", "opts": [{"id": "A", "text": "Berlari keluar kelas secepatnya"}, {"id": "B", "text": "Bersembunyi di bawah meja"}, {"id": "C", "text": "Membuka jendela kelas"}], "correct": "B"}, {"q": "Saat berlindung di bawah meja, apa yang harus dilakukan?", "opts": [{"id": "A", "text": "Memegang kaki meja dan melindungi kepala"}, {"id": "B", "text": "Bermain dengan teman"}, {"id": "C", "text": "Berdiri di atas kursi"}], "correct": "A"}, {"q": "Setelah gempa berhenti, apa tindakan yang tepat?", "opts": [{"id": "A", "text": "Kembali duduk dan belajar"}, {"id": "B", "text": "Keluar kelas dengan tertib"}, {"id": "C", "text": "Mengambil tas terlebih dahulu"}], "correct": "B"}, {"q": "Mengapa tidak boleh panik saat gempa?", "opts": [{"id": "A", "text": "Agar guru tidak marah"}, {"id": "B", "text": "Karena panik dapat membuat keadaan lebih berbahaya"}, {"id": "C", "text": "Supaya cepat pulang"}], "correct": "B"}, {"q": "Saat berada di luar ruangan setelah gempa, tempat paling aman adalah...", "opts": [{"id": "A", "text": "Dekat tiang listrik"}, {"id": "B", "text": "Lapangan terbuka"}, {"id": "C", "text": "Dekat bangunan tinggi"}], "correct": "B"}], "flood": [{"q": "Apa yang harus dilakukan saat air mulai masuk rumah?", "opts": [{"id": "A", "text": "Bermain air banjir"}, {"id": "B", "text": "Memindahkan barang penting ke tempat tinggi"}, {"id": "C", "text": "Tidur kembali"}], "correct": "B"}, {"q": "Mengapa tidak boleh bermain di air banjir?", "opts": [{"id": "A", "text": "Air banjir kotor dan berbahaya"}, {"id": "B", "text": "Airnya dingin"}, {"id": "C", "text": "Karena sepatu bisa basah"}], "correct": "A"}, {"q": "Saat banjir semakin tinggi, tindakan yang tepat adalah...", "opts": [{"id": "A", "text": "Tetap di rumah sendirian"}, {"id": "B", "text": "Pergi ke tempat pengungsian"}, {"id": "C", "text": "Menonton banjir dari jalan"}], "correct": "B"}, {"q": "Apa yang perlu dimatikan saat banjir?", "opts": [{"id": "A", "text": "Televisi saja"}, {"id": "B", "text": "Listrik dan alat elektronik"}, {"id": "C", "text": "Lampu kamar saja"}], "correct": "B"}, {"q": "Barang yang penting dibawa saat evakuasi adalah...", "opts": [{"id": "A", "text": "Mainan besar"}, {"id": "B", "text": "Dokumen penting dan obat-obatan"}, {"id": "C", "text": "Semua perabot rumah"}], "correct": "B"}], "landslide": [{"q": "Apa yang harus dilakukan saat mendengar suara gemuruh?", "opts": [{"id": "A", "text": "Mendekati bukit untuk melihat"}, {"id": "B", "text": "Segera menjauh dari lereng"}, {"id": "C", "text": "Bermain di halaman"}], "correct": "B"}, {"q": "Daerah yang harus dihindari saat longsor adalah...", "opts": [{"id": "A", "text": "Lapangan terbuka"}, {"id": "B", "text": "Dekat lereng atau tebing"}, {"id": "C", "text": "Sekolah"}], "correct": "B"}, {"q": "Mengapa hujan deras bisa menyebabkan longsor?", "opts": [{"id": "A", "text": "Tanah menjadi lebih berat dan mudah runtuh"}, {"id": "B", "text": "Karena udara dingin"}, {"id": "C", "text": "Karena pohon bergerak"}], "correct": "A"}, {"q": "Saat evakuasi, apa yang harus dilakukan?", "opts": [{"id": "A", "text": "Berjalan tertib mengikuti arahan"}, {"id": "B", "text": "Berlari sendiri-sendiri"}, {"id": "C", "text": "Membawa semua barang"}], "correct": "A"}, {"q": "Apa tanda awal tanah longsor?", "opts": [{"id": "A", "text": "Suara gemuruh dan retakan tanah"}, {"id": "B", "text": "Matahari bersinar"}, {"id": "C", "text": "Angin sepoi-sepoi"}], "correct": "A"}], "volcano": [{"q": "Apa yang harus digunakan saat hujan abu?", "opts": [{"id": "A", "text": "Topi pesta"}, {"id": "B", "text": "Masker dan kacamata"}, {"id": "C", "text": "Sandal rumah"}], "correct": "B"}, {"q": "Apa yang harus dilakukan setelah ada peringatan evakuasi?", "opts": [{"id": "A", "text": "Tetap bermain di luar rumah"}, {"id": "B", "text": "Segera mengikuti arahan petugas"}, {"id": "C", "text": "Naik ke gunung"}], "correct": "B"}, {"q": "Mengapa harus memakai masker?", "opts": [{"id": "A", "text": "Agar terlihat keren"}, {"id": "B", "text": "Agar abu tidak masuk ke saluran pernapasan"}, {"id": "C", "text": "Supaya tidak kehujanan"}], "correct": "B"}, {"q": "Tempat yang harus dihindari saat gunung meletus adalah...", "opts": [{"id": "A", "text": "Sungai yang berhulu di gunung"}, {"id": "B", "text": "Tempat pengungsian"}, {"id": "C", "text": "Lapangan sekolah"}], "correct": "A"}, {"q": "Apa yang perlu dibawa saat mengungsi?", "opts": [{"id": "A", "text": "Barang seperlunya dan obat-obatan"}, {"id": "B", "text": "Semua perabot rumah"}, {"id": "C", "text": "Mainan saja"}], "correct": "A"}], "tsunami": [{"q": "Apa yang menjadi tanda awal kemungkinan terjadinya tsunami pada cerita di atas?", "opts": [{"id": "A", "text": "Cuaca menjadi panas"}, {"id": "B", "text": "Terjadi gempa bumi yang kuat"}, {"id": "C", "text": "Banyak orang bermain di pantai"}], "correct": "B"}, {"q": "Apa yang sebaiknya dilakukan Rani setelah mendengar peringatan dari petugas?", "opts": [{"id": "A", "text": "Tetap bermain di pantai sampai ombak datang"}, {"id": "B", "text": "Mengajak adiknya menuju tempat yang lebih tinggi"}, {"id": "C", "text": "Mengumpulkan kerang terlebih dahulu"}], "correct": "B"}, {"q": "Mengapa pengunjung pantai harus segera menuju tempat yang lebih tinggi setelah ada peringatan tsunami?", "opts": [{"id": "A", "text": "Agar lebih dekat dengan petugas pantai"}, {"id": "B", "text": "Karena tempat yang lebih tinggi lebih aman dari terjangan gelombang tsunami"}, {"id": "C", "text": "Karena pantai akan segera ditutup"}], "correct": "B"}, {"q": "Jika menjadi Rani, apa keputusan terbaik ketika melihat beberapa orang masih berada di pantai untuk mengambil foto?", "opts": [{"id": "A", "text": "Tetap di pantai untuk melihat keadaan terlebih dahulu"}, {"id": "B", "text": "Segera mengajak adik menuju tempat aman dan mengikuti arahan petugas"}, {"id": "C", "text": "Menunggu sampai semua orang meninggalkan pantai"}], "correct": "B"}, {"q": "Saat menuju tempat yang lebih tinggi, adik Rani terus menangis dan ingin kembali ke pantai untuk mencari mainannya. Apa yang sebaiknya dilakukan Rani?", "opts": [{"id": "A", "text": "Mengajak adiknya kembali ke pantai untuk mengambil mainan"}, {"id": "B", "text": "Membiarkan adiknya pergi sendiri mengambil mainan"}, {"id": "C", "text": "Menenangkan adiknya dan tetap mengajaknya menuju tempat yang aman"}], "correct": "C"}], "tornado": [{"q": "Tanda yang menunjukkan kemungkinan akan terjadi angin puting beliung adalah....", "opts": [{"id": "A", "text": "Matahari bersinar cerah"}, {"id": "B", "text": "Angin bertiup pelan dan sejuk"}, {"id": "C", "text": "Langit gelap dan angin bertiup sangat kencang"}], "correct": "C"}, {"q": "Apa yang sebaiknya dilakukan Budi setelah mendengar peringatan dari petugas desa?", "opts": [{"id": "A", "text": "Tetap bermain sampai pertandingan selesai"}, {"id": "B", "text": "Segera mencari tempat berlindung yang aman"}, {"id": "C", "text": "Berlari ke bawah pohon besar"}], "correct": "B"}, {"q": "Mengapa Budi tidak dianjurkan berlindung di bawah pohon besar saat angin puting beliung?", "opts": [{"id": "A", "text": "Pohon dapat tumbang atau rantingnya patah karena angin kencang"}, {"id": "B", "text": "Pohon membuat udara menjadi panas"}, {"id": "C", "text": "Pohon menghalangi jalan warga"}, {"id": "D", "text": "Pohon terlalu jauh dari lapangan"}], "correct": "A"}, {"q": "Jika menjadi Budi, keputusan terbaik yang harus diambil adalah....", "opts": [{"id": "A", "text": "Mengajak teman-teman berlindung di balai desa dan mengikuti arahan petugas"}, {"id": "B", "text": "Menunggu sampai angin bertiup lebih kencang baru mencari tempat aman"}, {"id": "C", "text": "Berlari pulang sendirian tanpa memberi tahu teman-teman"}], "correct": "A"}, {"q": "Ketika berada di balai desa, Budi menyadari ada temannya yang masih berada di lapangan. Apa tindakan yang paling tepat?", "opts": [{"id": "A", "text": "Kembali ke lapangan seorang diri untuk menjemput temannya"}, {"id": "B", "text": "Memberi tahu petugas atau orang dewasa agar temannya segera dibantu menuju tempat aman"}, {"id": "C", "text": "Mengabaikan temannya karena sudah berada di tempat aman"}], "correct": "B"}], "fire": [{"q": "Apa yang sedang terjadi di sekitar desa Seno?", "opts": [{"id": "A", "text": "Gempa bumi"}, {"id": "B", "text": "Kebakaran hutan"}, {"id": "C", "text": "Tanah longsor"}], "correct": "B"}, {"q": "Mengapa adik Seno mulai batuk-batuk?", "opts": [{"id": "A", "text": "Menghirup asap dari kebakaran hutan"}, {"id": "B", "text": "Kehujanan saat pulang sekolah"}, {"id": "C", "text": "Terlambat makan siang"}], "correct": "A"}, {"q": "Apa yang sebaiknya dilakukan Seno untuk membantu mengurangi masuknya asap ke dalam rumah?", "opts": [{"id": "A", "text": "Membuka semua pintu dan jendela"}, {"id": "B", "text": "Menutup pintu dan jendela yang mengarah ke asap"}, {"id": "C", "text": "Pergi melihat lokasi kebakaran"}], "correct": "B"}, {"q": "Petugas desa kemudian mengumumkan bahwa sebagian warga harus segera mengungsi karena asap semakin tebal. Jika menjadi Seno, apa keputusan yang paling tepat?", "opts": [{"id": "A", "text": "Tetap tinggal di rumah karena kebakaran terjadi jauh dari rumah"}, {"id": "B", "text": "Mengikuti arahan petugas dan mengajak adik bersiap menuju tempat pengungsian"}, {"id": "C", "text": "Pergi ke lokasi kebakaran untuk melihat keadaan"}], "correct": "B"}, {"q": "Saat bersiap mengungsi, Seno melihat adiknya lupa membawa masker yang telah dibagikan petugas. Apa yang sebaiknya dilakukan Seno?", "opts": [{"id": "A", "text": "Tetap berangkat dan membiarkan adiknya tanpa masker"}, {"id": "B", "text": "Menyuruh adiknya kembali mengambil masker sendiri"}, {"id": "C", "text": "Membantu adiknya memakai masker sebelum menuju tempat pengungsian"}], "correct": "C"}]};
  /* Urutan misi: familiar -> asing, Tsunami sebagai bos terakhir (frekuensi BMKG + sejarah) */
  const MISSION_SEQ=['earthquake','flood','landslide','tornado','fire','volcano','tsunami'];
  SCENARIOS.sort((a,b)=>MISSION_SEQ.indexOf(a.id)-MISSION_SEQ.indexOf(b.id));
  const MISSION_ORDER = SCENARIOS.map(s=>s.id);
  const UNLOCK_STARS = 2;
  function isMissionUnlocked(id){
    const i=MISSION_ORDER.indexOf(id);
    if(i<=0) return true;
    return (S.progress[MISSION_ORDER[i-1]]||0) >= UNLOCK_STARS;
  }
  /* Progres & nama TIDAK disimpan lokal — reset tiap refresh (default: nama "Pahlawan", hanya misi 1 terbuka). Penyimpanan progres akan ditangani backend nanti. Mekanik kunci tetap berjalan dalam satu sesi (via S.progress). */
  let TOAST_T=null;
  function showToast(msg){ let t=document.getElementById('toast'); if(!t){ t=document.createElement('div'); t.id='toast'; t.className='toast'; document.body.appendChild(t); } t.textContent=msg; t.classList.add('show'); clearTimeout(TOAST_T); TOAST_T=setTimeout(()=>t.classList.remove('show'),2800); }
  function lockedTap(id){ const i=MISSION_ORDER.indexOf(id); const prev=SCENARIOS.find(s=>s.id===MISSION_ORDER[i-1]); showToast('Misi terkunci. Dapatkan minimal 2 bintang di misi "'+(prev?prev.title:'sebelumnya')+'" untuk membukanya.'); try{sfxBad();}catch(e){} }

  /* ═══ SOUND ═══
     Sistem audio 3 tingkat: Audio Utama (master) → bercabang ke Musik & Efek Suara (SFX).
     Volume efektif = (master/100) × (cabang/100); "mute" per-tingkat memaksa nilai ke 0
     tanpa mengubah angka volume yang tersimpan, sehingga bisa dipulihkan lagi. */
  let AC = null;
  function ac(){ if(!AC){ try{ AC=new (window.AudioContext||window.webkitAudioContext)(); }catch(e){ return null; } } if(AC.state==='suspended') AC.resume(); return AC; }
  /* Perbaikan bug: sebagian browser membuat AudioContext dalam status "suspended" sampai ada
     interaksi pengguna, dan baru benar-benar "running" beberapa saat setelah resume() dipanggil.
     Karena "pointerdown" terjadi SEBELUM "click" pada interaksi yang sama, kita pancing proses
     unlock di sini duluan — supaya begitu handler klik (dan sfxClick-nya) berjalan, AudioContext
     sudah siap dan bunyi klik pertama tidak lagi hilang/terlewat. */
  function unlockAudioOnce(){ ac(); }
  document.addEventListener('pointerdown', unlockAudioOnce, { once:true, capture:true });
  document.addEventListener('keydown', unlockAudioOnce, { once:true, capture:true });
  function sfxGain(){ return (S.audio.masterMuted?0:S.audio.master/100) * (S.audio.sfxMuted?0:S.audio.sfx/100); }
  function musicGain(){ return (S.audio.masterMuted?0:S.audio.master/100) * (S.audio.musicMuted?0:S.audio.music/100); }
  function beep(f,d,t,v){ const g=sfxGain(); if(g<=0) return; const c=ac(); if(!c) return; const o=c.createOscillator(),gn=c.createGain(); o.type=t||'sine'; o.frequency.value=f; o.connect(gn); gn.connect(c.destination); const n=c.currentTime; gn.gain.setValueAtTime((v||.13)*g,n); gn.gain.exponentialRampToValueAtTime(.0001,n+d); o.start(n); o.stop(n+d); }
  function sfxClick(){ beep(440,.07,'triangle',.10); }
  function sfxAdd(){ beep(560,.08,'square',.09); setTimeout(()=>beep(760,.08,'square',.09),55); }
  function sfxStep(){ beep(520,.1,'sine',.12); }
  function sfxRemove(){ beep(300,.1,'sawtooth',.07); }
  function sfxOk(){ beep(660,.12,'triangle',.12); setTimeout(()=>beep(880,.14,'triangle',.12),110); }
  function sfxBad(){ beep(320,.18,'sine',.12); setTimeout(()=>beep(240,.24,'sine',.12),150); }
  function sfxWin(){ [523,659,784,1047].forEach((f,i)=>setTimeout(()=>beep(f,.2,'triangle',.13),i*120)); }
  document.addEventListener('click', e=>{ if(e.target.closest('.btn,.mc,.dec-opt,.tg-btn,.sw,.ds-item,.btn-soft-icon')) sfxClick(); }, true);

  /* ═══ MUSIK LATAR (BGM) ═══
     Dua trek musik latar bernama "MenuBGM" (diputar di menu utama) dan "MainBGM"
     (diputar saat bermain misi). Menggunakan elemen <audio> sungguhan (bukan beep),
     supaya kualitasnya seperti musik game pada umumnya.
     CARA MENGISI MUSIK: taruh file audio kamu di folder yang sama dengan index.html,
     lalu beri nama persis:
       - assets/audio/menu-bgm.mp3   → akan diputar sebagai "MenuBGM"
       - assets/audio/main-bgm.mp3   → akan diputar sebagai "MainBGM"
     Selama file belum ada, browser hanya akan diam-diam gagal memuatnya (tidak error
     ke pemain) — kontrol volume & mute di Pengaturan tetap berfungsi normal. */
  let bgmCurrent = null;
  function bgmEl(name){ return document.getElementById(name==='MenuBGM'?'menuBgmAudio':'mainBgmAudio'); }
  function updateBGMVolume(){ const g=musicGain(); ['MenuBGM','MainBGM'].forEach(n=>{ const el=bgmEl(n); if(el) el.volume=g; }); }
  function playBGM(name){
    if(bgmCurrent===name) { updateBGMVolume(); return; }
    stopBGM();
    const el=bgmEl(name); if(!el) return;
    el.volume=musicGain(); el.currentTime=0;
    bgmCurrent=name;
    const p=el.play();
    if(p&&p.catch) p.catch(()=>{ /* diblokir browser — akan otomatis dicoba lagi lewat tryUnlockBGM di bawah */ });
  }
  /* Perbaikan bug: browser SELALU memblokir autoplay musik bersuara sebelum ada interaksi
     apa pun dari pengguna di halaman (kebijakan resmi semua browser modern — bukan sesuatu
     yang bisa dihindari sepenuhnya lewat kode).
     PERBAIKAN TAMBAHAN: sebelumnya listener ini "sekali pakai" ({once:true}) — kalau
     pengguna kebetulan berinteraksi SEBELUM layar Menu Utama muncul (masih di splash,
     "bgmCurrent" masih kosong), jatah unlock itu langsung habis percuma dan musiknya
     tidak pernah kebagian kesempatan lagi seumur sesi. Sekarang listener ini TETAP aktif
     terus-menerus (bukan sekali pakai) dan mencoba lagi di SETIAP interaksi selama musik
     yang seharusnya berjalan masih dalam kondisi berhenti/ter-pause. */
  function tryUnlockBGM(){
    if(!bgmCurrent) return;
    const el=bgmEl(bgmCurrent);
    if(el && el.paused) el.play().catch(()=>{});
  }
  document.addEventListener('pointerdown', tryUnlockBGM, true);
  document.addEventListener('keydown', tryUnlockBGM, true);
  function stopBGM(){
    ['MenuBGM','MainBGM'].forEach(n=>{ const el=bgmEl(n); if(el){ el.pause(); el.currentTime=0; } });
    bgmCurrent=null;
  }