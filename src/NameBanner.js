import React from 'react';
import propTypes from 'prop-types';
import colorHood from './images/colorHood.jpg';


function NameBanner({didScroll, changeImage, defaultImage}) {
  return (
    <div className="hood">
      <style jsx>{`
        div.hood {
          background: linear-gradient(rgba(0,0,0,.8), rgba(251,222,222,.8)), url(${defaultImage});
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          height: 350px;
        }
        h1.title {
          background: #fff;
          text-align: center;
          border-bottom: 40px solid white;
          font-family: 'Kameron', serif;
          font-size: 15em;
          line-height: .75em;
          margin: 0 auto;
          mix-blend-mode: screen;
        }
        span.last-name {
          font-size: 9em;
        }
      `}</style>
      {didScroll &&
        <style jsx>{`
          div.hood {
            background: linear-gradient(rgba(0,0,0,.8), rgba(251,222,222,.8)), url(${changeImage});
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            height: 350px;
          }
        `}</style>}
      <h1 className="title">TYLER <span className="last-name">S</span>UDERMAN</h1>
    </div>
  );
}

NameBanner.propTypes = {
  changeImage: propTypes.string.isRequired,
  defaultImage: propTypes.string.isRequired,
  didScroll: propTypes.bool.isRequired
}

export default NameBanner;
