import './Home.css';
import React, { Component } from 'react';
import { I18nContext } from './i18n';

export default class Home extends Component {
  static contextType = I18nContext;

  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.state = { isSmall: false };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    this.updateDocumentTitle();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentDidUpdate() {
    this.updateDocumentTitle();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateDocumentTitle() {
    const { t } = this.context;
    document.title = t('meta.homeTitle');
  }

  updateWindowDimensions() {
    this.setState({ isSmall: window.innerWidth <= 550 });
  }

  handleLanguageChange(event) {
    this.context.setLang(event.target.value);
  }

  downloadApp() {
    window.location.href = "https://ad2ed2b.umindex.com";
  }

  clickProtocol(type) {
    const { links } = this.context;

    if (type === 'userAgreement') {
      window.location.hash = '/user-agreement';
    } else if (type === 'privacyPolicy') {
      window.location.hash = '/privacy-policy';
    } else if (type === 'contact') {
      window.open(links.contact);
    }
  }

  render() {
    const { t, lang, languages } = this.context;
    const isSmall = this.state.isSmall;

    let valueItems;
    if (isSmall) {
      valueItems = <div className='value-container'>
        <text className={("sh1")}>{t('home.value.title')}</text>
        <div className='value-items small-values'>
          <div className='value-item'>
            <img src="https://lc-gluttony.s3.amazonaws.com/ZzwZfP9iPTCF/dhVld6WdL4TMMvCRJsrILeL4rKQqwJFW/value1.png"></img>
            <text className={("sh2")}>{t('home.value.focus.title')}</text>
            <text className='sh3'>{t('home.value.focus.desc')}</text>
          </div>
          <div className='value-item'>
            <img src="https://lc-gluttony.s3.amazonaws.com/ZzwZfP9iPTCF/0JK2D9beVGTHIhqQFIum1RDzqRhfGUsy/value2.png"></img>
            <text className='sh2'>{t('home.value.balance.title')}</text>
            <text className='sh3'>{t('home.value.balance.desc')}</text>
          </div>
        </div>
        <div className='value-items small-values'>
          <div className='value-item'>
            <img src="https://lc-gluttony.s3.amazonaws.com/ZzwZfP9iPTCF/1lz5nFiWXoGTy8AttmgMPblcivUd7IxR/value3.png"></img>
            <text className='sh2'>{t('home.value.consistency.title')}</text>
            <text className='sh3'>{t('home.value.consistency.desc')}</text>
          </div>

          <div className={['value-item']}>
            <img src="https://lc-gluttony.s3.amazonaws.com/ZzwZfP9iPTCF/M0pDHiXaTeDqiw9QdQgn39MqL38LRTHY/value4.png"></img>
            <text className='sh2'>{t('home.value.self.title')}</text>
            <text className='sh3'>{t('home.value.self.desc')}</text>
          </div>
        </div>
        <div className='value-line'></div>
      </div>
    } else {
      valueItems = <div className='value-container'>
        <text className="h1">{t('home.value.title')}</text>
        <div className='value-items'>
          <div className='value-item'>
          <img src="https://lc-gluttony.s3.amazonaws.com/ZzwZfP9iPTCF/dhVld6WdL4TMMvCRJsrILeL4rKQqwJFW/value1.png"></img>
            <text className="h2">{t('home.value.focus.title')}</text>
            <text className="h3">{t('home.value.focus.desc')}</text>
          </div>
          <div className='value-item'>
          <img src="https://lc-gluttony.s3.amazonaws.com/ZzwZfP9iPTCF/0JK2D9beVGTHIhqQFIum1RDzqRhfGUsy/value2.png"></img>
            <text className='h2'>{t('home.value.balance.title')}</text>
            <text className='h3'>{t('home.value.balance.desc')}</text>
          </div>
          <div className='value-item'>
          <img src="https://lc-gluttony.s3.amazonaws.com/ZzwZfP9iPTCF/1lz5nFiWXoGTy8AttmgMPblcivUd7IxR/value3.png"></img>
            <text className='h2'>{t('home.value.consistency.title')}</text>
            <text className='h3'>{t('home.value.consistency.desc')}</text>
          </div>

          <div className={['value-item']}>
          <img src="https://lc-gluttony.s3.amazonaws.com/ZzwZfP9iPTCF/M0pDHiXaTeDqiw9QdQgn39MqL38LRTHY/value4.png"></img>
            <text className='h2'>{t('home.value.self.title')}</text>
            <text className='h3'>{t('home.value.self.desc')}</text>
          </div>
        </div>
        <div className='value-line'></div>
      </div>
    }
    return (
      <div className="App">
        <div className="Header">
          <div className='logo'>
            <img src="https://lc-gluttony.s3.amazonaws.com/ZzwZfP9iPTCF/dI7LoXp1dbQbVYs18ddCE3AxbrSLvR7H/header_logo.png"></img>
            <text>TimeECho</text>
          </div>
          <div className='language-switcher'>
            <select
              className='language-select'
              value={lang}
              onChange={this.handleLanguageChange}
              aria-label={t('header.language')}
            >
              {languages.map((language) => (
                <option key={language.code} value={language.code}>
                  {language.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='Banner'>

          <div className={'Banner-Content ' + (isSmall ? "Banner-Small-Content" : "")}>
            <div className={"Banner-Content-Title " + (isSmall ? "Banner-Small-Title" : "")}>
              <text>{t('home.banner.titleLine1')}</text>
              <text>{t('home.banner.titleLine2')}</text>
              <text>{t('home.banner.titleLine3')}</text>
            </div>
            <text>
              {t('home.banner.subtitle')}
            </text>
          </div>
          <div className={'Banner-App ' + (isSmall ? "small-app" : "")}></div>



        </div>

        {valueItems}

        <div className={'record-container '  + (isSmall ? "small-container" : "")}>
          <text className={(isSmall ? "sh1" : "h1")}>{t('home.record.title')}</text>
          <text className={(isSmall ? "sh3" : "h3")}>{t('home.record.desc')}</text>
          <img src="https://lc-gluttony.s3.amazonaws.com/ZzwZfP9iPTCF/NqJAV8aDmwn92jVltYw5ncmXhUE0GXBg/record.png"></img>
        </div>

        <div className={'data-container ' + (isSmall ? "small-container" : "")}>
          <text  className={(isSmall ? "sh1" : "h1")}>{t('home.data.title')}</text>
          <text className={(isSmall ? "sh3" : "h3")}>{t('home.data.desc')}</text>
          <img src="https://lc-gluttony.s3.amazonaws.com/ZzwZfP9iPTCF/Dk9aHyvOW9X6DifbVz83eWIr6yGLJHG0/data.png"></img>
        </div>
        <div className='footer'>
          <img src="https://lc-gluttony.s3.amazonaws.com/ZzwZfP9iPTCF/pl0RnvJKpLKo8VLe8iLYOn1utVkJ2mfa/appStore.png" onClick={() => this.downloadApp()}></img>
          
          <div className='protocol'>
            <text onClick={() => this.clickProtocol('userAgreement')}>
              {t('home.footer.userAgreement')}
            </text>
            <text onClick={() => this.clickProtocol('privacyPolicy')}>
              {t('home.footer.privacyPolicy')}
            </text>
            <text onClick={() => this.clickProtocol('contact')}>
              {t('home.footer.contactUs')}
            </text>
            <text onClick={() => this.downloadApp()}>
              {t('home.footer.downloadApp')}
            </text>
          </div>
          <img src="https://lc-gluttony.s3.amazonaws.com/ZzwZfP9iPTCF/dI7LoXp1dbQbVYs18ddCE3AxbrSLvR7H/header_logo.png"></img>
          <text>
            {t('home.footer.slogan')}
          </text>

          
          <div className='footer-line'></div>
          <img className='light-logo' src="https://lc-gluttony.s3.amazonaws.com/ZzwZfP9iPTCF/PQqanNODRM4f1PecFkqANIrFForeUgvX/light_logo.png"></img>

        </div>


      </div>
    );
  }

}
