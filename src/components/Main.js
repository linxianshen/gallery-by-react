require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/main.scss');

import React from 'react';

//获取图片相关数据
let imageDatas = require('../data/imageDatas.json');
//利用自执行函数,将图片名信息转橙图片URL信息
imageDatas = (function genImageURL(imageDatasArr){
	for(var i = 0; i < imageDatasArr.length; i++){
		var singleImageData = imageDatasArr[i];

		singleImageData.imageURL = require('../images/' + singleImageData.fileName);

		imageDatasArr[i] = singleImageData;
	}
	return imageDatasArr;
})(imageDatas);


// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   	date: new Date(),
  //   	liked: true
  //   };
  // }

  // componentDidMount() {
  //   this.timerID = setInterval(
  //     () => this.tick(),
  //     1000
  //   );
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timerID);
  // }

  // tick = () => {
  //   this.setState({
  //     date: new Date()
  //   });
  // }

  // handleClick = () => {
  // 	this.setState({
  // 		liked: !this.state.liked
  // 	});
  // }
  render() {
    // var text = this.state.liked ? '喜欢' : '不喜欢';
    return (
    	<section className="stage">
    		<section className="img-sec">test</section>
    		<nav className="controller-nav"></nav>
    	</section>

      // <div className="index">
      //   <img src={yeomanImage} alt="Yeoman Generator" />
      //   <div className="notice">hello Please edit <code>src/components/Main.js</code> to get started!</div>
      // 	 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      // 	 <p onClick={this.handleClick}>我{text}你,点击切换状态</p>
      // </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
