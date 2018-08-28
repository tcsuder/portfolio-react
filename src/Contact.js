import React from 'react';
import propTypes from 'prop-types';

function Contact() {
  return (
    <div className="section-container">
      <style jsx>{`
        .contact-content {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
      `}</style>
      <div className="contact-content">
        <h2><a href="mailto:tcsuder@gmail.com?subject=Portfolio Inquery">Email</a></h2>
        <h2>|</h2>
        <h2><a href="https://www.linkedin.com/in/tylersuderman/">LinkedIn</a></h2>
        <h2>|</h2>
        <h2><a href="https://github.com/tcsuder">Github</a></h2>
      </div>
    </div>
  );
}

Contact.propTypes = {

}

export default Contact;
