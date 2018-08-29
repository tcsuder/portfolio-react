import React from 'react';
import propTypes from 'prop-types';

function About() {
  return (
    <div id="about" className="section-container">
      <style jsx>{`
        .section p {
          font-family: 'Kosugi Maru', sans-serif;
          font-size: 1.5rem;
          font-size: calc(1.5rem + .25vw);
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
        <p>I am a <a href="https://github.com/tcsuder">web developer</a></p>
        <p className="tabbed">who <a href="https://www.learnhowtoprogram.com/react/react-fundamentals/introduction-to-react-3e0baf22-adf7-480c-8d02-8144ad6467b7">teaches and writes</a></p>
        <p className='tabbed'>at <a href="https://www.epicodus.com/">Epicodus.</a></p>
        <div className='break'></div>
        <p>On trails and in mountains</p>
        <p className='tabbed'>in my <a href="https://www.instagram.com/tyler_suderman/">spare time.</a></p>
        <div className='break'></div>
        <p>I care about communities</p>
        <p className='tabbed'>and <a href='https://www.linkedin.com/in/tylersuderman/'>work very hard</a> to make mine</p>
        <p className='tabbed'>inclusive, producive, and fun.</p>
        <div className='break'></div>
        <p><a href="mailto:tcsuder@gmail.com?subject=Portfolio Inquery">Let's connect!</a></p>
      </div>
    </div>
  );
}

About.propTypes = {

}

export default About;
