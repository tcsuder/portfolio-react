import React, { Component } from 'react';
import NameBanner from './NameBanner';
import Nav from './Nav';
import waterfall from './images/waterfall.jpg';
import trailSunset from './images/trailSunset.jpg';
import colorHood from './images/colorHood.jpg';
import snowLake from './images/snowLake.jpg';
import snowRoad from './images/snowRoad.jpg';
import springHood from './images/springHood.jpg';

const images = {
  waterfall,
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
      changeFrequency: 400
    }
    this.checkDidScroll = this.checkDidScroll.bind(this)
  }

  componentDidMount() {
    document.title = "Portfolio - Tyler Suderman";
    document.onscroll = () => { this.setState({didScroll:true}) }
    this.checkDidScroll()
  }

  render() {
    return (
      <main>
        <link href="https://fonts.googleapis.com/css?Kameron:700" rel="stylesheet"/>
        <style global jsx>{`
          body {
            font-family: sans-serif;
            margin: 0;
            padding: 0;
          }
        `}</style>
        <style jsx>{`
          main {
            margin: 0 auto;
            width: 1200px;
          }
        `}</style>

        <header>
          <NameBanner
            didScroll={this.state.didScroll}
            changeImage={this.state.photo}
            defaultImage={this.state.imageList.colorHood}/>
          <Nav />
          <div style={{height:'400px', fontSize: '2em'}}>

          </div>
        </header>
      </main>
    );
  }

  checkDidScroll() {
    setInterval(() => {
      const keys = Object.keys(this.state.imageList);
      const randomKey = keys[Math.floor(Math.random() * (Object.keys(this.state.imageList).length - 0))];
      if(this.state.didScroll) {
        this.setState({ didScroll: false, photo: this.state.imageList[randomKey]});
        console.log('You scrolled');
      }
    }, this.state.changeFrequency)
  }
}

export default App;
