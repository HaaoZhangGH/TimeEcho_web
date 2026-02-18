import React, { useContext } from 'react';
import { I18nContext } from './i18n';

export default function LegalLanguageSwitcher() {
  const { lang, languages, setLang, t } = useContext(I18nContext);

  return (
    <div className='legal-language-switcher'>
      <select
        className='legal-language-select'
        value={lang}
        onChange={(event) => setLang(event.target.value)}
        aria-label={t('header.language')}
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.label}
          </option>
        ))}
      </select>
    </div>
  );
}
