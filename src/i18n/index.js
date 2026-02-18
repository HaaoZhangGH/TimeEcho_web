import React, { createContext, useMemo, useState } from 'react';

const LANGUAGE_STORAGE_KEY = 'timeecho_lang';

export const LANGUAGE_OPTIONS = [
  { code: 'zh-Hans', label: '简体中文' },
  { code: 'en', label: 'English' },
  { code: 'zh-Hant', label: '繁体中文' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
  { code: 'fr', label: 'Français' },
];

const SUPPORTED_CODES = LANGUAGE_OPTIONS.map((language) => language.code);

const translations = {
  en: {
    meta: {
      homeTitle: 'TimeEcho',
      thanksTitle: 'Thanks',
    },
    header: {
      language: 'Language',
      backHome: 'Back',
    },
    home: {
      banner: {
        titleLine1: 'Track',
        titleLine2: 'Focus',
        titleLine3: ', See Tomorrow',
        subtitle:
          'Track focus, build focus habits, and enjoy focus as you become your ideal self.',
      },
      value: {
        title: 'Why track your time?',
        focus: {
          title: 'Improve Focus',
          desc: 'Breaking your time into clear modules helps you focus better.',
        },
        balance: {
          title: 'Work-Life Balance',
          desc: 'Set a stop line for work hours and protect your life rhythm.',
        },
        consistency: {
          title: 'Build Consistency',
          desc: 'When you log time on a habit, it becomes easier to keep going.',
        },
        self: {
          title: 'Know Yourself',
          desc: 'See where your time goes and understand yourself more clearly.',
        },
      },
      record: {
        title: 'Fast and Rich Logging',
        desc: 'Split time into focused modules and finish one before moving to the next.',
      },
      data: {
        title: 'Review and Control Your Time',
        desc: 'Use your logs to review patterns and make better decisions for tomorrow.',
      },
      footer: {
        downloadApp: 'Download App',
        userAgreement: 'User Agreement',
        privacyPolicy: 'Privacy Policy',
        contactUs: 'Contact Us',
        thanks: 'Thanks',
        slogan: 'Track focus, see tomorrow',
      },
    },
    thanks: {
      sections: {
        makers: 'Creators',
        acknowledgements: 'Special Thanks',
        libraries: 'Libraries',
        others: 'Others',
      },
      items: {
        library: [
          'MkRingProgressView (MIT License)',
          "Yuecai's sync codebase",
          'Lottie-ios (Apache License 2.0)',
          'Purchases (MIT License)',
        ],
        others: [
          'MkRingProgressView (MIT License)',
          "Yuecai's sync codebase",
          'Lottie-ios (Apache License 2.0)',
          'Purchases (MIT License)',
        ],
      },
    },
  },
  'zh-Hans': {
    meta: {
      homeTitle: 'TimeEcho',
      thanksTitle: '感谢',
    },
    header: {
      language: '语言',
      backHome: '返回',
    },
    home: {
      banner: {
        titleLine1: '记录',
        titleLine2: '专注',
        titleLine3: '，预见未来',
        subtitle: '记录专注、习惯专注、享受专注，成为理想的自己更近一步',
      },
      value: {
        title: '追踪时间能有什么用？',
        focus: {
          title: '提升专注力',
          desc: '尤其是将时间分为不同的各个模块',
        },
        balance: {
          title: '工作生活分开',
          desc: '给自己一个目标，工作多少小时就停止。找到工作与生活的平衡',
        },
        consistency: {
          title: '持续做某事',
          desc: '统计在某件事上花时间，就更容易坚持',
        },
        self: {
          title: '认识自我',
          desc: '知道自己的时间花在了哪里，从而更加了解自己',
        },
      },
      record: {
        title: '快速丰富的记录',
        desc: '尤其是将时间分为不同的各个模块，在完成之后再做别的事，将大大提升我们的专注力',
      },
      data: {
        title: '掌控回顾时间',
        desc: '尤其是将时间分为不同的各个模块，在完成之后再做别的事，将大大提升我们的专注力',
      },
      footer: {
        downloadApp: '下载App',
        userAgreement: '用户协议',
        privacyPolicy: '隐私政策',
        contactUs: '联系我们',
        thanks: '致谢',
        slogan: '记录专注，预见未来',
      },
    },
    thanks: {
      sections: {
        makers: '制作者',
        acknowledgements: '感谢',
        libraries: '代码库',
        others: '其他',
      },
      items: {
        library: [
          'MkRingProgressView (MIT 许可证)',
          'Yuecai.的同步代码库',
          'Lottie-ios (Apache License 2.0)',
          'Purchases (MIT 许可证)',
        ],
        others: [
          'MkRingProgressView (MIT 许可证)',
          'Yuecai.的同步代码库',
          'Lottie-ios (Apache License 2.0)',
          'Purchases (MIT 许可证)',
        ],
      },
    },
  },
  'zh-Hant': {
    meta: {
      homeTitle: 'TimeEcho',
      thanksTitle: '感謝',
    },
    header: {
      language: '語言',
      backHome: '返回',
    },
    home: {
      banner: {
        titleLine1: '記錄',
        titleLine2: '專注',
        titleLine3: '，預見未來',
        subtitle: '記錄專注、養成專注、享受專注，離理想的自己更近一步',
      },
      value: {
        title: '追蹤時間有什麼用？',
        focus: {
          title: '提升專注力',
          desc: '尤其是把時間切分為不同模組時效果更明顯',
        },
        balance: {
          title: '工作生活分開',
          desc: '設定工作時數上限，找到工作與生活的平衡',
        },
        consistency: {
          title: '持續做一件事',
          desc: '統計在某件事上的投入時間，更容易長期堅持',
        },
        self: {
          title: '認識自我',
          desc: '看見時間花在哪裡，從而更了解自己',
        },
      },
      record: {
        title: '快速且完整的記錄',
        desc: '把時間分成清晰模組，完成後再切換，能顯著提升專注力',
      },
      data: {
        title: '掌控並回顧時間',
        desc: '用記錄回顧時間模式，為下一步決策提供依據',
      },
      footer: {
        downloadApp: '下載App',
        userAgreement: '使用者協議',
        privacyPolicy: '隱私政策',
        contactUs: '聯絡我們',
        thanks: '致謝',
        slogan: '記錄專注，預見未來',
      },
    },
    thanks: {
      sections: {
        makers: '製作者',
        acknowledgements: '感謝',
        libraries: '程式庫',
        others: '其他',
      },
      items: {
        library: [
          'MkRingProgressView (MIT 授權)',
          'Yuecai. 同步程式庫',
          'Lottie-ios (Apache License 2.0)',
          'Purchases (MIT 授權)',
        ],
        others: [
          'MkRingProgressView (MIT 授權)',
          'Yuecai. 同步程式庫',
          'Lottie-ios (Apache License 2.0)',
          'Purchases (MIT 授權)',
        ],
      },
    },
  },
  ja: {
    meta: {
      homeTitle: 'TimeEcho',
      thanksTitle: '謝辞',
    },
    header: {
      language: '言語',
      backHome: '戻る',
    },
    home: {
      banner: {
        titleLine1: '記録',
        titleLine2: '集中',
        titleLine3: '、未来を見通す',
        subtitle:
          '集中を記録し、集中を習慣化し、理想の自分に一歩ずつ近づきましょう。',
      },
      value: {
        title: '時間を追跡するメリットは？',
        focus: {
          title: '集中力を高める',
          desc: '時間を明確なブロックに分けるほど集中しやすくなります。',
        },
        balance: {
          title: '仕事と生活を分ける',
          desc: '労働時間の上限を決めて、生活とのバランスを守れます。',
        },
        consistency: {
          title: '継続しやすくなる',
          desc: '取り組みに使った時間を見える化すると継続しやすくなります。',
        },
        self: {
          title: '自分を知る',
          desc: '時間の使い方を把握し、自分をより深く理解できます。',
        },
      },
      record: {
        title: '素早く柔軟な記録',
        desc: '時間をモジュール化し、1つ終えてから次へ進むことで集中力が上がります。',
      },
      data: {
        title: '時間を振り返り管理する',
        desc: '記録を振り返り、明日の意思決定をデータで支えます。',
      },
      footer: {
        downloadApp: 'アプリをダウンロード',
        userAgreement: '利用規約',
        privacyPolicy: 'プライバシーポリシー',
        contactUs: 'お問い合わせ',
        thanks: '謝辞',
        slogan: '集中を記録し、未来を見通す',
      },
    },
    thanks: {
      sections: {
        makers: '製作者',
        acknowledgements: '謝辞',
        libraries: 'ライブラリ',
        others: 'その他',
      },
      items: {
        library: [
          'MkRingProgressView (MIT License)',
          'Yuecai の同期コードベース',
          'Lottie-ios (Apache License 2.0)',
          'Purchases (MIT License)',
        ],
        others: [
          'MkRingProgressView (MIT License)',
          'Yuecai の同期コードベース',
          'Lottie-ios (Apache License 2.0)',
          'Purchases (MIT License)',
        ],
      },
    },
  },
  ko: {
    meta: {
      homeTitle: 'TimeEcho',
      thanksTitle: '감사',
    },
    header: {
      language: '언어',
      backHome: '뒤로',
    },
    home: {
      banner: {
        titleLine1: '기록',
        titleLine2: '집중',
        titleLine3: ', 미래를 예측하다',
        subtitle:
          '집중을 기록하고 습관으로 만들며, 더 나은 나에게 한 걸음 더 가까워지세요.',
      },
      value: {
        title: '시간 추적의 가치는 무엇일까요?',
        focus: {
          title: '집중력 향상',
          desc: '시간을 명확한 블록으로 나누면 집중력이 크게 올라갑니다.',
        },
        balance: {
          title: '일과 삶의 분리',
          desc: '업무 시간을 정해두고 일상과의 균형을 지킬 수 있습니다.',
        },
        consistency: {
          title: '꾸준함 만들기',
          desc: '한 활동에 쓴 시간을 기록하면 지속하기가 더 쉬워집니다.',
        },
        self: {
          title: '자기 이해',
          desc: '시간이 어디에 쓰이는지 보며 자신을 더 잘 이해할 수 있습니다.',
        },
      },
      record: {
        title: '빠르고 풍부한 기록',
        desc: '시간을 모듈로 나누고 하나씩 완료하면 집중력이 높아집니다.',
      },
      data: {
        title: '시간 회고와 관리',
        desc: '기록을 바탕으로 패턴을 돌아보고 더 나은 결정을 내리세요.',
      },
      footer: {
        downloadApp: '앱 다운로드',
        userAgreement: '이용약관',
        privacyPolicy: '개인정보 처리방침',
        contactUs: '문의하기',
        thanks: '감사',
        slogan: '집중을 기록하고, 미래를 예측하다',
      },
    },
    thanks: {
      sections: {
        makers: '제작자',
        acknowledgements: '감사',
        libraries: '라이브러리',
        others: '기타',
      },
      items: {
        library: [
          'MkRingProgressView (MIT License)',
          'Yuecai 동기화 코드베이스',
          'Lottie-ios (Apache License 2.0)',
          'Purchases (MIT License)',
        ],
        others: [
          'MkRingProgressView (MIT License)',
          'Yuecai 동기화 코드베이스',
          'Lottie-ios (Apache License 2.0)',
          'Purchases (MIT License)',
        ],
      },
    },
  },
  fr: {
    meta: {
      homeTitle: 'TimeEcho',
      thanksTitle: 'Remerciements',
    },
    header: {
      language: 'Langue',
      backHome: 'Retour',
    },
    home: {
      banner: {
        titleLine1: 'Noter',
        titleLine2: 'Se concentrer',
        titleLine3: ', anticiper demain',
        subtitle:
          "Suivez votre concentration, créez de bonnes habitudes et rapprochez-vous de votre version idéale.",
      },
      value: {
        title: 'Pourquoi suivre votre temps ?',
        focus: {
          title: 'Améliorer la concentration',
          desc: 'Découper le temps en blocs clairs aide à rester concentré.',
        },
        balance: {
          title: 'Séparer travail et vie',
          desc: 'Fixez une limite horaire de travail pour préserver votre équilibre.',
        },
        consistency: {
          title: 'Rester constant',
          desc: "Mesurer le temps passé sur une habitude aide à la maintenir dans la durée.",
        },
        self: {
          title: 'Mieux se connaître',
          desc: 'Comprenez où va votre temps pour mieux vous comprendre vous-même.',
        },
      },
      record: {
        title: 'Un suivi rapide et riche',
        desc: 'Travaillez par modules de temps et terminez-en un avant de passer au suivant.',
      },
      data: {
        title: 'Revoir et piloter votre temps',
        desc: 'Analysez vos enregistrements pour décider plus justement du lendemain.',
      },
      footer: {
        downloadApp: "Télécharger l'app",
        userAgreement: "Conditions d'utilisation",
        privacyPolicy: 'Politique de confidentialité',
        contactUs: 'Nous contacter',
        thanks: 'Remerciements',
        slogan: 'Suivre la concentration, anticiper demain',
      },
    },
    thanks: {
      sections: {
        makers: 'Créateurs',
        acknowledgements: 'Remerciements',
        libraries: 'Bibliothèques',
        others: 'Autres',
      },
      items: {
        library: [
          'MkRingProgressView (Licence MIT)',
          'Base de code de synchronisation Yuecai',
          'Lottie-ios (Apache License 2.0)',
          'Purchases (Licence MIT)',
        ],
        others: [
          'MkRingProgressView (Licence MIT)',
          'Base de code de synchronisation Yuecai',
          'Lottie-ios (Apache License 2.0)',
          'Purchases (Licence MIT)',
        ],
      },
    },
  },
};

const legalLinks = {
  userAgreement: {
    en: 'https://lovetime.feishu.cn/docx/J47pdtc1GoeXizxkhptc4vfkneL',
    'zh-Hans': 'https://lovetime.feishu.cn/docx/J47pdtc1GoeXizxkhptc4vfkneL',
    'zh-Hant': 'https://lovetime.feishu.cn/docx/J47pdtc1GoeXizxkhptc4vfkneL',
    ja: 'https://lovetime.feishu.cn/docx/J47pdtc1GoeXizxkhptc4vfkneL',
    ko: 'https://lovetime.feishu.cn/docx/J47pdtc1GoeXizxkhptc4vfkneL',
    fr: 'https://lovetime.feishu.cn/docx/J47pdtc1GoeXizxkhptc4vfkneL',
  },
  privacyPolicy: {
    en: 'https://lovetime.feishu.cn/docx/BlHNd5QdCogY8KxbEV4cNlLEnYb',
    'zh-Hans': 'https://lovetime.feishu.cn/docx/BlHNd5QdCogY8KxbEV4cNlLEnYb',
    'zh-Hant': 'https://lovetime.feishu.cn/docx/BlHNd5QdCogY8KxbEV4cNlLEnYb',
    ja: 'https://lovetime.feishu.cn/docx/BlHNd5QdCogY8KxbEV4cNlLEnYb',
    ko: 'https://lovetime.feishu.cn/docx/BlHNd5QdCogY8KxbEV4cNlLEnYb',
    fr: 'https://lovetime.feishu.cn/docx/BlHNd5QdCogY8KxbEV4cNlLEnYb',
  },
};

function getObjectValueByPath(object, path) {
  return path.split('.').reduce((current, key) => {
    if (current && Object.prototype.hasOwnProperty.call(current, key)) {
      return current[key];
    }
    return undefined;
  }, object);
}

function normalizeBrowserLanguage(languageTag) {
  if (!languageTag) {
    return null;
  }

  const tag = languageTag.toLowerCase();

  if (tag.startsWith('zh')) {
    if (
      tag.includes('hant') ||
      tag.includes('-tw') ||
      tag.includes('-hk') ||
      tag.includes('-mo')
    ) {
      return 'zh-Hant';
    }

    return 'zh-Hans';
  }

  if (tag.startsWith('en')) {
    return 'en';
  }

  if (tag.startsWith('ja')) {
    return 'ja';
  }

  if (tag.startsWith('ko')) {
    return 'ko';
  }

  if (tag.startsWith('fr')) {
    return 'fr';
  }

  return null;
}

function detectInitialLanguage() {
  if (typeof window !== 'undefined') {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (storedLanguage && SUPPORTED_CODES.includes(storedLanguage)) {
      return storedLanguage;
    }
  }

  if (typeof navigator !== 'undefined') {
    const browserLanguages = navigator.languages && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language];

    for (let index = 0; index < browserLanguages.length; index += 1) {
      const matchedLanguage = normalizeBrowserLanguage(browserLanguages[index]);
      if (matchedLanguage && SUPPORTED_CODES.includes(matchedLanguage)) {
        return matchedLanguage;
      }
    }
  }

  return 'en';
}

