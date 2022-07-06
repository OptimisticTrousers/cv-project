/* eslint-disable react/prop-types */
import React from 'react';
import './Skills.css';

class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: [
        'HTML',
        'CSS',
        'Javascript',
        'React',
        'Tailwind CSS',
        'GraphQL',
        'Next.js',
        'Node.js',
        'Express.js',
        'MongoDB',
      ],
    };
  }

  render() {
    const { conditionallyRender } = this.props;
    const { skills } = this.state;
    return (
      <div className="skills">
        <h2 className="skills-title">SKILLS</h2>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Skills;
