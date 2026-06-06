// Shared nav & footer renderer
// Usage: call buildNav('home') and buildFooter() after DOM load

// Relative path to site root — works whether the repo is at / or a subpath
const _R = window.location.pathname.includes('/pages/') ? '..' : '.';

const NAV_ITEMS = [
  { key: 'home',      href: `${_R}/index.html`,          i18n: 'nav.home' },
  { key: 'about',     href: `${_R}/pages/about.html`,     i18n: 'nav.about' },
  { key: 'community', href: `${_R}/pages/community.html`, i18n: 'nav.community' },
  { key: 'shop',      href: `${_R}/pages/shop.html`,      i18n: 'nav.shop' },
  { key: 'freelance', href: `${_R}/pages/freelance.html`, i18n: 'nav.freelance' },
  { key: 'programs',  href: `${_R}/pages/programs.html`,  i18n: 'nav.programs' },
  { key: 'resume',    href: '#',                          i18n: 'nav.resume', locked: true },
];

function buildNav(activeKey) {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  const links = NAV_ITEMS.map(item => {
    const isActive = item.key === activeKey ? ' class="active"' : '';
    const badge = item.locked
      ? ` <span class="nav-badge">🔒</span>`
      : '';
    const onclick = item.locked
      ? ` onclick="openResumeModal(event)"` : '';
    return `<li><a href="${item.href}"${isActive}${onclick} data-i18n="${item.i18n}">${t(item.i18n)}${badge}</a></li>`;
  }).join('');

  const langBtns = ['en','zh-hant','zh-hans'].map(l => {
    const labels = { en:'EN', 'zh-hant':'繁', 'zh-hans':'简' };
    return `<button class="lang-btn${getLang()===l?' active':''}" data-lang="${l}" onclick="setLang('${l}')">${labels[l]}</button>`;
  }).join('');

  nav.innerHTML = `
    <a class="nav-logo" href="${_R}/index.html"><span class="accent">Space</span>Square</a>
    <button class="nav-toggle" onclick="toggleMobileNav()" aria-label="Toggle menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <div class="nav-menu">
      <ul class="nav-links">${links}</ul>
      <div class="nav-right">
        <button class="glass-toggle${getGlass()==='on'?' active':''}" onclick="toggleGlass()" aria-label="Toggle liquid glass effect" aria-pressed="${getGlass()==='on'}" title="Toggle liquid glass">
          <span class="glass-icon">🫧</span>
        </button>
        <button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle theme" title="Toggle light / dark">
          <span class="icon-moon">🌙</span><span class="icon-sun">☀️</span>
        </button>
        <button class="settings-toggle" onclick="openSettingsModal()" aria-label="${t('settings.title')}" title="${t('settings.title')}">⚙️</button>
        <div class="lang-switcher">${langBtns}</div>
      </div>
    </div>
  `;
}

