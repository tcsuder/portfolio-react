import React, { Component } from 'react';
import NameBanner from './NameBanner';
import About from './About';
import LinkText from './LinkText';
import defaultState from './defaultState';

const initialState = () => {
  return {
    imageList: defaultState.smallImageList,
    image: defaultState.imageList['trail3'],
    bannerOpacity: defaultState.bannerOpacity,
    linksByKey: defaultState.linksByKey,
    highlightedLink: '',
    narrowView: true,
    mobileView: false
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
    this.readScroll();
    this.readScreen();
    this.readScreenOnResize();
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
          image={this.state.image}
          mobile={this.state.mobileView}/>
        {this.state.highlightedLink && !this.state.narrowView ? (
          <LinkText
            highlightedLink={this.state.highlightedLink}
            image={this.state.image}/>
        ): null}
        <About
          links={this.state.linksByKey}
          highlightLink={this.highlightLink}/>
      </main>
    );
  }

  highlightLink(link) {
    this.setSate({highlightedLink: link})
  }

  loadRandomImage() {
    const keys = Object.keys(this.state.imageList);
    const randomKey = keys[Math.floor(Math.random() * (Object.keys(this.state.imageList).length - 0))];
    this.setState({image: this.state.imageList[randomKey]});
  }

  readScreen() {
    let narrowView = this.state.narrowView;
    let mobileView = this.state.mobileView;
    let imageList = Object.assign({}, this.state.imageList);
    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);
    const screenWidth = window.visualViewport.width;

    if (mobile) {
      mobileView = true;
    } else {
      this.setMouseEvents();
    }

    if (screenWidth > 500) {
      narrowView = false;
    }

    if (!mobile && screenWidth > 500) {
      imageList = Object.assign({}, defaultState.imageList);
    }

    this.setState({
      mobileView,
      narrowView,
      imageList
    }, () => {
      this.loadRandomImage();
    })

  }

  readScreenOnResize() {
    window.addEventListener('resize', () => {
      this.readScreen();
    })
  }

  setMouseEvents() {
    const links = document.getElementsByClassName('link');
    Object.keys(links).forEach((key) => {
      links[key].addEventListener('mouseenter', (event) => {
        const display = this.state.linksByKey[event.target.id].displayName;
        this.setState({ highlightedLink: display })
      });
      links[key].addEventListener('mouseleave', (event) => {
        this.setState({ highlightedLink: '' });
      });
    });
  }

  readScroll() {
    window.addEventListener('scroll', () => {
      const bannerBottom = document.getElementById('banner').getBoundingClientRect().bottom;
      const slowDownOpacityChange = (bannerBottom - 100)/ 50;
      if (slowDownOpacityChange < 10) {
        const newBannerOpacity = slowDownOpacityChange / 10;
        this.setState({bannerOpacity: newBannerOpacity});
      } else {
        this.setState({bannerOpacity: 1});
      }
    });
  }
}

export default App;
