import React, { Component } from 'react';
import { I18nContext } from './i18n';
import './Thanks.css';

export default class Thanks extends Component {
    static contextType = I18nContext;

    componentDidMount() {
        this.updateDocumentTitle();
    }

    componentDidUpdate() {
        this.updateDocumentTitle();
    }

    updateDocumentTitle() {
        const { t } = this.context;
        document.title = t('meta.thanksTitle');
    }


    getTags(tags, isRow) {
        
       return <div className={"tag-content " + ((isRow ?? true) ? "row" : "column")}>
        {
            tags.map(element => {
                return <span key={element}>{element}</span>
            })
        }        
       </div>
    }
    getCloumItems(items) {
        return <div className={"items-content"}>
        {
            items.map(element => {
                return <span key={element}>{element}</span>
            })
        }        
       </div>
    }
    render() {
        const { t } = this.context;
        let makers = ["@Haaozhang", "@leven"];
        let thanks = ["@一航", "@李文佳", "GG266", "@wenbin", "@李文佳", "GG266", "@wenbin","@wenbin", "@李文佳", "GG266"];
        let library = t('thanks.items.library');
        let others = t('thanks.items.others');

        return (
            <div className='body'>
                <div className='thanks-logo'>
                    <img src="https://lc-gluttony.s3.amazonaws.com/ZzwZfP9iPTCF/VNrFeB74j1CLQhvuRXYbscWWoSn0gKHG/thanks_logo.png"></img>
                    <text>TimeEcho</text>
                    <text>V1.01(1)</text>
                </div>

                <div className='section'>
                    <text>{t('thanks.sections.makers')}</text>
                    {this.getTags(makers)}
                </div>

                <div className='section'>
                    <text>{t('thanks.sections.acknowledgements')}</text>
                    {this.getTags(thanks)}
                </div>

                <div className='section'>
                    <text>{t('thanks.sections.libraries')}</text>
                    {this.getCloumItems(library)}
                </div>

                <div className='section'>
                    <text>{t('thanks.sections.others')}</text>
                    {this.getCloumItems(others)}
                </div>
            
            </div>

        );
    }
}
