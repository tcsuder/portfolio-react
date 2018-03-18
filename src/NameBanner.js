import React from 'react';
import propTypes from 'prop-types';
import colorHood from './images/colorHood.jpg';


function NameBanner({didScroll, changeImage, defaultImage}) {
  return (
    <div className="hood">
      <style jsx>{`
        div.hood {
          margin-top: 100px;
          background: linear-gradient(rgba(0,0,0,.8), rgba(251,222,222,.8)), url(${defaultImage});
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          height: 275px;
        }
        h1.title {
          background: #fff;
          border-bottom: 10px solid #524B4C;
          font-family: 'Kameron', serif;
          font-size: 12em;
          line-height: .65em;
          margin: 0 auto;
          mix-blend-mode: screen;
          padding-bottom: 20px;
        }
        span.last-name {
          font-size: .9em;
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
            height: 275px;
          }
        `}</style>}
      <h1 className="title">TYLER <span className="last-name">SUDERMAN</span></h1>
    </div>
  );
}

NameBanner.propTypes = {
  changeImage: propTypes.string.isRequired,
  defaultImage: propTypes.string.isRequired,
  didScroll: propTypes.bool.isRequired
}

export default NameBanner;
