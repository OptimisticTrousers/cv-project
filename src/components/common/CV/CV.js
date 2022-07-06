/* eslint-disable react/prop-types */
import React from 'react';
import './CV.css';
import Experience from '../../ui/Experience/Experience';
import Skills from '../../ui/Skills/Skills';
import Qualifications from '../../ui/Qualifications/Qualifications';
import Education from '../../ui/Education/Education';
import Profile from '../Profile/Profile';

class CV extends React.Component {
  render() {
    const { conditionallyRender, submitted } = this.props;
    return (
      <div className="curriculum-vitae">
        <div className="curriculum-vitae-container">
          <h2>CURRICULUM VITAE</h2>
          <Profile conditionallyRender={conditionallyRender} />
          <div className="curriculum-vitae-grid">
            <Experience
              conditionallyRender={conditionallyRender}
              submitted={submitted}
            />
            <Education
              conditionallyRender={conditionallyRender}
              submitted={submitted}
            />
            <Skills
              conditionallyRender={conditionallyRender}
              submitted={submitted}
            />
            <Qualifications
              conditionallyRender={conditionallyRender}
              submitted={submitted}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CV;