const defaultLang = 'en';

function getTranslator(lang) {
  return (path) => {
    const selected = getObjectValueByPath(translations[lang], path);
    if (selected !== undefined) {
      return selected;
    }

    const fallback = getObjectValueByPath(translations[defaultLang], path);
    if (fallback !== undefined) {
      return fallback;
    }

    return path;
  };
}

function getLocalizedLinks(lang) {
  return {
    userAgreement: legalLinks.userAgreement[lang] || legalLinks.userAgreement[defaultLang],
    privacyPolicy: legalLinks.privacyPolicy[lang] || legalLinks.privacyPolicy[defaultLang],
    contact: 'mailto:solovetime@163.com',
  };
}

const defaultContextValue = {
  lang: defaultLang,
  languages: LANGUAGE_OPTIONS,
  setLang: () => {},
  t: (path) => path,
  links: getLocalizedLinks(defaultLang),
};

export const I18nContext = createContext(defaultContextValue);

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(detectInitialLanguage());

  const setLang = (nextLang) => {
    if (!SUPPORTED_CODES.includes(nextLang)) {
      return;
    }

    setLangState(nextLang);

    if (typeof window !== 'undefined') {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLang);
    }
  };

  const contextValue = useMemo(
    () => ({
      lang,
      languages: LANGUAGE_OPTIONS,
      setLang,
      t: getTranslator(lang),
      links: getLocalizedLinks(lang),
    }),
    [lang]
  );

  return <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>;
}
