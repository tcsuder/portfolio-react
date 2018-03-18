import React from 'react';
import propTypes from 'prop-types';

function Project({didScroll, photo}) {
  return (
    <div className="project">
      <style jsx>{`
        div.project {

        }
      `}</style>
      <div className="project-image">

      </div>
      <div className="project-title"></div>
      <div className="project-desciption"></div>
    </div>
  );
}

Project.propTypes = {

}

export default Project;
