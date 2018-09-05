import React from 'react';
import propTypes from 'prop-types';
import Link from './Link';

function About({ links, highlight }) {

  // Object.keys(links).forEach((key) => {
  //     links[key].addEventListener('mouseenter', (event) => {
  //       const display = this.state.linksByKey[event.target.id].displayName;
  //       this.setState({ highlightedLink: display })
  //     });
  //     links[key].addEventListener('mouseleave', (event) => {
  //       this.setState({ highlightedLink: '' });
  //     });
  //   });
  //
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
        <p>
          A <Link highlight={highlight} link={links.github}/>
        </p>
        <p className="tabbed">
          who <Link highlight={highlight} link={links.curriculum}/>
        </p>
        <p className='tabbed'>
          at <Link highlight={highlight} link={links.epicodus}/>
        </p>
        <div className='break'></div>
        <p>On trails and in mountains</p>
        <p className='tabbed'>
          in my <Link highlight={highlight} link={links.instagram}/>
        </p>
        <div className='break'></div>
        <p>I care about communities</p>
        <p className='tabbed'>
          and <Link highlight={highlight} link={links.linkedin}/> to make mine
        </p>
        <p className='tabbed'>inclusive and productive.</p>
        <div className='break'></div>
        <p>
          <Link highlight={highlight} link={links.email}/>
        </p>
      </div>
    </div>
  );
}

About.propTypes = {
  links: propTypes.object.isRequired,
  highlight: propTypes.func.isRequired
}

export default About;
