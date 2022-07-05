/* eslint-disable react/prop-types */
import React from 'react';

class Skills extends React.Component {
  render() {
    const { skills } = this.props;
    return (
      <div className="skills">
        <h2 className="skills-title">SKILLS</h2>
        <ul classNam="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Skills;
