import React from 'react';
import propTypes from 'prop-types';

function Footer() {
  return (
    <footer className="section-container">
      <style jsx>{`
        .contact-content {
          width: 100%;
          height: 1500px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .contact-content .bar {
          width: 100%;
          display: flex;
          flex-direction: row;
          max-width: 1000px;
          margin: 0 auto;
          justify-content: space-around;
        }
      `}</style>
      <div className="contact-content">
        <div className="bar">
          <h2><a href="mailto:tcsuder@gmail.com?subject=Portfolio Inquery">Email</a></h2>
          <h2>|</h2>
          <h2><a href="https://www.linkedin.com/in/tylersuderman/">LinkedIn</a></h2>
          <h2>|</h2>
          <h2><a href="https://github.com/tcsuder">Github</a></h2>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {

}

export default Footer;
