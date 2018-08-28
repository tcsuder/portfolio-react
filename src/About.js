import React from 'react';
import propTypes from 'prop-types';

function About() {
  return (
    <div id="about" className="section-container">
      <style jsx>{`
        .section {
          padding-top: 100px;
          width: 50vw;
        }
        .section p {
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

      <div className="section">
        <p>Web Developer</p>
        <p className="tabbed">who <a href="https://www.learnhowtoprogram.com/react/react-fundamentals/introduction-to-react-3e0baf22-adf7-480c-8d02-8144ad6467b7">teaches and writes</a></p>
        <p className='tabbed'>at <a href="https://www.epicodus.com/">Epicodus.</a></p>
        <div className='break'></div>
        <p>On trails and in mountains</p>
        <p className='tabbed'><a href="https://www.instagram.com/tyler_suderman/">in my spare time.</a></p>
        <div className='break'></div>
        <p>I care about my communities</p>
        <p className='tabbed'>and <a href='https://www.linkedin.com/in/tylersuderman/'>work</a> to make them bigger and better.</p>
      </div>
    </div>
  );
}

About.propTypes = {

}

export default About;
