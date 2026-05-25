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
        <button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle theme" title="Toggle light / dark">
          <span class="icon-moon">🌙</span><span class="icon-sun">☀️</span>
        </button>
        <div class="lang-switcher">${langBtns}</div>
      </div>
    </div>
  `;
}

// Theme: 'dark' (default) or 'light' — persisted in localStorage
function applyTheme(theme) {
  if (theme === 'light') document.documentElement.setAttribute('data-theme', 'light');
  else document.documentElement.removeAttribute('data-theme');
}
function getTheme() {
  return localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
}
function toggleTheme() {
  const next = getTheme() === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', next);
  applyTheme(next);
  document.dispatchEvent(new Event('themechange'));
}
// Apply on script load — runs before initPage so paint is correct
applyTheme(getTheme());

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
      <a href="#" target="_blank">GitHub</a>
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
  buildScrollProgress();

  // Re-render nav/footer on lang change
  document.addEventListener('langchange', () => {
    buildNav(activeKey);
    buildFooter();
  });
}
