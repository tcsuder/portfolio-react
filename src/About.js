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
          width: 50vw;
        }
        .about-content p {
          font-family: 'Kosugi Maru', sans-serif;
          font-size: 1.5rem;
          line-height: 2em;
          margin-bottom: 0;
        }
        .tabbed {
          margin-left: 1em;
          margin-top: 0;
          line-height: 1em;
        }
        .break {
          height: 20px;
        }
        .mission {
          margin-top: 0;
        }
      `}</style>

      <div className="about-content">
        <p>Web Developer who <a href="https://www.learnhowtoprogram.com/react/react-fundamentals/introduction-to-react-3e0baf22-adf7-480c-8d02-8144ad6467b7">teaches and writes</a></p>
        <p class='tabbed'>at <a href="https://www.epicodus.com/">Epicodus.</a></p>
        <div class='break'></div>
        <p>Trails and mountains in my <a href="https://www.instagram.com/tyler_suderman/">spare time.</a></p>
        <div class='break'></div>
        <p>I care about my communities</p>
        <p class='tabbed'>and <a href='https://www.linkedin.com/in/tylersuderman/'>work</a> to make them bigger and better.</p>
      </div>
    </div>
  );
}

About.propTypes = {

}

export default About;
