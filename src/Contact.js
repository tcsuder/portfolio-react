import React from 'react';
import propTypes from 'prop-types';

function Contact() {
  return (
    <div className="section-container">
      <style jsx>{`
        .contact-section {
          margin: 0 auto;
          padding: 0 25%;
          padding-top: 150px;
          width: 50%;
        }
      `}</style>
      <div className="section-title">
        <h2>CONTACT</h2>
        <div className="underline"></div>
      </div>
      <div className="contact-section">
        <div className="about-long">
          <p>
            tcsuder@gmail.com
            linkedin
            github
            instagram
          </p>
        </div>
      </div>

    </div>
  );
}

Contact.propTypes = {

}

export default Contact;
