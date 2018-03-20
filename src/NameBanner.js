import React from 'react';
import propTypes from 'prop-types';
import colorHood from './images/colorHood.jpg';


function NameBanner({ image }) {
  return (
    <div className="hood">
      <style jsx>{`
        div.hood {
          margin-top: 100px;
          background: linear-gradient(rgba(0,0,0,.6), rgb(251,222,222)), url(${image});
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          height: 350px;
        }
        h1.title {
          background: #fff;
          font-size: 12em;
          line-height: .7em;
          margin: 0 auto;
          mix-blend-mode: screen;
          padding-top: 20px;
          padding-bottom: 20px;
        }
        span.last-name {
          font-size: .8em;
        }
      `}</style>
      <h1 className="title">TYLER <span className="last-name">SUDERMAN</span></h1>
    </div>
  );
}

NameBanner.propTypes = {
  image: propTypes.string.isRequired
}

export default NameBanner;
