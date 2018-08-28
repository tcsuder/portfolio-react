import React, { Component } from 'react';
import NameBanner from './NameBanner';
import About from './About';
import Footer from './Footer';
import defaultState from './defaultState';

const initialState = () => {
  return {
    imageList: defaultState.imageList,
    bannerOpacity: defaultState.bannerOpacity,
    photo: defaultState.imageList['trail3']
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
            min-width: 600px;
            color: rgb(10,20,30);
            margin: 0;
            padding: 0;
          }
          content {
            max-width: 1200px;
            margin: 0 auto;
          }
          .section-container {
            margin: 0 auto;
            min-height: 500px;
            padding-top: 20px;
            width: 70%;
          }
          .section-title h2 {
            font-size: 3em;
            letter-spacing: -.05em;
            line-height: .8em;
            margin-bottom: 10px;
            color: #36454f
          }
          .section-title .underline {
            width: 100%;
            max-width: 1000px;
            height: 25px;
            background: #36454f
          }
        `}</style>
        <header>
          <NameBanner
            opacity={this.state.bannerOpacity}
            image={this.state.photo}/>
        </header>
        <content>
          <About
            image={this.state.photo}/>
        </content>
        <Footer />
      </main>
    );
  }

  loadRandomImage() {
    const keys = Object.keys(this.state.imageList);
    const randomKey = keys[Math.floor(Math.random() * (Object.keys(this.state.imageList).length - 0))];
    this.setState({photo: this.state.imageList[randomKey]});
  }

  checkScroll() {
    setInterval(() => {
      const bannerBottom = document.getElementById('hood').getBoundingClientRect().bottom;
      const slowDown = (bannerBottom - 100)/ 50;
      if (slowDown < 10) {
        const newOpacity = slowDown / 10;
        this.setState({bannerOpacity: newOpacity});
      } else {
        this.setState({bannerOpacity: 1});
      }
    }, 10)
  }
}

export default App;
