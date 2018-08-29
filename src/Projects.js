import React from 'react';
import propTypes from 'prop-types';
import logo from './images/logo.png';
import managerCompanion from './images/managerCompanion.png';
// import react from './images/react.png';

function Projects() {
  return (
    <div className="section-container">
      <style jsx>{`
        .project-tile {
          margin-top: 100px;
        }
        .project-image {
          background-color: black;
          height: 250px;
          background: linear-gradient(rgba(10,20,30,1), rgba(0,0,0,0)), url(${logo});
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
      <div className="section-title">
        <h2>PROJECTS</h2>
        <div className="underline"></div>
      </div>
      <div className="project-tile">
        <div className="project-image">
        </div>
        <div className="project-title">
          <h2>Blog Post: Learning React...</h2>
        </div>
        <div className="project-desciption">
          <p>
            As a teacher at a code school, I've learned, written about, and taught a pretty wide variety of technologies. So when the Epicodus curriculum lead and I proposed writing and teaching a React course, we were blissfully ignorant of the challenges...
          </p>
        </div>
      </div>
      <div className="project-tile">
        <div className="project-image">
        </div>
        <div className="project-title">
          <h2>Blog Post: Learning React...</h2>
        </div>
        <div className="project-desciption">
          <p>
            As a teacher at a code school, I've learned, written about, and taught a pretty wide variety of technologies. So when the Epicodus curriculum lead and I proposed writing and teaching a React course, we were blissfully ignorant of the challenges...
          </p>
        </div>
      </div>
      <div className="project-tile">
        <div className="project-image">
        </div>
        <div className="project-title">
          <h2>Blog Post: Learning React...</h2>
        </div>
        <div className="project-desciption">
          <p>
            As a teacher at a code school, I've learned, written about, and taught a pretty wide variety of technologies. So when the Epicodus curriculum lead and I proposed writing and teaching a React course, we were blissfully ignorant of the challenges...
          </p>
        </div>
      </div>
    </div>
  );
}

Projects.propTypes = {

}

export default Projects;
