import React from 'react';
import propTypes from 'prop-types';
import trail20 from './images/trail20.jpg'

function About({ image }) {
  return (
    <div className="section-container">
      <style jsx>{`
        .about-image {
          background-color: black;
          height: 250px;
          background: linear-gradient(rgba(10,20,30,.2), rgba(0,0,0,0)), url(${trail20});
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .about-content {
          padding-top: 100px;
        }
      `}</style>
      <div className="section-title">
        <h2>ABOUT</h2>
        <div className="underline"></div>
      </div>

      <div className="about-content">
        <div className="about-image"></div>
        <h1>Hi I'm Tyler!</h1>
          {/* <h4>Into nature, technology, and the ways they fill the lives we choose</h4> */}
        <div className="about-long">
          <p>
            I'm a communicator, learner, web-developer, and trail and mountain enthusiast. I care deeply about the communities I invest in, and want to be a part of their betterment. Whether that means learning a technology one level deeper, practicing ethical and sustainable outdoorsmanship, or being and advocate and ally for minorities in my community.
          </p>
        </div>
      </div>
    </div>
  );
}

About.propTypes = {

}

export default About;
