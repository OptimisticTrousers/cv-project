/* eslint-disable react/prop-types */
import React from 'react';
import './Education.css';
import uniqid from 'uniqid';

class Education extends React.Component {
  render() {
    const { educationalExperiences } = this.props;
    return (
      <div className="education">
        <h2>EDUCATION</h2>
        {educationalExperiences.map((experience) => (
          <div key={uniqid()} className="education-section">
            <strong>{experience.major}</strong>
            <p>{experience.school}</p>
            <p>{experience.date}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Education;
