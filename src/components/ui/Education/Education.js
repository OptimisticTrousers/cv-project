/* eslint-disable react/prop-types */
import React from 'react';

class Education extends React.Component {
  render() {
    const { educationalExperiences } = this.props;
    return (
      <div className="education">
        <h2>EDUCATION</h2>
        {educationalExperiences.map((experience) => (
          <div className="education-section">
            <strong>B.S Computer Science</strong>
            <p>University</p>
            <p>Date</p>
          </div>
        ))}
      </div>
    );
  }
}
