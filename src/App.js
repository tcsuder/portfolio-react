import React, { Component } from 'react';
import NameBanner from './NameBanner';
import Nav from './Nav';
import Project from './Project';

import waterfall from './images/waterfall.jpg';
import trailSunset from './images/trailSunset.jpg';
import colorHood from './images/colorHood.jpg';
import snowLake from './images/snowLake.jpg';
import snowRoad from './images/snowRoad.jpg';
import springHood from './images/springHood.jpg';

const images = {
  trailSunset,
  colorHood,
  snowLake,
  snowRoad,
  springHood
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      didScroll: false,
      photo: images.colorHood,
      imageList: images,
      changeFrequency: 50
    }
    this.checkDidScroll = this.checkDidScroll.bind(this)
  }

  componentDidMount() {
    const keys = Object.keys(this.state.imageList);
    const randomKey = keys[Math.floor(Math.random() * (Object.keys(this.state.imageList).length - 0))];
    this.setState({photo: this.state.imageList[randomKey]});
    document.title = "Portfolio - Tyler Suderman";
    document.onscroll = () => { this.setState({didScroll:true}) }
    this.checkDidScroll()
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
            font-family: 'Amiko';
            margin: 0;
            padding: 0;
          }
        `}</style>

        <header>
          <NameBanner
            image={this.state.photo}/>
          <Nav
            image={this.state.photo}/>
          <Project/>
          <div style={{height:'400px', fontSize: '2em'}}>

          </div>
        </header>
      </main>
    );
  }

  checkDidScroll() {
    setInterval(() => {
      console.log("check");
      if(this.state.didScroll) {


      }
    }, this.state.changeFrequency)
  }
}

export default App;
