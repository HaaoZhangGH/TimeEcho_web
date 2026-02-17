import './Home.css';
import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.state = { isSmall: false };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    document.title = "时间印迹"
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    console.log(window.innerWidth)
    this.setState({ isSmall: window.innerWidth <= 550 });
  }

  downloadApp() {
    window.location.href = "https://ad2ed2b.umindex.com";
  }

  clickProtocol(type) {
    if (type == 1 ) {
      window.open("https://lovetime.feishu.cn/docx/J47pdtc1GoeXizxkhptc4vfkneL")
      // https://lovetime.feishu.cn/docx/BlHNd5QdCogY8KxbEV4cNlLEnYb
      // window.location.href = "https://lovetime.feishu.cn/docx/J47pdtc1GoeXizxkhptc4vfkneL";
    } else if (type == 2) {
      window.open("https://lovetime.feishu.cn/docx/BlHNd5QdCogY8KxbEV4cNlLEnYb")
    } else if (type == 3) {
      window.open("mailto:solovetime@163.com")
    }
  }

  render() {
    let isSmall = this.state.isSmall;

    let valueItems;
    if (this.state.isSmall) {
      valueItems = <div className='value-container'>
        <text className={("sh1")}>追踪时间能有什么用？</text>
        <div className='value-items small-values'>
          <div className='value-item'>
            <img src="https://lc-gluttony.s3.amazonaws.com/ZzwZfP9iPTCF/dhVld6WdL4TMMvCRJsrILeL4rKQqwJFW/value1.png"></img>
            <text className={("sh2")}>提升专注力</text>
            <text className='sh3'>尤其是将时间分为不同的各个模块</text>
          </div>
          <div className='value-item'>
            <img src="https://lc-gluttony.s3.amazonaws.com/ZzwZfP9iPTCF/0JK2D9beVGTHIhqQFIum1RDzqRhfGUsy/value2.png"></img>
            <text className='sh2'>工作生活分开</text>
            <text className='sh3'>给自己一个目标，工作多少小时就停止。找到工作与生活的平衡</text>
          </div>
        </div>
        <div className='value-items small-values'>
          <div className='value-item'>
            <img src="https://lc-gluttony.s3.amazonaws.com/ZzwZfP9iPTCF/1lz5nFiWXoGTy8AttmgMPblcivUd7IxR/value3.png"></img>
            <text className='sh2'>持续做某事</text>
            <text className='sh3'>统计在某件事上花时间，就更容易坚持</text>
          </div>

          <div className={['value-item']}>
            <img src="https://lc-gluttony.s3.amazonaws.com/ZzwZfP9iPTCF/M0pDHiXaTeDqiw9QdQgn39MqL38LRTHY/value4.png"></img>
            <text className='sh2'>认识自我</text>
            <text className='sh3'>知道自己的时间花在了哪里，从而更加了解自己</text>
          </div>
        </div>
        <div className='value-line'></div>
      </div>
    } else {
      valueItems = <div className='value-container'>
        <text className="h1">追踪时间能有什么用？</text>
        <div className='value-items'>
          <div className='value-item'>
          <img src="https://lc-gluttony.s3.amazonaws.com/ZzwZfP9iPTCF/dhVld6WdL4TMMvCRJsrILeL4rKQqwJFW/value1.png"></img>
            <text className="h2">提升专注力</text>
            <text className="h3">尤其是将时间分为不同的各个模块</text>
          </div>
          <div className='value-item'>
          <img src="https://lc-gluttony.s3.amazonaws.com/ZzwZfP9iPTCF/0JK2D9beVGTHIhqQFIum1RDzqRhfGUsy/value2.png"></img>
            <text className='h2'>工作生活分开</text>
            <text className='h3'>给自己一个目标，工作多少小时就停止。找到工作与生活的平衡</text>
          </div>
          <div className='value-item'>
          <img src="https://lc-gluttony.s3.amazonaws.com/ZzwZfP9iPTCF/1lz5nFiWXoGTy8AttmgMPblcivUd7IxR/value3.png"></img>
            <text className='h2'>持续做某事</text>
            <text className='h3'>统计在某件事上花时间，就更容易坚持</text>
          </div>

          <div className={['value-item']}>
          <img src="https://lc-gluttony.s3.amazonaws.com/ZzwZfP9iPTCF/M0pDHiXaTeDqiw9QdQgn39MqL38LRTHY/value4.png"></img>
            <text className='h2'>认识自我</text>
            <text className='h3'>知道自己的时间花在了哪里，从而更加了解自己</text>
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
            <text>时间印迹</text>
          </div>

          <div className='download' onClick={() => this.downloadApp()}>
            <text>下载App</text>
          </div>
        </div>
        <div className='Banner'>

          <div className={'Banner-Content ' + (isSmall ? "Banner-Small-Content" : "")}>
            <div className={"Banner-Content-Title " + (isSmall ? "Banner-Small-Title" : "")}>
              <text>记录</text>
              <text>专注</text>
              <text>，预见未来</text>
            </div>
            <text>
              记录专注、习惯专注、享受专注，成为理想的自己更近一步
            </text>
          </div>
          <div className={'Banner-App ' + (isSmall ? "small-app" : "")}></div>



        </div>

        {valueItems}

        <div className={'record-container '  + (isSmall ? "small-container" : "")}>
          <text className={(isSmall ? "sh1" : "h1")}>快速丰富的记录</text>
          <text className={(isSmall ? "sh3" : "h3")}>尤其是将时间分为不同的各个模块，在完成之后再做别的事，将大大提升我们的专注力</text>
          <img src="https://lc-gluttony.s3.amazonaws.com/ZzwZfP9iPTCF/NqJAV8aDmwn92jVltYw5ncmXhUE0GXBg/record.png"></img>
        </div>

        <div className={'data-container ' + (isSmall ? "small-container" : "")}>
          <text  className={(isSmall ? "sh1" : "h1")}>掌控回顾时间</text>
          <text className={(isSmall ? "sh3" : "h3")}> 尤其是将时间分为不同的各个模块，在完成之后再做别的事，将大大提升我们的专注力</text>
          <img src="https://lc-gluttony.s3.amazonaws.com/ZzwZfP9iPTCF/Dk9aHyvOW9X6DifbVz83eWIr6yGLJHG0/data.png"></img>
        </div>
        <div className='footer'>
          <img src="https://lc-gluttony.s3.amazonaws.com/ZzwZfP9iPTCF/pl0RnvJKpLKo8VLe8iLYOn1utVkJ2mfa/appStore.png" onClick={() => this.downloadApp()}></img>
          
          <div className='protocol'>
            <text onClick={() => this.clickProtocol(1)}>
              用户协议
            </text>
            <text onClick={() => this.clickProtocol(2)}>
              隐私政策
            </text>
            <text onClick={() => this.clickProtocol(3)}>
            联系我们
           </text>
          </div>
          <img src="https://lc-gluttony.s3.amazonaws.com/ZzwZfP9iPTCF/dI7LoXp1dbQbVYs18ddCE3AxbrSLvR7H/header_logo.png"></img>
          <text>
            记录专注，预见未来
          </text>

          
          <div className='footer-line'></div>
          <img className='light-logo' src="https://lc-gluttony.s3.amazonaws.com/ZzwZfP9iPTCF/PQqanNODRM4f1PecFkqANIrFForeUgvX/light_logo.png"></img>

        </div>


      </div>
    );
  }

}
