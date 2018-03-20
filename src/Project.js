import React from 'react';
import propTypes from 'prop-types';

function Project() {
  return (
    <div className="project">
      <style jsx>{`
        .project-image {
          background-color: black;
          height: 300px;
          width: 80%;
          margin: 0 auto;
        }
      `}</style>
      <div className="project-image">
        <div className="project-title">
          <h2>Learning React - What I'd do Differently</h2>
        </div>
      </div>
      <div className="project-desciption">
        <p>
          As a teacher at a code school, I've learned, written about, and taught a pretty wide variety of technologies. So when the Epicodus curriculum lead and I proposed writing and teaching a React course, we were blissfully ignorant of the challenges ahead. A year later, battered and bruised, we've come out the other end with a pretty damn good set of lessons,
        </p>
      </div>
    </div>
  );
}

Project.propTypes = {

}

export default Project;