// Theme: 'dark' (default) · 'light' · 'gold-dark' · 'gold-light' — persisted in localStorage
const THEMES = ['dark', 'light', 'gold-dark', 'gold-light'];
function applyTheme(theme) {
  // 'dark' is the base (no attribute); every other theme sets data-theme
  if (theme && theme !== 'dark' && THEMES.includes(theme)) {
    document.documentElement.setAttribute('data-theme', theme);
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}
function getTheme() {
  const v = localStorage.getItem('theme');
  return THEMES.includes(v) ? v : 'dark';
}
function setTheme(theme) {
  if (!THEMES.includes(theme)) return;
  localStorage.setItem('theme', theme);
  applyTheme(theme);
  document.dispatchEvent(new Event('themechange'));
}
// Nav 🌙/☀️ quick switch — toggles between dark and light only (unchanged behavior)
function toggleTheme() {
  const next = getTheme() === 'light' ? 'dark' : 'light';
  setTheme(next);
}
// Apply on script load — runs before initPage so paint is correct
applyTheme(getTheme());

// Reduce Motion: 'normal' (default) or 'reduce' — opt-in UI parameter
function applyMotion(mode) {
  if (mode === 'reduce') document.documentElement.setAttribute('data-motion', 'reduce');
  else document.documentElement.removeAttribute('data-motion');
}
function getMotion() {
  return localStorage.getItem('ss-motion') === 'reduce' ? 'reduce' : 'normal';
}
function setMotion(mode) {
  const next = mode === 'reduce' ? 'reduce' : 'normal';
  localStorage.setItem('ss-motion', next);
  applyMotion(next);
  document.dispatchEvent(new Event('motionchange'));
}
// Apply on script load — default normal (no override)
applyMotion(getMotion());

// Liquid glass: 'off' (default) or 'on' — opt-in effect, persisted in localStorage
function applyGlass(mode) {
  if (mode === 'on') document.documentElement.setAttribute('data-glass', 'on');
  else document.documentElement.removeAttribute('data-glass');
}
function getGlass() {
  return localStorage.getItem('ss-glass') === 'on' ? 'on' : 'off';
}
function toggleGlass() {
  const next = getGlass() === 'on' ? 'off' : 'on';
  localStorage.setItem('ss-glass', next);
  applyGlass(next);
  const btn = document.querySelector('.glass-toggle');
  if (btn) {
    btn.classList.toggle('active', next === 'on');
    btn.setAttribute('aria-pressed', next === 'on');
  }
  document.dispatchEvent(new Event('glasschange'));
}
// Apply on script load — default OFF, so nothing changes unless the user opts in
applyGlass(getGlass());

function toggleMobileNav() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  const isOpen = nav.classList.toggle('mobile-open');
  nav.querySelector('.nav-toggle')?.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

// Auto-close mobile nav when tapping outside or switching to desktop width
document.addEventListener('click', (e) => {
  const nav = document.getElementById('main-nav');
  if (!nav || !nav.classList.contains('mobile-open')) return;
  if (!nav.contains(e.target)) {
    nav.classList.remove('mobile-open');
    nav.querySelector('.nav-toggle')?.setAttribute('aria-expanded', 'false');
  }
});
window.addEventListener('resize', () => {
  const nav = document.getElementById('main-nav');
  if (nav && window.innerWidth > 768) nav.classList.remove('mobile-open');
});

function buildFooter() {
  const ft = document.getElementById('main-footer');
  if (!ft) return;
  ft.innerHTML = `
    <span data-i18n="footer.rights">${t('footer.rights')}</span>
    <div class="footer-links">
      <a href="mailto:chin52696411@gmail.com">Email</a>
      <a href="https://discord.gg/KjUsGBFYwF" target="_blank">Discord</a>
      <a href="https://www.youtube.com/channel/UChmwTSclAf-m1z5DemiakUQ" target="_blank">YouTube</a>
      <a href="https://github.com/SpaceSquare640" target="_blank" rel="noopener">GitHub</a>
    </div>
    <span data-i18n="footer.hk">${t('footer.hk')} 🇭🇰</span>
  `;
}

// Résumé TOTP gate — codes rotate every 30 s (Google Authenticator / Authy)
const TOTP_SECRET = 'HXDMVZJG3IHYGMBR5OBTCQYI6ZQXMZQN';

function _b32dec(s) {
  const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
  const bytes = [];
  let bits = 0, val = 0;
  for (const c of s.toUpperCase().replace(/\s|=+$/g, '')) {
    const i = alpha.indexOf(c); if (i < 0) continue;
    val = (val << 5) | i; bits += 5;
    if (bits >= 8) { bytes.push((val >>> (bits - 8)) & 0xff); bits -= 8; }
  }
  return new Uint8Array(bytes);
}

async function _totpCode(counter) {
  const key = await crypto.subtle.importKey(
    'raw', _b32dec(TOTP_SECRET), { name: 'HMAC', hash: 'SHA-1' }, false, ['sign']
  );
  const cb = new Uint8Array(8);
  let c = counter;
  for (let i = 7; i >= 0; i--) { cb[i] = c & 0xff; c = Math.floor(c / 256); }
  const h = new Uint8Array(await crypto.subtle.sign('HMAC', key, cb));
  const off = h[19] & 0xf;
  const code = (((h[off] & 0x7f) << 24) | (h[off+1] << 16) | (h[off+2] << 8) | h[off+3]) % 1e6;
  return String(code).padStart(6, '0');
}

async function verifyTOTP(input) {
  const t = Math.floor(Date.now() / 1000 / 30);
  for (const d of [-1, 0, 1]) if (input === await _totpCode(t + d)) return true;
  return false;
}

function openResumeModal(e) {
  if (e) e.preventDefault();
  document.getElementById('resume-modal')?.classList.add('open');
  setTimeout(() => document.getElementById('resume-pwd')?.focus(), 100);
}

function closeResumeModal() {
  document.getElementById('resume-modal')?.classList.remove('open');
  if (document.getElementById('resume-pwd'))
    document.getElementById('resume-pwd').value = '';
  document.getElementById('resume-error')?.classList.remove('show');
}

async function checkResumePwd() {
  const input = (document.getElementById('resume-pwd')?.value ?? '').trim();
  if (await verifyTOTP(input)) {
    closeResumeModal();
    window.location.href = `${_R}/pages/resume.html`;
  } else {
    document.getElementById('resume-error')?.classList.add('show');
    document.getElementById('resume-pwd')?.focus();
  }
}

function buildResumeModal() {
  const el = document.createElement('div');
  el.className = 'modal-overlay'; el.id = 'resume-modal';
  el.onclick = e => { if (e.target === el) closeResumeModal(); };
  el.innerHTML = `
    <div class="modal-box">
      <h3>🔒 Résumé — 2FA Required</h3>
      <p>Open your authenticator app and enter the 6-digit code.</p>
      <input class="modal-input" type="text" inputmode="numeric" maxlength="6"
        id="resume-pwd" placeholder="000000" autocomplete="one-time-code"
        onkeydown="if(event.key==='Enter')checkResumePwd()">
      <p class="modal-error" id="resume-error">Invalid code. Please try again.</p>
      <div class="modal-actions">
        <button class="btn btn-ghost" onclick="closeResumeModal()">Cancel</button>
        <button class="btn btn-primary" onclick="checkResumePwd()">Verify</button>
      </div>
    </div>`;
  document.body.appendChild(el);
}

/* ── SETTINGS MODAL ── reuses .modal-overlay / .modal-box infrastructure */
function buildSettingsModal() {
  if (document.getElementById('settings-modal')) return;
  const el = document.createElement('div');
  el.className = 'modal-overlay settings-modal';
  el.id = 'settings-modal';
  el.onclick = e => { if (e.target === el) closeSettingsModal(); };
  document.body.appendChild(el);
  renderSettingsModal();
}

function renderSettingsModal() {
  const el = document.getElementById('settings-modal');
  if (!el) return;
  const theme = getTheme();
  const glass = getGlass();
  const motion = getMotion();
  const lang = getLang();

  const themeOpts = [
    ['dark',       t('settings.themeDark')],
    ['light',      t('settings.themeLight')],
    ['gold-dark',  t('settings.themeGoldDark')],
    ['gold-light', t('settings.themeGoldLight')],
  ];
  const langOpts = [['en', 'EN'], ['zh-hant', '繁中'], ['zh-hans', '简中']];

  const themeBtns = themeOpts.map(([v, label]) =>
    `<button class="seg-btn${theme === v ? ' active' : ''}" onclick="setTheme('${v}'); renderSettingsModal();">${label}</button>`
  ).join('');
  const langBtns = langOpts.map(([v, label]) =>
    `<button class="seg-btn${lang === v ? ' active' : ''}" onclick="setLang('${v}'); renderSettingsModal();">${label}</button>`
  ).join('');

  el.innerHTML = `
    <div class="modal-box">
      <div class="settings-head">
        <h3>⚙️ ${t('settings.title')}</h3>
        <span class="settings-sub">${t('settings.subtitle')}</span>
      </div>

      <div class="settings-group">
        <span class="settings-label">${t('settings.theme')}</span>
        <div class="seg">${themeBtns}</div>
      </div>

      <div class="settings-group">
        <span class="settings-label">${t('settings.language')}</span>
        <div class="seg">${langBtns}</div>
      </div>

      <div class="settings-row">
        <div class="settings-row-text">
          <span class="settings-row-title">${t('settings.glass')}</span>
          <span class="settings-row-desc">${t('settings.glassDesc')}</span>
        </div>
        <div class="switch${glass === 'on' ? ' on' : ''}" role="switch" aria-checked="${glass === 'on'}"
          tabindex="0" onclick="toggleGlass(); renderSettingsModal();"
          onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleGlass();renderSettingsModal();}"></div>
      </div>

      <div class="settings-row">
        <div class="settings-row-text">
          <span class="settings-row-title">${t('settings.motion')}</span>
          <span class="settings-row-desc">${t('settings.motionDesc')}</span>
        </div>
        <div class="switch${motion === 'reduce' ? ' on' : ''}" role="switch" aria-checked="${motion === 'reduce'}"
          tabindex="0" onclick="setMotion(getMotion()==='reduce'?'normal':'reduce'); renderSettingsModal();"
          onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();setMotion(getMotion()==='reduce'?'normal':'reduce');renderSettingsModal();}"></div>
      </div>

      <button class="settings-reset" onclick="resetSettings()">${t('settings.reset')}</button>

      <div class="modal-actions">
        <button class="btn btn-primary" onclick="closeSettingsModal()">${t('settings.done')}</button>
      </div>
    </div>`;
}

function openSettingsModal(e) {
  if (e) e.preventDefault();
  renderSettingsModal();
  document.getElementById('settings-modal')?.classList.add('open');
}
function closeSettingsModal() {
  document.getElementById('settings-modal')?.classList.remove('open');
}
function resetSettings() {
  ['theme', 'ss-glass', 'ss-motion'].forEach(k => localStorage.removeItem(k));
  applyTheme('dark');
  applyGlass('off');
  applyMotion('normal');
  setLang('en'); // fires langchange → nav + settings re-render with defaults
  renderSettingsModal();
}

function buildScrollProgress() {
  if (document.querySelector('.scroll-progress')) return;
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.appendChild(bar);
  const update = () => {
    const h = document.documentElement;
    const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
    bar.style.width = (Math.max(0, Math.min(1, scrolled)) * 100) + '%';
  };
  document.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}

function initPage(activeKey) {
  initI18n();
  buildNav(activeKey);
  buildFooter();
  buildResumeModal();
  buildSettingsModal();
  buildScrollProgress();

  // Re-render nav/footer/settings on lang change
  document.addEventListener('langchange', () => {
    buildNav(activeKey);
    buildFooter();
    renderSettingsModal();
  });
}
