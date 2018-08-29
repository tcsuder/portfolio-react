import React from 'react';
import propTypes from 'prop-types';

function Footer({opacity, isSticky}) {
  return (
    <footer id="footer" className="section-container">
      <style jsx>{`
        .contact-content {
          width: 100%;
          height: 800px;
          height: 30vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .contact-content .sticky-row {
          display: flex;
          flex-direction: row;
          max-width: 1000px;
          min-width: 500px;
          justify-content: space-between;
        }
        h2 {
          opacity: ${opacity};
          font-size: 3rem;
          transition: .5s;
        }
        a.footer-link {
          text-decoration: none;
        }
        .sticky-row {
          position: fixed;
          top: 87vh;
          left: 0;
          padding-left: 10px;
          width: 50%;
        }
      `}</style>
      <div className="contact-content">
        <div className="sticky-row">
          <h2><a className="footer-link" href="mailto:tcsuder@gmail.com?subject=Portfolio Inquery">Email</a></h2>
          <h2><a className="footer-link" href="https://www.linkedin.com/in/tylersuderman/">LinkedIn</a></h2>
          <h2><a className="footer-link" href="https://github.com/tcsuder">Github</a></h2>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {

}

export default Footer;
