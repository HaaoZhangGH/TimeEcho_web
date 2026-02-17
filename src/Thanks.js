import React, { Component } from 'react';
import './Thanks.css'
export default class Thanks extends Component {
    componentDidMount() {
        document.title = "感谢"
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
        let makers = ["@Haaozhang", "@leven"];
        let thanks = ["@一航", "@李文佳", "GG266", "@wenbin", "@李文佳", "GG266", "@wenbin","@wenbin", "@李文佳", "GG266"]
        let library = ["MkRingProgressView (MIT 许可证)", "Yuecai.的同步代码库", "Lottie-ios ( Apache License 2.0 )","Purchases ( MIT 许可证)"];
        let others = ["MkRingProgressView (MIT 许可证)", "Yuecai.的同步代码库", "Lottie-ios ( Apache License 2.0 )","Purchases ( MIT 许可证)"];

        return (
            <div className='body'>
                <div className='thanks-logo'>
                    <img src="https://lc-gluttony.s3.amazonaws.com/ZzwZfP9iPTCF/VNrFeB74j1CLQhvuRXYbscWWoSn0gKHG/thanks_logo.png"></img>
                    <text>时间印迹</text>
                    <text>V1.01(1)</text>
                </div>

                <div className='section'>
                    <text>制作者</text>
                    {this.getTags(makers)}
                </div>

                <div className='section'>
                    <text>感谢</text>
                    {this.getTags(thanks)}
                </div>

                <div className='section'>
                    <text>代码库</text>
                    {this.getCloumItems(library)}
                </div>

                <div className='section'>
                    <text>其他</text>
                    {this.getCloumItems(others)}
                </div>
            
            </div>

        );
    }
}