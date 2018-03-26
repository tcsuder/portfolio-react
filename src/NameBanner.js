import React from 'react';
import propTypes from 'prop-types';

function NameBanner({ image, opacity }) {
  return (
    <div id="hood" className="hood">
      <style jsx>{`
        div.hood {
          background: linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,0)), url(${image});
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          height: 600px;
          overflow: hidden;
        }
        h1.title {
          background: rgba(255,255,255,${opacity});
          color: rgba(0,0,0,1);
          font-size: 18em;
          line-height: .6em;
          margin: 0;
          mix-blend-mode: screen;
          padding-top: 150px;
          transition: .5s;
        }
        span.last-name {
          font-size: .666em;
        }
      `}</style>
      <h1 id="title" className="title">tyler <span className="last-name">suderman</span></h1>
    </div>
  );
}

NameBanner.propTypes = {
  image: propTypes.string.isRequired
}

export default NameBanner;
