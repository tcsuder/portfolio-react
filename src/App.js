import React, { Component } from 'react';
import NameBanner from './NameBanner';
import About from './About';
import defaultState from './defaultState';

const initialState = () => {
  return {
    imageList: defaultState.imageList,
    photo: defaultState.imageList['trail3'],
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
    this.loadRandomImage();
    document.title = "Portfolio - Tyler Suderman";
    this.readScroll();
    this.readMouse();
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
            min-width: 500px;
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
            min-width: 500px;
            margin: 0 auto;
            min-height: 500px;
            width: 70%;
          }
          .section {
            padding-left: 20px;
            padding-top: calc(100px + 5vw);
            padding-bottom: calc(100px + 5vw);
            width: 50vw;
          }
          #display-link {
            position: fixed;
            top: 0;r
            left: 60%;
            left: 70vw;
            min-width: 500%;
            width: 100vw;
            min-height: 100%;
            height: 100vh;
            background: linear-gradient(rgba(10,20,30,.8), rgba(0,0,0,0)), url(${this.state.photo});
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            height: 580px;
            overflow: hidden;
          }
          #display-link ul {
            list-style: none;
            width: 70px;
            padding-top: 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          #display-link li h1 {
            margin: 0;
            line-height: .75em;
            font-size: 5rem;
            font-size: 7rem;
          }
          pre {
            font-family: 'Amiko', sans-serif;
            color: rgb(10,20,30);
            margin: 0;
            color: white;
          }
        `}</style>
        <NameBanner
          opacity={this.state.bannerOpacity}
          image={this.state.photo}/>
          {
            this.state.highlightedLink ? (
              <div id="display-link">
                <ul>
                  {this.state.highlightedLink.split('').map((char, i) => {
                    return (
                      <li key={i}>
                        <h1><pre>{char.toUpperCase()}</pre></h1>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ) : <pre></pre>
          }

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
    this.setState({photo: this.state.imageList[randomKey]});
  }

  readMouse() {
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
    let contentBottomLastChecked = 0;
    window.addEventListener('scroll', () => {
      console.log('scrolling');
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
