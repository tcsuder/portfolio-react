import React, { Component } from 'react';
import NameBanner from './NameBanner';
import Nav from './Nav';
import Project from './Project';
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
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"/>
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
            margin: 0;
            padding: 0;
          }
        `}</style>
        <header>
          <NameBanner
            opacity={this.state.bannerOpacity}
            image={this.state.photo}/>
          <Nav
            opacity={this.state.bannerOpacity}
            image={this.state.photo}/>
          <Project/>
          <div style={{height:'9000px', fontSize: '2em'}}>

          </div>
        </header>
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
      const slowDown = (bannerBottom - 150)/ 50;
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
