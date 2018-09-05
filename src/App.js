import React, { Component } from 'react';
import NameBanner from './NameBanner';
import About from './About';
import LinkDescription from './LinkDescription';
import defaultState from './defaultState';

const initialState = () => {
  return {
    imageList: defaultState.smallImageList,
    displayImage: defaultState.smallImageList['trail3mobile'],
    wideScreen: false,
    bannerOpacity: defaultState.bannerOpacity,
    linksByKey: defaultState.linksByKey,
    highlightedLink: ''
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState();
    this.highlightLink = this.highlightLink.bind(this);
  }

  componentDidMount() {
    document.title = "TYLER SUDERMAN";

    const inWideScreen = this.checkScreenWidth();
    this.setImageState(inWideScreen);

    window.addEventListener('scroll', () => {
      this.setBannerOpacity(this.state.highlightedLink);
    });
    window.addEventListener('resize', () => {
      this.checkScreenWidth();
    });
  }

  render() {
    return (
      <main>
        <style global jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Kosugi+Maru');
          @font-face {
              font-family: 'Amiko';
              src: url(${require('./fonts/Amiko-Bold.eot')});
              src: url(${require('./fonts/Amiko-Bold.eot?#iefix')}) format('embedded-opentype'),
                  url(${require('./fonts/Amiko-Bold.woff2')}) format('woff2'),
                  url(${require('./fonts/Amiko-Bold.woff')}) format('woff');
              font-weight: bold;
              font-style: normal;
          }
          body {
            font-family: 'Amiko', sans-serif;
            color: rgb(10,20,30);
            min-width: 500px;
            margin: 0;
            padding: 0;
          }
          a {
            color: rgb(10,20,30);
          }
          #root, main, .section-container {
            min-width: inherit;
          }
          .section-container {
            max-width: 1200px;
            min-width: 500px;
            margin: 0 auto;
            min-height: 500px;
            width: 70%;
          }
          .section {
            min-width: 480px;
            padding-left: 20px;
            padding-top: calc(100px + 5vw);
            padding-bottom: calc(100px + 5vw);
            width: 50vw;
          }
        `}</style>
        <NameBanner
          opacity={this.state.bannerOpacity}
          image={this.state.displayImage}
          wideScreen={this.state.wideScreen}/>
        <LinkDescription
          highlightedLink={this.state.highlightedLink}
          image={this.state.displayImage}
          wideScreen={this.state.wideScreen}/>
        <About
          links={this.state.linksByKey}
          highlight={this.highlightLink}/>
      </main>
    );
  }

  highlightLink(link) {
    this.setBannerOpacity(link);
    this.setState({highlightedLink: link});
  }

  checkScreenWidth() {
    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);
    const screenWidth = window.innerWidth;
    const wideScreen = screenWidth < 550 || mobile ? false : true;
    this.setState({ wideScreen });
    return wideScreen;
  }


  setImageState(wideScreen) {
    const imageList = wideScreen ? Object.assign({}, defaultState.largeImageList) : Object.assign({}, defaultState.smallImageList);
    const displayImage = this.getRandomImage(imageList);
    this.setState({imageList, displayImage});
  }

  getRandomImage(imageList) {
    const keys = Object.keys(imageList);
    const randomKey = keys[Math.floor(Math.random() * (Object.keys(imageList).length - 0))];
    return imageList[randomKey];
  }

  setBannerOpacity(link) {
    const bannerBottom = document.getElementById('banner').getBoundingClientRect().bottom;
    const slowDownOpacityChange = (bannerBottom - 100)/ 50;
    let newBannerOpacity = slowDownOpacityChange / 10;
    console.log(slowDownOpacityChange);
    if (slowDownOpacityChange > 10) {
      newBannerOpacity = 1;
    }
    if (link !== '') {
      newBannerOpacity -= .4;
    }
    this.setState({bannerOpacity: newBannerOpacity});
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => {
      this.setBannerOpacity();
    });
    window.removeEventListener('resize', () => {
      this.checkScreenWidth();
    });
  }
}

export default App;
