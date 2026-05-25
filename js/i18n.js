const LANG_KEY = 'ss-lang';

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      community: 'Community',
      shop: 'Shop',
      freelance: 'Freelance',
      programs: 'Programs',
      resume: 'Résumé',
    },
    footer: {
      rights: '© 2026 SpaceSquare. All rights reserved.',
      hk: 'Made in Hong Kong',
    },
  },
  'zh-hant': {
    nav: {
      home: '首頁',
      about: '關於本站',
      community: '社群',
      shop: '網店',
      freelance: '接案服務',
      programs: '我的程式',
      resume: '履歷',
    },
    footer: {
      rights: '© 2026 SpaceSquare。保留所有權利。',
      hk: '香港製作',
    },
  },
  'zh-hans': {
    nav: {
      home: '首页',
      about: '关于本站',
      community: '社群',
      shop: '网店',
      freelance: '接案服务',
      programs: '我的程序',
      resume: '简历',
    },
    footer: {
      rights: '© 2026 SpaceSquare。保留所有权利。',
      hk: '香港制作',
    },
  },
};

function getLang() {
  return localStorage.getItem(LANG_KEY) || 'en';
}

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  applyLang(lang);
}

function t(path) {
  const lang = getLang();
  const keys = path.split('.');
  let val = translations[lang];
  for (const k of keys) {
    val = val?.[k];
  }
  return val ?? path;
}

function applyLang(lang) {
  // Update lang attribute
  document.documentElement.lang =
    lang === 'zh-hant' ? 'zh-Hant' :
    lang === 'zh-hans' ? 'zh-Hans' : 'en';

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val) el.textContent = val;
  });

  // Update active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Fire custom event for page-specific translations
  document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
}

function initI18n() {
  const lang = getLang();
  applyLang(lang);
}
