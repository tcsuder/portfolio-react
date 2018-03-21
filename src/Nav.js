import React from 'react';
import propTypes from 'prop-types';

function Nav({didScroll, image}) {
  return (
    <div className="nav">
      <style jsx>{`
        .nav {
          display: flex;
          justify-content: flex-start;
          background: linear-gradient(rgba(0,0,0,.6), rgba(251,222,222,1)), url(${image});
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .nav-link {
          width: 300px;
        }
        .nav-link:hover {
          cursor: pointer;
        }
        .nav h4 {
          color: #fff;
          font-size: 2em;
          font-family: sans-serif;
          font-weight: bold;
          margin-bottom: 0px;
          mix-blend-mode: screen;
        }

      `}</style>
      <div className="nav-link">
        <h4>Projects</h4>
      </div>
      <div className="nav-link">
        <h4>About</h4>
      </div>
      <div className="nav-link">
        <h4>Contact</h4>
      </div>
    </div>
  );
}

Nav.propTypes = {

}

export default Nav;
