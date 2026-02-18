import React, { useContext, useEffect } from 'react';
import { I18nContext } from './i18n';
import { Link } from 'react-router-dom';
import LegalLanguageSwitcher from './LegalLanguageSwitcher';
import { userAgreementContent } from './legalContent';
import './LegalPage.css';

export default function UserAgreement() {
  const { lang, t } = useContext(I18nContext);
  const content = userAgreementContent[lang] || userAgreementContent.en;

  useEffect(() => {
    document.title = `${content.title} - TimeEcho`;
  }, [content.title]);

  return (
    <div className='legal-page'>
      <div className='legal-toolbar'>
        <Link to='/' className='legal-back-home' aria-label={t('header.backHome')}>
          {t('header.backHome')}
        </Link>
        <LegalLanguageSwitcher />
      </div>
      <article className='legal-content'>
        <h1>{content.title}</h1>
        <p className='legal-updated'>{content.updated}</p>
        <div dangerouslySetInnerHTML={{ __html: content.html }} />
      </article>
    </div>
  );
}
