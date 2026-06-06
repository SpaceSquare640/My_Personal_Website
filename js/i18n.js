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
    settings: {
      title: 'Settings',
      subtitle: 'Customize how this site looks and feels. Your choices are saved on this device.',
      theme: 'Theme',
      themeDark: 'Dark',
      themeLight: 'Light',
      themeGoldDark: 'Gold · Dark',
      themeGoldLight: 'Gold · Light',
      language: 'Language',
      glass: 'Liquid Glass',
      glassDesc: 'Frosted translucent surfaces.',
      motion: 'Reduce Motion',
      motionDesc: 'Minimize animations and transitions.',
      reset: 'Reset to defaults',
      done: 'Done',
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
    settings: {
      title: '設定',
      subtitle: '自訂本網站的外觀與體驗。您的選擇會儲存在此裝置。',
      theme: '主題',
      themeDark: '深色',
      themeLight: '淺色',
      themeGoldDark: '金銀 · 深',
      themeGoldLight: '金銀 · 淺',
      language: '語言',
      glass: '液態玻璃',
      glassDesc: '霧面半透明介面。',
      motion: '減少動態效果',
      motionDesc: '降低動畫與轉場效果。',
      reset: '回復預設值',
      done: '完成',
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
    settings: {
      title: '设置',
      subtitle: '自定义本网站的外观与体验。您的选择会保存在此设备。',
      theme: '主题',
      themeDark: '深色',
      themeLight: '浅色',
      themeGoldDark: '金银 · 深',
      themeGoldLight: '金银 · 浅',
      language: '语言',
      glass: '液态玻璃',
      glassDesc: '雾面半透明界面。',
      motion: '减少动态效果',
      motionDesc: '降低动画与过渡效果。',
      reset: '恢复默认值',
      done: '完成',
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
