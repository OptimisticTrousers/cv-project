/* eslint-disable react/prop-types */
import React from 'react';
import './Experience.css';

class Experience extends React.Component {
  render() {
    const { title, experiences } = this.props;
    return (
      <div className="experience">
        <h2>{title}</h2>
        {experiences.map((experience) => (
          <div className="experience-container">
            <div className="position">
              <h3>
                {experience.company} <span>{experience.position}</span>
              </h3>
              <p>{experience.date}</p>
            </div>
            <p className="experience-description">{experience.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Experience;
