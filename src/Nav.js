import React from 'react';
import propTypes from 'prop-types';

function Nav({didScroll, photo}) {
  return (
    <div className="nav">
      <style jsx>{`
        .nav {
          display: flex;
          justify-content: flex-start;
        }
        .nav-link {
          width: 300px;
        }
        .nav-link:hover {
          cursor: pointer;
        }
        .nav h4 {
          color: #524B4C;
          font-size: 2em;
          font-family: sans-serif;
          font-weight: bold;
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
      {/* <p>Coder, Teacher, Outdoorsman</p> */}
    </div>
  );
}

Nav.propTypes = {

}

export default Nav;
