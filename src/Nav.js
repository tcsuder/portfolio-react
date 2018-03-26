import React from 'react';
import propTypes from 'prop-types';

function Nav({ image, opacity }) {
  return (
    <div>
      <div id="nav" className="nav">
        <style jsx>{`
          .nav {
            display: flex;
            min-width: 720px;
            background: linear-gradient(rgba(0, 0, 0,${10 - opacity}), rgba(0,0,0,0)), url(${image});
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            height: 100px;
            transition: .2s;
          }
          .nav-link {
            align-items: cener;
            justify-content: center;
            display: flex;
            height: 100%;
            width: 100%;
          }
          .nav-link:hover {
            cursor: pointer;
          }
          .nav h4 {
            padding-top: 25px;
            background: #fff;
            color: rgba(5,25,30,.8);
            font-size: 2em;
            height: 75%;
            margin: 0;
            min-width: 240px;
            mix-blend-mode: screen;
            text-align: center;
            width: 33.33vw;
            overflow: hidden;
          }

        `}</style>

        <div className="nav-link">
          <h4>about</h4>
        </div>
        <div className="nav-link">
          <h4>projects</h4>
        </div>
        <div className="nav-link">
          <h4>contact</h4>
        </div>
      </div>
    </div>
  );
}

Nav.propTypes = {

}

export default Nav;
