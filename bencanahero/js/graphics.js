/* BencanaHero — graphics: ikon, glyph, karakter, ilustrasi scene & kartu, manifest media */

  /* ═══ SVG ICONS ═══ */
  const ICONS = {
    play: '<path d="M7 5v14l12-7z"/>',
    lock: '<path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5zm-3 8V7a3 3 0 0 1 6 0v3H9zm3 3.4a1.6 1.6 0 0 1 .9 2.9V18a.9.9 0 0 1-1.8 0v-1.7a1.6 1.6 0 0 1 .9-2.9z"/>',
    unlock: '<path d="M18 10h-7V7a3 3 0 0 1 5.7-1.3 1 1 0 0 0 1.8-.9A5 5 0 0 0 9 7v3H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zm-6 3.4a1.6 1.6 0 0 1 .9 2.9V18a.9.9 0 0 1-1.8 0v-1.7a1.6 1.6 0 0 1 .9-2.9z"/>',
    arrowLeft: '<path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
    book: '<path d="M12 6C9.5 4.5 5.5 4.5 3 5.5v13c2.5-1 6.5-1 9 .5 2.5-1.5 6.5-1.5 9-.5v-13C18.5 4.5 14.5 4.5 12 6z"/>',
    gear: '<path fill-rule="evenodd" d="M19.4 13c.04-.32.06-.66.06-1s-.02-.68-.06-1l2.11-1.65a.5.5 0 0 0 .12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1a7.3 7.3 0 0 0-1.73-1l-.38-2.65A.5.5 0 0 0 14 1h-4a.5.5 0 0 0-.5.42l-.38 2.65c-.62.25-1.2.59-1.73 1l-2.49-1a.5.5 0 0 0-.61.22l-2 3.46a.5.5 0 0 0 .12.64L4.6 11c-.04.32-.06.66-.06 1s.02.68.06 1l-2.11 1.65a.5.5 0 0 0-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1c.53.41 1.11.75 1.73 1l.38 2.65A.5.5 0 0 0 10 23h4a.5.5 0 0 0 .5-.42l.38-2.65c.62-.25 1.2-.59 1.73-1l2.49 1a.5.5 0 0 0 .61-.22l2-3.46a.5.5 0 0 0-.12-.64zM12 15.5A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 0 7z"/>',
    home: '<path d="M12 3 2 12h3v8h6v-5h2v5h6v-8h3z"/>',
    flag: '<path d="M5 3v18h2v-7h6l1 2h6V5h-7l-1-2z"/>',
    pin: '<path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/>',
    trophy: '<path fill-rule="evenodd" d="M7 4h10v2h3v3a4 4 0 0 1-4 4h-.3A6 6 0 0 1 13 16.9V19h3v2H8v-2h3v-2.1A6 6 0 0 1 8.3 13H8a4 4 0 0 1-4-4V6h3zm0 4H6v1a2 2 0 0 0 1 1.7zm10 0v2.7A2 2 0 0 0 18 9V8z"/>',
    refresh: '<path d="M12 6V3L8 7l4 4V8a4 4 0 1 1-4 4H6a6 6 0 1 0 6-6z"/>',
    arrowLeft: '<path d="M15 6 9 12l6 6 1.4-1.4L11.8 12l4.6-4.6z"/>',
    arrowUp: '<path d="M12 8l-5 5 1.4 1.4L12 10.8l3.6 3.6L17 13z"/>',
    arrowDown: '<path d="M12 16l5-5-1.4-1.4L12 13.2 8.4 9.6 7 11z"/>',
    close: '<path d="M18 7.4 16.6 6 12 10.6 7.4 6 6 7.4 10.6 12 6 16.6 7.4 18 12 13.4 16.6 18 18 16.6 13.4 12z"/>',
    plus: '<path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/>',
    check: '<path d="M9.3 16.2 4.8 12l-1.4 1.4 5.9 5.9L21 7.7l-1.4-1.4z"/>',
    star: '<path d="M12 2.5l2.9 6 6.6.6-5 4.4 1.5 6.5L12 17.9 6 20.5l1.5-6.5-5-4.4 6.6-.6z"/>',
    user: '<path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5z"/>',
    volume: '<path d="M4 9v6h4l5 4V5L8 9zM16 8.5a4 4 0 0 1 0 7l1.2 1.2a5.5 5.5 0 0 0 0-9.4z"/>',
    volumeOff: '<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M15.5 9.5l5 5m0-5l-5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    sparkle: '<path d="M12 2l1.7 5L19 8.7l-5.3 1.6L12 16l-1.7-5.7L5 8.7 10.3 7zM18.5 13.5l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9z"/>',
    cap: '<path d="M12 3 1 8l11 5 9-4.1V14h2V8zm-7 9.7V16c0 1.7 3.1 3 7 3s7-1.3 7-3v-3.3l-7 3.2z"/>',
    trash: '<path d="M9 3h6l1 2h4v2H4V5h4zM6 8h12l-1 12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z"/>',
    bulb: '<path d="M9 21h6v-2H9zm3-19a7 7 0 0 0-4 12.7V18h8v-2.3A7 7 0 0 0 12 2z"/>',
    alert: '<path d="M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2V9h2z"/>',
    leaf: '<path d="M5 21c0-9 7-15 15-15 0 9-6 15-15 15z"/>',
    fire: '<path d="M12 2c1.5 3.5-1 5-2.5 7.5C8 12 9 15 11.5 15S16 13 16 10.5c0-1.5-.8-2.5-1.2-3.7 2 1.4 3.2 3.7 3.2 6.2a6 6 0 0 1-12 0c0-4 4-6 6-11z"/>',
    puzzle: '<path d="M10 3a2 2 0 0 1 4 0c0 .4.3.7.7.7H17a1 1 0 0 1 1 1v2.6c0 .4.3.7.7.7a2 2 0 0 1 0 4c-.4 0-.7.3-.7.7V20a1 1 0 0 1-1 1h-2.6c-.4 0-.7-.3-.7-.7a2 2 0 0 0-4 0c0 .4-.3.7-.7.7H6a1 1 0 0 1-1-1v-2.6c0-.4-.3-.7-.7-.7a2 2 0 0 1 0-4c.4 0 .7-.3.7-.7V5a1 1 0 0 1 1-1h3.3c.4 0 .7-.3.7-.7z"/>',
    target: '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="1.5"/>',
    question: '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M9.6 9.2a2.4 2.4 0 1 1 3.4 2.2c-.8.4-1 .9-1 1.6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="16.2" r="1.1"/>',
    calm: '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 10.5q1.5 1.5 3 0M13 10.5q1.5 1.5 3 0M8.5 14q3.5 2.5 7 0" fill="none" stroke="currentColor" stroke-width="2"/>',
    checkAround: '<circle cx="11" cy="11" r="6" fill="none" stroke="currentColor" stroke-width="2"/><line x1="20" y1="20" x2="15.5" y2="15.5" stroke="currentColor" stroke-width="2"/>',
    shelter: '<path d="M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5z"/>',
    runSafe: '<circle cx="14" cy="5.5" r="2.2"/><path d="M13 9l-3.5 3 2.5 2.5V20M11.5 14.5l4 1M7 13l3-2M15.5 11l2.5 4" fill="none" stroke="currentColor" stroke-width="2"/>',
    evacuate: '<path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M11 12h9m-3.5-3.5L20 12l-3.5 3.5" fill="none" stroke="currentColor" stroke-width="2"/>',
    takeBag: '<path d="M8 8V6a4 4 0 0 1 8 0v2M5.5 8.5A2.5 2.5 0 0 1 8 6h8a2.5 2.5 0 0 1 2.5 2.5V20a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 13h8" fill="none" stroke="currentColor" stroke-width="2"/>',
    callHelp: '<path d="M6.6 10.8a14 14 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.36 2.3.56 3.6.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.56 3.6a1 1 0 0 1-.24 1z"/>',
    wait: '<path d="M6 3h12M6 21h12M8 3c0 4.5 3.5 5.5 3.5 9S8 16.5 8 21M16 3c0 4.5-3.5 5.5-3.5 9S16 16.5 16 21" fill="none" stroke="currentColor" stroke-width="2"/>',
    mail: '<path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3.5 6.5 12 13l8.5-6.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    eye: '<path d="M1.5 12S5 5.5 12 5.5 22.5 12 22.5 12 19 18.5 12 18.5 1.5 12 1.5 12z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" stroke-width="2"/>',
    eyeOff: '<path d="M3 3l18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M9.9 5.7A10.6 10.6 0 0 1 12 5.5c7 0 10.5 6.5 10.5 6.5a15.6 15.6 0 0 1-3.4 4.2M6.6 6.8A15.7 15.7 0 0 0 1.5 12S5 18.5 12 18.5c1.4 0 2.6-.25 3.7-.66M14.1 14.1a3.2 3.2 0 0 1-4.4-4.4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    arrowRight: '<path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
    info: '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><rect x="11" y="10" width="2" height="7" rx="1"/><circle cx="12" cy="7" r="1.3"/>',
    key: '<circle cx="8" cy="15" r="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M11 12l9-9M17 6l3 3M14 9l2.5 2.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
  };
  function svgIcon(name, cls) {
    return '<svg class="ic ' + (cls||'') + '" viewBox="0 0 24 24" fill="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name]||'') + '</svg>';
  }
  function hydrateIcons(root) {
    (root||document).querySelectorAll('[data-ic]').forEach(e => {
      if (!e.dataset.done) { e.innerHTML = svgIcon(e.dataset.ic); e.dataset.done = '1'; }
    });
  }
  function starsMarkup(n, total) {
    total = total || 3; let s = '';
    for (let i = 0; i < total; i++) s += svgIcon('star', i < n ? 'star-on' : 'star-off');
    return s;
  }

  /* ═══ DISASTER GLYPHS (mini colored) ═══ */
  const GLYPH = {
    landslide: '<svg viewBox=\"0 0 32 32\"><path d=\"M4 27 L19 9 L27 15 L23 27 Z\" fill=\"#7c5a34\"/><path d=\"M19 9 L27 15 L25 21 L17 15 Z\" fill=\"#6b7a3e\"/><circle cx=\"13\" cy=\"22\" r=\"2.4\" fill=\"#4a3218\"/><circle cx=\"18\" cy=\"25\" r=\"2\" fill=\"#3a2a18\"/><circle cx=\"9\" cy=\"26\" r=\"1.8\" fill=\"#5c3f22\"/><rect x=\"3\" y=\"27\" width=\"26\" height=\"4\" fill=\"#5a5140\"/></svg>',
    earthquake: '<svg viewBox="0 0 32 32"><path d="M6 16 16 7l10 9v9H6z" fill="#e8b98a"/><path d="M16 7 6 16h20z" fill="#e63946"/><rect x="13" y="18" width="6" height="7" fill="#8a5a2c"/><polyline points="22,9 25,15 21,18 24,24" fill="none" stroke="#fff" stroke-width="1.4" opacity=".8"/></svg>',
    tsunami: '<svg viewBox="0 0 32 32"><path d="M3 19c4-11 13-11 15-3 1.2 4.5-3.5 7-5.5 3.5-1.2-2 .8-4.2 3-3" fill="none" stroke="#1f7fd6" stroke-width="3" stroke-linecap="round"/><path d="M2 23c6 4.5 16 4.5 22 0 3-2 6 0 6 0v9H2z" fill="#2e9bff"/></svg>',
    flood: '<svg viewBox="0 0 32 32"><path d="M6 14 16 6l10 8v6H6z" fill="#e8c9a0"/><path d="M16 6 6 14h20z" fill="#118ab2"/><rect x="13" y="14" width="6" height="6" fill="#8a5a2c"/><rect x="2" y="19" width="28" height="9" fill="#2e9bff" opacity=".85"/></svg>',
    fire: '<svg viewBox="0 0 32 32"><rect x="14" y="21" width="4" height="7" fill="#6b4a2e"/><path d="M16 6 7 21h18z" fill="#3f7a4a"/><path d="M16 3 10 13h12z" fill="#57a566"/><path d="M21 23c3-4 0-6-.5-9-1.2 2.6-3.6 3.6-3 6.6.4 2.2 2.6 3 3.5 2.4z" fill="#ff6b35"/><path d="M25 21c2-3 0-4.6-.5-6.6-.9 2-2.6 2.8-2 5 .3 1.6 1.8 2 2.5 1.6z" fill="#ff8a3d"/></svg>',
    volcano: '<svg viewBox="0 0 32 32"><circle cx="22" cy="8" r="5" fill="#9aa0a6" opacity=".85"/><circle cx="27" cy="6" r="3.5" fill="#b6bcc2" opacity=".85"/><path d="M5 27 16 8l11 19z" fill="#4a3326"/><path d="M11 19 16 8l5 11q-5 3-10 0z" fill="#ff6b35"/><path d="M16 8v17" stroke="#ffc53d" stroke-width="2" fill="none"/></svg>',
    tornado: '<svg viewBox="0 0 32 32"><path d="M6 6h20l-3 5H9z" fill="#8f9a95"/><path d="M9 12h14l-2.5 5H11.5z" fill="#7c867f"/><path d="M12 18h8l-2 5h-4z" fill="#69736c"/><path d="M15 24h3l-1.1 4h-.9z" fill="#5a635c"/><g stroke="#fff" stroke-width="1" opacity=".4"><line x1="8" y1="8.5" x2="24" y2="8.5"/><line x1="11" y1="14.5" x2="21" y2="14.5"/><line x1="13.5" y1="20.5" x2="18.5" y2="20.5"/></g></svg>'
  };
  function shieldBrand() {
    return '<svg viewBox="0 0 64 76"><path d="M32 4 8 12v20c0 18 12 30 24 36 12-6 24-18 24-36V12z" fill="#1E8A4C"/><path d="M32 4 8 12v20c0 18 12 30 24 36V4z" fill="#2BA45C"/><path d="M32 4 8 12v20c0 18 12 30 24 36 12-6 24-18 24-36V12z" fill="none" stroke="#fff" stroke-width="3"/><path d="M24 36l6 6 12-14" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }

  /* ═══ HERO CHARACTER POSES ═══ */
  const HEAD = '<circle cx="30" cy="26" r="13" fill="#F4C9A0"/>' +
    '<path d="M18 25c0-9 5-14 12-14s12 5 12 14c-2-3.5-4-4.5-6.5-4.5-1.2-2-3-3-5.5-3s-4.3 1-5.5 3C22 21 20 22 18 25z" fill="#2A2A38"/>' +
    '<circle cx="26" cy="27" r="1.8" fill="#2A2A38"/><circle cx="34" cy="27" r="1.8" fill="#2A2A38"/>' +
    '<circle cx="23" cy="30.5" r="1.9" fill="#F7A98C" opacity=".6"/><circle cx="37" cy="30.5" r="1.9" fill="#F7A98C" opacity=".6"/>' +
    '<path d="M27 31.5q3 2.6 6 0" fill="none" stroke="#C76B43" stroke-width="1.6" stroke-linecap="round"/>';
  function heroWrap(inner, cls) {
    return '<svg class="hero ' + (cls || 'hero-idle') + '" viewBox="0 0 60 92" xmlns="http://www.w3.org/2000/svg">' + inner + '</svg>';
  }
  function heroPose(p) {
    const shadow = '<ellipse cx="30" cy="88" rx="16" ry="4" fill="rgba(0,0,0,.18)"/>';
    if (p === 'crouch') {
      return heroWrap(shadow +
        '<rect x="14" y="82" width="10" height="6" rx="3" fill="#1E2A40"/><rect x="36" y="82" width="10" height="6" rx="3" fill="#1E2A40"/>' +
        '<path d="M16 86q14-16 28 0z" fill="#2C3E5C"/>' +
        '<rect x="20" y="52" width="20" height="20" rx="9" fill="#FF7A45"/>' +
        '<rect x="16" y="34" width="6" height="16" rx="3" fill="#FF7A45" transform="rotate(-28 19 42)"/>' +
        '<rect x="38" y="34" width="6" height="16" rx="3" fill="#FF7A45" transform="rotate(28 41 42)"/>' +
        '<circle cx="23" cy="31" r="3" fill="#F4C9A0"/><circle cx="37" cy="31" r="3" fill="#F4C9A0"/>' +
        '<circle cx="30" cy="44" r="12" fill="#F4C9A0"/>' +
        '<path d="M18 43c0-9 5-13 12-13s12 4 12 13c-2-3-4-4-6.5-4-1.2-2-3-3-5.5-3s-4.3 1-5.5 3C22 39 20 40 18 43z" fill="#2A2A38"/>' +
        '<circle cx="26" cy="45" r="1.7" fill="#2A2A38"/><circle cx="34" cy="45" r="1.7" fill="#2A2A38"/>' +
        '<path d="M27 49q3 1.8 6 0" fill="none" stroke="#C76B43" stroke-width="1.5" stroke-linecap="round"/>');
    }
    if (p === 'run') {
      return heroWrap(shadow +
        '<g transform="rotate(-7 30 50)">' +
        '<rect x="18" y="58" width="6" height="20" rx="3" fill="#2C3E5C" transform="rotate(26 21 62)"/>' +
        '<rect x="20" y="84" width="11" height="6" rx="3" fill="#1E2A40" transform="rotate(20 25 87)"/>' +
        '<rect x="34" y="58" width="6" height="20" rx="3" fill="#2C3E5C" transform="rotate(-22 37 62)"/>' +
        '<rect x="38" y="84" width="11" height="6" rx="3" fill="#1E2A40" transform="rotate(-12 43 87)"/>' +
        '<rect x="21" y="40" width="20" height="23" rx="9" fill="#FF7A45"/>' +
        '<path d="M28 41 31 46 34 41Z" fill="#fff"/>' +
        '<rect x="13" y="44" width="6" height="15" rx="3" fill="#E85F2A" transform="rotate(45 16 50)"/><circle cx="13" cy="58" r="3" fill="#F4C9A0"/>' +
        '<rect x="41" y="42" width="6" height="15" rx="3" fill="#E85F2A" transform="rotate(-45 44 48)"/><circle cx="47" cy="42" r="3" fill="#F4C9A0"/>' +
        '<g transform="translate(3,0)">' + HEAD + '</g>' +
        '</g>', 'hero-run');
    }
    // idle base parts shared by idle / phone / look
    const base = shadow +
      '<rect x="23" y="60" width="6" height="22" rx="3" fill="#2C3E5C"/><rect x="31" y="60" width="6" height="22" rx="3" fill="#2C3E5C"/>' +
      '<rect x="21" y="80" width="10" height="6" rx="3" fill="#1E2A40"/><rect x="30" y="80" width="10" height="6" rx="3" fill="#1E2A40"/>' +
      '<rect x="20" y="40" width="20" height="24" rx="9" fill="#FF7A45"/>' +
      '<path d="M27 41 30 46 33 41Z" fill="#fff"/>' +
      '<line x1="30" y1="46" x2="30" y2="62" stroke="#E85F2A" stroke-width="1.6"/>';
    if (p === 'phone') {
      return heroWrap(base +
        '<rect x="15" y="42" width="6" height="18" rx="3" fill="#FF7A45"/><circle cx="18" cy="61" r="3" fill="#F4C9A0"/>' +
        '<rect x="40" y="26" width="5" height="17" rx="2.5" fill="#FF7A45" transform="rotate(-12 42 34)"/>' +
        '<circle cx="42" cy="26" r="3" fill="#F4C9A0"/>' +
        '<rect x="38" y="21" width="6" height="10" rx="1.5" fill="#1E2A40" transform="rotate(-10 41 26)"/>' +
        HEAD);
    }
    if (p === 'look') {
      return heroWrap(base +
        '<rect x="15" y="42" width="6" height="18" rx="3" fill="#FF7A45"/><circle cx="18" cy="61" r="3" fill="#F4C9A0"/>' +
        '<rect x="40" y="26" width="5" height="14" rx="2.5" fill="#FF7A45"/>' +
        HEAD +
        '<rect x="33" y="20" width="12" height="4" rx="2" fill="#F4C9A0"/>');
    }
    if (p === 'wave') {
      return heroWrap(base +
        '<rect x="15" y="42" width="6" height="18" rx="3" fill="#FF7A45"/><circle cx="18" cy="61" r="3" fill="#F4C9A0"/>' +
        '<g class="wavearm"><rect x="39" y="22" width="6" height="22" rx="3" fill="#FF7A45"/><circle cx="42" cy="20" r="3.6" fill="#F4C9A0"/></g>' +
        HEAD);
    }
    // idle (default)
    return heroWrap(base +
      '<rect x="15" y="42" width="6" height="18" rx="3" fill="#FF7A45"/><circle cx="18" cy="61" r="3" fill="#F4C9A0"/>' +
      '<rect x="39" y="42" width="6" height="18" rx="3" fill="#FF7A45"/><circle cx="42" cy="61" r="3" fill="#F4C9A0"/>' +
      HEAD);
  }

  /* ═══ HOME LANDSCAPE ═══ */
  function homeScene() {
    function tree(x,s,d){ return '<g transform="translate('+x+',0)"><rect x="-9" y="150" width="18" height="56" rx="6" fill="#8a6a3e"/><g class="sway" style="animation-delay:'+(d||0)+'s"><circle cx="0" cy="132" r="'+(34*s)+'" fill="#6FA45C"/><circle cx="'+(-26*s)+'" cy="150" r="'+(24*s)+'" fill="#7DB069"/><circle cx="'+(26*s)+'" cy="150" r="'+(24*s)+'" fill="#7DB069"/><circle cx="-8" cy="120" r="'+(18*s)+'" fill="#86BA72"/></g></g>'; }
    function house(x,roof){ return '<g transform="translate('+x+',0)"><rect x="-34" y="150" width="68" height="56" fill="#EBDcC0"/><path d="M-44 150 L0 114 L44 150 Z" fill="'+roof+'"/><rect x="-12" y="172" width="24" height="34" rx="2" fill="#8a6a3e"/><circle cx="6" cy="190" r="1.6" fill="#5a4500"/><rect x="16" y="160" width="16" height="16" fill="#cfe3ea" stroke="#FBF5E7" stroke-width="2"/></g>'; }
    function bush(x,s){ return '<g transform="translate('+x+',0)"><circle cx="0" cy="198" r="'+(18*s)+'" fill="#6FA45C"/><circle cx="'+(16*s)+'" cy="200" r="'+(13*s)+'" fill="#7DB069"/><circle cx="'+(-16*s)+'" cy="200" r="'+(13*s)+'" fill="#7DB069"/></g>'; }
    function flower(x,y,c){ return '<g transform="translate('+x+','+y+')"><circle cx="0" cy="-4" r="2.4" fill="'+c+'"/><circle cx="4" cy="0" r="2.4" fill="'+c+'"/><circle cx="-4" cy="0" r="2.4" fill="'+c+'"/><circle cx="0" cy="4" r="2.4" fill="'+c+'"/><circle cx="0" cy="0" r="2.2" fill="#F2B43A"/></g>'; }
    let s = '<svg viewBox="0 0 1200 240" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">';
    s += '<path d="M0 118 Q300 58 600 104 T1200 96 L1200 240 0 240 Z" fill="#A9C994"/>';
    s += '<path d="M0 158 Q360 104 720 146 T1200 138 L1200 240 0 240 Z" fill="#8DB877"/>';
    s += house(250,'#D9532A') + tree(120,1,0) + tree(470,.85,-1.5);
    s += house(940,'#2C6E8F') + tree(1080,1.05,-2.7) + bush(620,1.1) + bush(800,.9) + bush(1010,1);
    s += '<path d="M0 196 Q200 182 400 196 T800 196 T1200 196 L1200 240 0 240 Z" fill="#74A861"/>';
    s += '<rect y="214" width="1200" height="26" fill="#638F52"/>';
    s += flower(60,222,'#E0552B')+flower(360,224,'#F2B43A')+flower(560,220,'#E0552B')+flower(720,224,'#FCF8EE')+flower(1130,222,'#E0552B')+flower(880,222,'#6A5AA6');
    s += '</svg>';
    return s;
  }

  /* ═══ DISASTER SCENES ═══ */
  function pine(cx, by, s, burn){
    const trunk = '<rect x="'+(cx-4*s)+'" y="'+(by-15*s)+'" width="'+(8*s)+'" height="'+(15*s)+'" fill="'+(burn?'#3a2414':'#6b4a2e')+'"/>';
    const c1 = burn?'#4a2c18':'#3f7a4a', c2 = burn?'#5e3519':'#4a8a56', c3 = burn?'#6e3c1c':'#57a566';
    return trunk +
      '<path d="M'+(cx-25*s)+' '+(by-15*s)+' '+cx+' '+(by-56*s)+' '+(cx+25*s)+' '+(by-15*s)+' Z" fill="'+c1+'"/>' +
      '<path d="M'+(cx-20*s)+' '+(by-31*s)+' '+cx+' '+(by-68*s)+' '+(cx+20*s)+' '+(by-31*s)+' Z" fill="'+c2+'"/>' +
      '<path d="M'+(cx-14*s)+' '+(by-46*s)+' '+cx+' '+(by-78*s)+' '+(cx+14*s)+' '+(by-46*s)+' Z" fill="'+c3+'"/>';
  }
  function sceneArt(id, uid) {
    const open = '<svg class="scene" viewBox="0 0 320 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">';
    if (id === 'landslide') {
      const g = 'sky-ls-' + uid;
      let rain = '<g class="rain" stroke="#a9bcd0" stroke-width="2" stroke-linecap="round">';
      [40,80,120,160,200,240,280,300].forEach((x,i)=>{ rain += '<line x1="'+x+'" y1="'+(i%3*8)+'" x2="'+(x-6)+'" y2="'+(14+i%3*8)+'"/>'; });
      rain += '</g>';
      return open +
        '<defs><linearGradient id="' + g + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4b5a53"/><stop offset="1" stop-color="#8a978c"/></linearGradient></defs>' +
        '<rect width="320" height="240" fill="url(#' + g + ')"/>' +
        '<circle cx="70" cy="40" r="18" fill="#5c6b62" opacity=".7"/><circle cx="96" cy="36" r="14" fill="#5c6b62" opacity=".7"/><circle cx="250" cy="34" r="16" fill="#5c6b62" opacity=".6"/>' +
        rain +
        '<path d="M150 240 L214 96 Q250 60 320 70 L320 240 Z" fill="#6b7a3e"/>' +
        '<path d="M150 240 L214 96 Q250 60 320 70 L320 88 Q250 84 226 108 L176 240 Z" fill="#7c5a34"/>' +
        '<path d="M176 240 L226 108 Q250 84 320 88 L320 104 Q252 100 232 120 L196 240 Z" fill="#6e4d2b"/>' +
        '<path d="M236 96 l-10 26 l8 10 l-6 20" fill="none" stroke="#3a2a18" stroke-width="2"/>' +
        '<path d="M262 88 l-6 20 l6 8" fill="none" stroke="#3a2a18" stroke-width="1.6"/>' +
        '<g class="slide">' +
          '<path d="M196 150 q18 -8 34 4 q10 12 -6 20 q-24 8 -38 -2 q-8 -10 10 -22z" fill="#5c3f22"/>' +
          '<circle cx="210" cy="176" r="9" fill="#4a3218"/><circle cx="230" cy="188" r="7" fill="#6e4d2b"/><circle cx="196" cy="196" r="6" fill="#3a2a18"/><circle cx="222" cy="204" r="8" fill="#4a3218"/>' +
        '</g>' +
        '<g class="sway"><rect x="250" y="86" width="8" height="34" rx="3" fill="#6e4d2b" transform="rotate(18 254 103)"/><circle cx="266" cy="82" r="14" fill="#5b7a3a"/></g>' +
        '<rect x="40" y="150" width="60" height="50" fill="#e8c9a0"/><rect x="40" y="150" width="60" height="50" fill="none" stroke="#caa45f" stroke-width="2"/>' +
        '<path d="M32 150 70 116 108 150 Z" fill="#c0533a"/><path d="M32 150 70 116 108 150" fill="none" stroke="#9e3f2c" stroke-width="3"/>' +
        '<rect x="60" y="172" width="18" height="28" fill="#8a5a2c"/>' +
        '<rect y="212" width="320" height="28" fill="#5a5140"/><rect y="210" width="320" height="3" fill="#463f30"/>' +
        '<rect x="20" y="150" width="10" height="40" fill="#8a5a2c"/><rect x="6" y="140" width="40" height="16" rx="2" fill="#1E8A4C"/><path d="M14 148h20m-4-4l4 4-4 4" stroke="#fff" stroke-width="2" fill="none"/>' +
        '</svg>';
    }
    if (id === 'earthquake') {
      return open +
        '<rect width="320" height="240" fill="#fbeede"/>' +
        '<rect y="168" width="320" height="72" fill="#c9a26a"/><rect y="166" width="320" height="4" fill="#a9824f"/>' +
        '<rect x="184" y="40" width="92" height="66" rx="4" fill="#bfe3ff" stroke="#fff" stroke-width="6"/>' +
        '<line x1="230" y1="40" x2="230" y2="106" stroke="#fff" stroke-width="4"/><line x1="184" y1="73" x2="276" y2="73" stroke="#fff" stroke-width="4"/>' +
        '<polyline points="208,46 216,62 204,74 218,92" fill="none" stroke="#8fb6d4" stroke-width="2"/>' +
        '<rect x="58" y="44" width="42" height="32" rx="3" fill="#fff" stroke="#caa45f" stroke-width="5"/><circle cx="79" cy="60" r="8" fill="#ffd9a0"/>' +
        '<rect x="14" y="92" width="44" height="76" fill="#b5793f"/><rect x="14" y="92" width="44" height="76" fill="none" stroke="#8a5a2c" stroke-width="3"/>' +
        '<line x1="14" y1="118" x2="58" y2="118" stroke="#8a5a2c" stroke-width="3"/><line x1="14" y1="144" x2="58" y2="144" stroke="#8a5a2c" stroke-width="3"/>' +
        '<rect x="18" y="98" width="6" height="18" fill="#e85f2a"/><rect x="26" y="100" width="6" height="16" fill="#2e9bff"/><rect x="34" y="98" width="6" height="18" fill="#22be86"/><rect x="42" y="100" width="6" height="16" fill="#ffc53d"/>' +
        '<g class="flame"><rect x="150" y="118" width="16" height="13" rx="2" fill="#9b5de5" transform="rotate(24 158 124)"/></g>' +
        '<g class="flame"><rect x="120" y="138" width="13" height="11" rx="2" fill="#e85f2a" transform="rotate(-18 126 143)"/></g>' +
        '<rect x="116" y="150" width="94" height="13" rx="4" fill="#caa45f"/><rect x="120" y="148" width="94" height="4" rx="2" fill="#e0bd7e"/>' +
        '<rect x="124" y="161" width="9" height="30" fill="#a9824f"/><rect x="197" y="161" width="9" height="30" fill="#a9824f"/>' +
        '</svg>';
    }
    if (id === 'tsunami') {
      const g = 'sky-tsu-' + uid;
      return open +
        '<defs><linearGradient id="' + g + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5ec2f0"/><stop offset="1" stop-color="#bfe9ff"/></linearGradient></defs>' +
        '<rect width="320" height="240" fill="url(#' + g + ')"/>' +
        '<path d="M244 168 Q292 110 340 168 L340 240 244 240 Z" fill="#5bb98a"/><path d="M244 168 Q292 110 340 168" fill="none" stroke="#49a376" stroke-width="3"/>' +
        '<rect x="290" y="150" width="10" height="34" rx="3" fill="#8a5a2c"/><circle cx="295" cy="146" r="13" fill="#22be86"/><path d="M295 140v12M290 145l5-5 5 5" stroke="#fff" stroke-width="2.4" fill="none"/>' +
        '<rect y="150" width="206" height="18" fill="#2e9bff" opacity=".85"/>' +
        '<g class="wave-move"><path d="M-46 152 q34 -44 66 -12 q22 22 -10 44 q-56 14 -78 -8 q-12 -14 22 -24z" fill="#1f7fd6"/><path d="M-30 150 q24 -22 44 -6" fill="none" stroke="#fff" stroke-width="3" opacity=".7"/></g>' +
        '<rect y="168" width="320" height="72" fill="#e8d3a1"/>' +
        '<ellipse cx="92" cy="188" rx="28" ry="6" fill="#cdb487"/><path d="M80 188q7-5 14 0q-7 5-14 0z" fill="#7fb0c9"/><circle cx="92" cy="187" r="1.2" fill="#16233D"/>' +
        '<rect x="34" y="118" width="9" height="62" rx="3" fill="#8a5a2c"/>' +
        '<g class="sway"><path d="M38 118q-26-8-34 4M38 118q26-8 34 4M38 118q-10-26 4-34M38 118q14-22 28-10" stroke="#3fa36a" stroke-width="6" fill="none" stroke-linecap="round"/></g>' +
        '</svg>';
    }
    if (id === 'flood') {
      const g = 'sky-fl-' + uid;
      let rain = '<g class="rain" stroke="#9fc4ec" stroke-width="2" stroke-linecap="round">';
      [30,70,110,150,190,230,270,300].forEach((x,i)=>{ rain += '<line x1="'+x+'" y1="'+(i%3*8)+'" x2="'+(x-6)+'" y2="'+(14+i%3*8)+'"/>'; });
      rain += '</g>';
      return open +
        '<defs><linearGradient id="' + g + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#27406e"/><stop offset="1" stop-color="#46699c"/></linearGradient></defs>' +
        '<rect width="320" height="240" fill="url(#' + g + ')"/>' +
        '<circle cx="70" cy="44" r="18" fill="#5a7099" opacity=".7"/><circle cx="92" cy="40" r="14" fill="#5a7099" opacity=".7"/>' +
        rain +
        '<rect x="92" y="116" width="128" height="84" fill="#e8c9a0"/><rect x="92" y="116" width="128" height="84" fill="none" stroke="#caa45f" stroke-width="2"/>' +
        '<path d="M84 116 156 66 228 116 Z" fill="#c0533a"/><path d="M84 116 156 66 228 116" fill="none" stroke="#9e3f2c" stroke-width="3"/>' +
        '<rect x="118" y="150" width="30" height="50" fill="#8a5a2c"/><circle cx="143" cy="176" r="2" fill="#ffd9a0"/>' +
        '<rect x="172" y="138" width="28" height="28" fill="#bfe3ff" stroke="#fff" stroke-width="3"/><line x1="186" y1="138" x2="186" y2="166" stroke="#fff" stroke-width="2"/>' +
        '<rect y="186" width="320" height="54" fill="#3a5a40"/>' +
        '</svg>';
    }
    if (id === 'fire') {
      const g = 'sky-fi-' + uid;
      let ember = '<g class="ash">';
      [['#ff8a3d',150,.6],['#ffd24a',196,.5],['#ff6b35',176,.6],['#ffb13d',224,.5],['#ff8a3d',128,.55],['#ffd24a',206,.45]].forEach((e,i)=>{ ember += '<circle cx="'+e[1]+'" cy="'+(i*5)+'" r="'+(e[2]*2+1)+'" fill="'+e[0]+'"/>'; });
      ember += '</g>';
      return open +
        '<defs><linearGradient id="' + g + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a1408"/><stop offset="0.5" stop-color="#7a2e12"/><stop offset="1" stop-color="#b3561f"/></linearGradient></defs>' +
        '<rect width="320" height="240" fill="url(#' + g + ')"/>' +
        '<ellipse cx="60" cy="44" rx="30" ry="26" fill="#ff9a3d" opacity=".22" class="haze"/>' +
        ember +
        '<path d="M0 196 Q90 168 180 188 T320 184 L320 240 0 240 Z" fill="#2a1a0e"/>' +
        '<g class="smoke2" fill="#5a4a40" opacity=".5"><circle cx="176" cy="34" r="22"/><circle cx="208" cy="40" r="17"/><circle cx="160" cy="20" r="16"/></g>' +
        '<g class="smoke" fill="#46382f" opacity=".68"><circle cx="186" cy="54" r="26"/><circle cx="150" cy="62" r="18"/><circle cx="220" cy="60" r="20"/><circle cx="188" cy="34" r="18"/></g>' +
        pine(66,202,.8,false) + pine(104,204,.7,false) +
        pine(150,200,1,true) + pine(196,198,1.25,true) + pine(240,202,.95,true) +
        '<ellipse cx="195" cy="206" rx="90" ry="16" fill="#ff5a22" opacity=".4" class="glow"/>' +
        '<g class="flame"><path d="M150 196q-12-24 5-36q-3 14 8 11q6-9 3-20q17 14 12 32q-3 12-15 12q-14 0-13-9z" fill="#ff7a2e"/><path d="M150 196q-6-14 5-21q-1 9 6 8" fill="#ffd24a"/></g>' +
        '<g class="flame"><path d="M196 192q-14-28 6-42q-3 16 9 12q7-10 3-23q19 16 14 37q-3 13-17 13q-16 0-15-11z" fill="#ff7a2e"/><path d="M196 192q-7-16 6-24q-1 10 6 9" fill="#ffe39a"/></g>' +
        '<g class="flame"><path d="M240 198q-11-22 5-33q-3 13 7 10q5-8 2-18q15 13 11 29q-2 11-13 11q-13 0-12-8z" fill="#ff8a3d"/></g>' +
        '<g class="flame"><path d="M120 204q-8-16 4-24q-2 10 6 8q4-6 2-14q12 10 8 22q-2 9-11 9q-11 0-9-9z" fill="#ff8a3d"/></g>' +
        '<rect y="208" width="320" height="32" fill="#3e5a32"/><rect x="150" y="208" width="170" height="32" fill="#2c1c10"/><rect y="206" width="320" height="3" fill="#33502a"/>' +
        '<rect x="44" y="160" width="11" height="40" fill="#8a5a2c"/><rect x="22" y="150" width="50" height="16" rx="2" fill="#1E8A4C"/><path d="M62 158H30m3.5-3.5L26 158l3.5 3.5" stroke="#fff" stroke-width="2" fill="none"/>' +
        '</svg>';
    }
    if (id === 'volcano') {
      const g = 'sky-vo-' + uid, gc = 'cone-vo-' + uid;
      let ash = '<g class="ash" fill="#4a3b34">';
      [[44,.4],[96,.55],[150,.45],[206,.6],[262,.5],[300,.42]].forEach((a,i)=>{ ash += '<circle cx="'+a[0]+'" cy="'+(i*6)+'" r="'+(2.2*a[1]+1.2)+'"/>'; });
      ash += '</g>';
      return open +
        '<defs><linearGradient id="' + g + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#360b02"/><stop offset="0.55" stop-color="#6a2207"/><stop offset="1" stop-color="#8a3712"/></linearGradient>' +
        '<linearGradient id="' + gc + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a4232"/><stop offset="1" stop-color="#352519"/></linearGradient></defs>' +
        '<rect width="320" height="240" fill="url(#' + g + ')"/>' +
        '<ellipse cx="160" cy="118" rx="150" ry="116" fill="#a83a10" opacity=".3" class="haze"/>' +
        ash +
        '<path d="M36 198 L160 56 L284 198 Z" fill="url(#' + gc + ')"/>' +
        '<path d="M160 56 L284 198 L208 198 Z" fill="#2c1d13" opacity=".5"/>' +
        '<path d="M36 198 L160 56 L118 198 Z" fill="#6b4e39" opacity=".35"/>' +
        '<path d="M130 76 160 56 190 76 Q174 90 160 83 Q146 90 130 76 Z" fill="#241912"/>' +
        '<path d="M150 80 q-9 42 -5 84 M170 80 q9 38 6 80 M160 78 q0 44 -1 86" stroke="#ff5a2a" stroke-width="6" fill="none" stroke-linecap="round" class="lava"/>' +
        '<path d="M160 78 q0 44 -1 86" stroke="#ffd24a" stroke-width="2.4" fill="none" stroke-linecap="round" class="lava"/>' +
        '<ellipse cx="160" cy="72" rx="24" ry="8" fill="#ff8a2a" class="glow"/>' +
        '<ellipse cx="160" cy="72" rx="12" ry="4.5" fill="#ffe39a"/>' +
        '<g class="ember"><rect x="150" y="52" width="5" height="9" rx="2.5" fill="#ff8a3d"/><rect x="163" y="48" width="4" height="8" rx="2" fill="#ffd24a"/><rect x="170" y="54" width="4" height="7" rx="2" fill="#ff6b35"/></g>' +
        '<g class="smoke2" fill="#6e635e" opacity=".5"><circle cx="150" cy="30" r="17"/><circle cx="178" cy="34" r="15"/><circle cx="162" cy="16" r="14"/></g>' +
        '<g class="smoke" fill="#544a45" opacity=".72"><circle cx="160" cy="40" r="26"/><circle cx="132" cy="52" r="18"/><circle cx="188" cy="50" r="20"/><circle cx="160" cy="22" r="19"/></g>' +
        '<rect y="198" width="320" height="42" fill="#3e5a32"/><rect y="196" width="320" height="4" fill="#33502a"/>' +
        '<circle cx="214" cy="218" r="4" fill="#ff6b35" class="glow"/><circle cx="118" cy="224" r="3" fill="#ff8a3d" class="glow"/>' +
        '<g stroke="#caa14f" stroke-width="3" stroke-linecap="round"><line x1="232" y1="214" x2="232" y2="200"/><line x1="246" y1="216" x2="246" y2="202"/><line x1="260" y1="214" x2="260" y2="200"/></g>' +
        '<rect x="86" y="158" width="11" height="42" fill="#8a5a2c"/><rect x="66" y="148" width="48" height="16" rx="2" fill="#1E8A4C"/><path d="M104 156H72m3.5-3.5L68 156l3.5 3.5" stroke="#fff" stroke-width="2" fill="none"/>' +
        '</svg>';
    }
    if (id === 'tornado') {
      const gs = 'sky-to-' + uid, gf = 'fun-to-' + uid;
      let rain = '<g class="rain" stroke="#c2ccc6" stroke-width="2" stroke-linecap="round" opacity=".5">';
      [24,64,104,150,196,236,276,308].forEach((x,i)=>{ rain += '<line x1="'+x+'" y1="'+(i%3*9)+'" x2="'+(x-9)+'" y2="'+(17+i%3*9)+'"/>'; });
      rain += '</g>';
      return open +
        '<defs><linearGradient id="' + gs + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2c343d"/><stop offset="0.55" stop-color="#49554d"/><stop offset="1" stop-color="#616d54"/></linearGradient>' +
        '<linearGradient id="' + gf + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9aa4a0"/><stop offset="1" stop-color="#69736c"/></linearGradient></defs>' +
        '<rect width="320" height="240" fill="url(#' + gs + ')"/>' +
        '<g fill="#39434c"><ellipse cx="74" cy="28" rx="86" ry="26"/><ellipse cx="208" cy="24" rx="96" ry="28"/><ellipse cx="306" cy="32" rx="72" ry="24"/></g><g fill="#454f58"><ellipse cx="160" cy="46" rx="150" ry="16"/></g>' +
        '<rect y="202" width="320" height="38" fill="#4a5e3a"/><rect y="200" width="320" height="3" fill="#3c4e30"/>' +
        '<rect x="48" y="150" width="74" height="52" fill="#d9c39e"/><rect x="48" y="150" width="74" height="52" fill="none" stroke="#b59a72" stroke-width="2"/><path d="M40 150 85 120 130 150 Z" fill="#7a4a32"/><rect x="74" y="172" width="20" height="30" fill="#5a3a22"/><rect x="98" y="160" width="16" height="15" fill="#9fb6c2" stroke="#fff" stroke-width="2"/>' +
        '<path d="M132 202 q5 -34 22 -50" stroke="#6b4a2e" stroke-width="7" fill="none" stroke-linecap="round"/>' +
        '<g class="sway"><ellipse cx="156" cy="146" rx="22" ry="16" fill="#4a8a56"/><ellipse cx="172" cy="152" rx="12" ry="9" fill="#3f7a4a"/><ellipse cx="146" cy="140" rx="11" ry="8" fill="#57a566"/></g>' +
        '<g class="twist">' +
        '<path d="M152 54 C152 108 178 160 184 204 L196 204 C202 160 226 108 228 54 Z" fill="url(#' + gf + ')"/>' +
        '<path d="M196 204 C202 160 226 108 228 54 L214 54 C214 104 196 156 190 204 Z" fill="#525b54" opacity=".4"/>' +
        '<ellipse cx="190" cy="84" rx="34" ry="6" fill="#d2d8d4" opacity=".42"/><ellipse cx="190" cy="120" rx="26" ry="5" fill="#d2d8d4" opacity=".42"/><ellipse cx="189" cy="156" rx="17" ry="4" fill="#d2d8d4" opacity=".42"/><ellipse cx="189" cy="188" rx="10" ry="3" fill="#d2d8d4" opacity=".42"/>' +
        '<ellipse cx="190" cy="205" rx="42" ry="11" fill="#8a9088" opacity=".5"/>' +
        '</g>' +
        rain +
        '<g class="gust" style="animation-delay:0s"><ellipse cx="0" cy="100" rx="5" ry="2.4" fill="#8a7a4a"/></g>' +
        '<g class="gust" style="animation-delay:-1.1s;animation-duration:2.3s"><rect x="0" y="132" width="8" height="3" rx="1" fill="#6b5a3a"/></g>' +
        '<g class="gust" style="animation-delay:-2s;animation-duration:3.3s"><ellipse cx="0" cy="158" rx="4" ry="2" fill="#7a8a5a"/></g>' +
        '</svg>';
    }
    return open + '<rect width="320" height="240" fill="#cfe8ff"/></svg>';
  }

  /* ═══ OPTIONAL VIDEO BACKGROUNDS (per mission) ═══
     Isi dengan nama file video (mis. 'video/gempa.mp4') ATAU data URI.
     Kosong = pakai animasi bawaan. Jika video gagal dimuat, otomatis kembali ke animasi. */
  const CARD_IMG = { earthquake:'assets/images/earthquake.jpg', tsunami:'assets/images/tsunami.jpg', flood:'assets/images/flood.jpg', fire:'assets/images/fire.jpg', volcano:'assets/images/volcano.jpg', tornado:'assets/images/tornado.jpg', landslide:'assets/images/landslide.jpg' };
  const SCENE_VIDEO = {
    landslide:  'assets/videos/landslide.mp4',
    earthquake: 'assets/videos/earthquake.mp4',
    tsunami:    'assets/videos/tsunami.mp4',
    flood:      'assets/videos/flood.mp4',
    fire:       'assets/videos/fire.mp4',
    volcano:    'assets/videos/volcano.mp4',
    tornado:    'assets/videos/tornado.mp4'
  };
  function sceneMarkup(id, uid){
    const src = SCENE_VIDEO[id];
    if (src && S.anim) {
      return '<video class="scene scene-video" autoplay muted loop playsinline preload="auto" ' +
        'onerror="sceneVideoFallback(this,\'' + id + '\',\'' + uid + '\')" src="' + src + '"></video>';
    }
    return sceneArt(id, uid);
  }
  function sceneVideoFallback(el, id, uid){
    const p = el && el.parentElement; if (p) p.innerHTML = sceneArt(id, uid);
  }

  /* ═══ MISSION CARD BANNERS ═══ */
  function cardArt(id) {
    if (typeof CARD_IMG!=='undefined' && CARD_IMG[id]) return '<img class="ca-img" src="'+CARD_IMG[id]+'" alt="">';
    const open = '<svg viewBox="0 0 240 120" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">';
    if (id === 'landslide') {
      return open +
        '<defs><linearGradient id="cg-landslide" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4b5a53"/><stop offset="1" stop-color="#8a978c"/></linearGradient></defs>' +
        '<rect width="240" height="120" fill="url(#cg-landslide)"/>' +
        '<g stroke="#a9bcd0" stroke-width="2" stroke-linecap="round" opacity=".7"><line x1="40" y1="8" x2="35" y2="20"/><line x1="100" y1="6" x2="95" y2="18"/><line x1="150" y1="10" x2="145" y2="22"/><line x1="200" y1="6" x2="195" y2="18"/></g>' +
        '<path d="M110 120 L168 40 Q196 20 240 26 L240 120 Z" fill="#6b7a3e"/>' +
        '<path d="M120 120 L176 46 Q198 30 240 36 L240 54 Q198 50 182 70 L150 120 Z" fill="#7c5a34"/>' +
        '<path d="M150 120 L182 70 Q198 50 240 54 L240 70 Q200 66 190 84 L168 120 Z" fill="#6e4d2b"/>' +
        '<circle cx="168" cy="86" r="7" fill="#4a3218"/><circle cx="150" cy="100" r="6" fill="#3a2a18"/><circle cx="182" cy="102" r="8" fill="#5c3f22"/>' +
        '<path d="M172 46 l-8 22 l6 8" fill="none" stroke="#3a2a18" stroke-width="1.6"/>' +
        '<rect x="24" y="72" width="52" height="36" fill="#e8c9a0"/><path d="M18 72 50 48 82 72 Z" fill="#c0533a"/><rect x="42" y="88" width="16" height="20" fill="#8a5a2c"/>' +
        '<rect y="104" width="240" height="16" fill="#5a5140"/>' +
        '</svg>';
    }
    if (id === 'earthquake') {
      return open +
        '<rect width="240" height="120" fill="#cfe8ff"/><rect y="86" width="240" height="34" fill="#c9a26a"/>' +
        '<circle cx="44" cy="26" r="13" fill="#fff" opacity=".75"/><circle cx="60" cy="30" r="10" fill="#fff" opacity=".75"/>' +
        '<rect x="84" y="58" width="52" height="28" fill="#e8c9a0"/><path d="M78 58 110 36 142 58 Z" fill="#e63946"/>' +
        '<rect x="100" y="70" width="14" height="16" fill="#8a5a2c"/><rect x="120" y="64" width="12" height="12" fill="#bfe3ff"/>' +
        '<polyline points="120,40 126,52 118,60 124,74" fill="none" stroke="#b23a48" stroke-width="2.5"/>' +
        '<rect x="170" y="64" width="40" height="22" fill="#b5793f"/><line x1="170" y1="75" x2="210" y2="75" stroke="#8a5a2c" stroke-width="2"/>' +
        '</svg>';
    }
    if (id === 'tsunami') {
      return open +
        '<defs><linearGradient id="cg-tsunami" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5ec2f0"/><stop offset="1" stop-color="#bfe9ff"/></linearGradient></defs>' +
        '<rect width="240" height="120" fill="url(#cg-tsunami)"/><rect y="92" width="240" height="28" fill="#e8d3a1"/>' +
        '<path d="M0 92 q40 -52 84 -18 q22 24 -12 44 q-52 14 -72 -6z" fill="#2e9bff"/><path d="M14 90 q30 -22 52 -6" fill="none" stroke="#fff" stroke-width="3" opacity=".7"/>' +
        '<rect x="178" y="44" width="9" height="50" rx="3" fill="#8a5a2c"/>' +
        '<path d="M182 44q-24-6-32 4M182 44q24-6 32 4M182 44q-8-22 4-28" stroke="#3fa36a" stroke-width="5" fill="none" stroke-linecap="round"/>' +
        '</svg>';
    }
    if (id === 'flood') {
      return open +
        '<rect width="240" height="120" fill="#2c4a78"/>' +
        '<g stroke="#9fc4ec" stroke-width="2" stroke-linecap="round"><line x1="40" y1="8" x2="34" y2="22"/><line x1="84" y1="4" x2="78" y2="18"/><line x1="200" y1="10" x2="194" y2="24"/><line x1="150" y1="6" x2="144" y2="20"/></g>' +
        '<rect x="86" y="46" width="64" height="40" fill="#e8c9a0"/><path d="M80 46 118 22 156 46 Z" fill="#118ab2"/>' +
        '<rect x="102" y="60" width="16" height="26" fill="#8a5a2c"/><rect x="128" y="56" width="14" height="14" fill="#bfe3ff"/>' +
        '<rect y="76" width="240" height="44" fill="#2e9bff" opacity=".85"/><path d="M0 80 q30 -8 60 0 t60 0 t60 0 t60 0" fill="none" stroke="#bfe9ff" stroke-width="2" opacity=".6"/>' +
        '</svg>';
    }
    if (id === 'fire') {
      return open +
        '<defs><linearGradient id="cg-fire" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a1408"/><stop offset="0.55" stop-color="#7a2e12"/><stop offset="1" stop-color="#a8541e"/></linearGradient></defs>' +
        '<rect width="240" height="120" fill="url(#cg-fire)"/>' +
        '<g fill="#46382f" opacity=".7"><circle cx="150" cy="22" r="16"/><circle cx="176" cy="16" r="12"/><circle cx="126" cy="18" r="11"/></g>' +
        pine(54,110,.78,false) +
        pine(120,112,1,true) + pine(162,108,1.18,true) + pine(202,112,.86,true) +
        '<ellipse cx="160" cy="116" rx="70" ry="12" fill="#ff5a22" opacity=".4"/>' +
        '<path d="M120 110q-9-18 4-27q-2 11 6 8q5-7 2-15q13 11 9 24q-2 9-11 9q-11 0-9-7z" fill="#ff7a2e"/>' +
        '<path d="M162 104q-11-22 5-33q-3 13 7 9q6-8 2-18q15 13 11 29q-2 10-13 10q-13 0-11-9z" fill="#ff8a3d"/><path d="M162 104q-5-12 5-18q-1 8 5 7" fill="#ffe39a"/>' +
        '<rect y="100" width="240" height="20" fill="#2c1c10"/>' +
        '</svg>';
    }
    if (id === 'volcano') {
      return open +
        '<defs><linearGradient id="cg-volcano" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a1808"/><stop offset="1" stop-color="#a3430f"/></linearGradient></defs>' +
        '<rect width="240" height="120" fill="url(#cg-volcano)"/><rect y="96" width="240" height="24" fill="#3e5a32"/>' +
        '<path d="M120 96 168 36 216 96 Z" fill="#4a3326"/><path d="M150 60 168 36 186 60 q-18 12 -36 0z" fill="#ff6b35"/>' +
        '<path d="M163 40q-4 26 0 56 M173 40q4 22 0 52" stroke="#ffb13d" stroke-width="3" fill="none"/>' +
        '<g fill="#7a6f6a" opacity=".82"><circle cx="150" cy="24" r="16"/><circle cx="180" cy="18" r="12"/></g>' +
        '</svg>';
    }
    if (id === 'tornado') {
      return open +
        '<defs><linearGradient id="cg-tornado" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2c343d"/><stop offset="0.55" stop-color="#49554d"/><stop offset="1" stop-color="#616d54"/></linearGradient></defs>' +
        '<rect width="240" height="120" fill="url(#cg-tornado)"/>' +
        '<g fill="#39434c"><ellipse cx="70" cy="18" rx="74" ry="20"/><ellipse cx="190" cy="14" rx="84" ry="22"/></g>' +
        '<rect y="100" width="240" height="20" fill="#4a5e3a"/>' +
        '<rect x="30" y="68" width="50" height="34" fill="#d9c39e"/><path d="M24 68 55 46 86 68 Z" fill="#7a4a32"/><rect x="46" y="84" width="14" height="18" fill="#5a3a22"/>' +
        '<path d="M150 28 C150 52 168 78 173 102 L185 102 C190 78 208 52 208 28 Z" fill="#8f9a95"/>' +
        '<path d="M185 102 C190 78 208 52 208 28 L197 28 C197 50 184 76 179 102 Z" fill="#525b54" opacity=".4"/>' +
        '<ellipse cx="179" cy="46" rx="26" ry="5" fill="#d2d8d4" opacity=".4"/><ellipse cx="179" cy="68" rx="18" ry="4" fill="#d2d8d4" opacity=".4"/><ellipse cx="179" cy="88" rx="11" ry="3" fill="#d2d8d4" opacity=".4"/>' +
        '<ellipse cx="179" cy="103" rx="32" ry="8" fill="#8a9088" opacity=".5"/>' +
        '<g stroke="#c2ccc6" stroke-width="2" stroke-linecap="round" opacity=".5"><line x1="40" y1="8" x2="34" y2="20"/><line x1="100" y1="6" x2="94" y2="18"/><line x1="225" y1="10" x2="219" y2="22"/></g>' +
        '</svg>';
    }
  }

  /* ═══ MASKOT SIAGA ═══ */
  function mascotSvg(cls){ return '<span class="mascot-wrap"><img class="'+(cls||'mascot')+'" src="assets/images/logo.png" alt="Logo"></span>'; }