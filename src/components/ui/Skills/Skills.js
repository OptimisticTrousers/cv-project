/* eslint-disable react/prop-types */
import React from 'react';
import './Skills.css';
import uniqid from 'uniqid';
import Button from '../Button/Button';

class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: [
        { skill: 'HTML', id: uniqid() },
        { skill: 'CSS', id: uniqid() },
        { skill: 'Javascript', id: uniqid() },
        { skill: 'React', id: uniqid() },
        { skill: 'Tailwind CSS', id: uniqid() },
        { skill: 'GraphQL', id: uniqid() },
        { skill: 'Next.js', id: uniqid() },
        { skill: 'Node.js', id: uniqid() },
        { skill: 'Express.js', id: uniqid() },
        { skill: 'MongoDB', id: uniqid() },
      ],
    };

    this.deleteSkill = this.deleteSkill.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value, index) {
    this.setState((state) => {
      const { skills } = state;
      const skill = skills[index];
      skill[value] = event.target.value;
      return {
        skills,
      };
    });
  }

  addSkill() {
    const defaultEducation = {
      skill: 'New Skill',
      id: uniqid(),
    };
    this.setState((state) => ({
      skills: [...state.skills, defaultEducation],
    }));
  }

  deleteSkill(id) {
    this.setState((state) => ({
      skills: state.skills.filter((element) => element.id !== id),
    }));
  }

  render() {
    const { conditionallyRender, submitted } = this.props;
    const { skills } = this.state;
    const { addSkill, deleteSkill, handleChange } = this;
    return (
      <div className="skills">
        <h2 className="skills-title">SKILLS</h2>
        <Button
          handleClick={() => addSkill()}
          textContent="Add Skill"
          submitted={submitted}
        />
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <div key={skill.id}>
              {conditionallyRender(
                <li>{skill.skill}</li>,
                'input',
                skill.skill,
                'skill',
                handleChange,
                index
              )}
              <Button
                handleClick={() => deleteSkill(skill.id)}
                textContent="Delete Skill"
                submitted={submitted}
              />
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default Skills;
