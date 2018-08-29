import React, { Component } from 'react';
import NameBanner from './NameBanner';
import About from './About';
import Footer from './Footer';
import defaultState from './defaultState';

const initialState = () => {
  return {
    imageList: defaultState.imageList,
    photo: defaultState.imageList['trail3'],
    bannerOpacity: defaultState.bannerOpacity,
    footerIsSticky: defaultState.footerIsSticky,
    footerOpacity: defaultState.footerOpacity
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = initialState();
  }

  componentDidMount() {
    this.loadRandomImage();
    document.title = "Portfolio - Tyler Suderman";
    this.checkScroll()
  }

  render() {
    return (
      <main>
        <style>
          @import url('https://fonts.googleapis.com/css?family=Kosugi+Maru');
        </style>
        <style global jsx>{`
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
            min-width: 700px;
            margin: 0;
            padding: 0;
          }
          a {
            color: rgb(10,20,30);
          }
          #root, main, .section-container, .section {
            min-width: inherit;
          }
          .section-container {
            max-width: 1200px;
            min-width: 700px;
            margin: 0 auto;
            min-height: 500px;
            padding-top: 20px;
            width: 70%;
          }
          .section {
            padding-left: 20px;
            padding-top: calc(100px + 5vw);
            width: 50vw;
          }
        `}</style>
        <NameBanner
          opacity={this.state.bannerOpacity}
          image={this.state.photo}/>
        <About />
        <Footer
          isSticky={this.state.footerIsSticky}
          opacity={this.state.footerOpacity}
          image={this.state.photo}/>
      </main>
    );
  }

  loadRandomImage() {
    const keys = Object.keys(this.state.imageList);
    const randomKey = keys[Math.floor(Math.random() * (Object.keys(this.state.imageList).length - 0))];
    this.setState({photo: this.state.imageList[randomKey]});
  }

  checkScroll() {
    window.addEventListener('scroll', () => {
      console.log('scrolling');
    })
    let contentBottomLastChecked = 0;
    setInterval(() => {
      const bannerBottom = document.getElementById('banner').getBoundingClientRect().bottom;
      const contentBottom = window.innerHeight - document.getElementById('about').getBoundingClientRect().bottom;
      const slowDownOpacityChange = (bannerBottom - 100)/ 50;
      if (slowDownOpacityChange < 10) {
        const newBannerOpacity = slowDownOpacityChange / 10;
        this.setState({bannerOpacity: newBannerOpacity});
      } else {
        this.setState({bannerOpacity: 1});
      }
      if (contentBottomLastChecked > contentBottom) {
        this.setState({
          footerOpacity: 0,
          isSticky: false
        });
      } else if (contentBottom >= 200) {
        contentBottomLastChecked = contentBottom;
        console.log(contentBottomLastChecked);
        this.setState({
          footerOpacity: 1,
          isSticky: true
        });
      } else {
        this.setState({
          footerOpacity: 0,
          isSticky: false
        });
      }
    }, 10)
  }
}

export default App;
