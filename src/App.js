import React, { Component } from 'react';
import NameBanner from './NameBanner';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
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
          }
          .section-container {
            margin: 0 auto;
            min-height: 600px;
            padding-top: 100px;
            width: 70%;
          }
          .section-title h2 {
            font-size: 3em;
            letter-spacing: -.05em;
            line-height: .8em;
            margin-bottom: 10px;
          }
          .section-title .underline {
            width: 15%;
            min-width: 100px;
            max-width: 200px;
            height: 25px;
            background: rgb(10,20,30);
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

          <Contact />
        </content>
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
        this.setState({bannerOpacity: newOpacity}, () => {console.log(this.state.bannerOpacity);});
      } else {
        this.setState({bannerOpacity: 1});
      }
    }, 10)
  }
}

export default App;
