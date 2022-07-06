/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './Education.css';
import uniqid from 'uniqid';

class Education extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value, index) {
    const tasks = [...this.state.tasks];

    const task = { ...tasks[index] };

    task[value] = value;

    this.setState({ tasks });
  }

  render() {
    const { educationalExperiences, conditionallyRender } = this.props;
    const { handleChange } = this;
    return (
      <div className="education">
        <h2>EDUCATION</h2>
        {educationalExperiences.map((experience, index) => (
          <div key={uniqid()} className="education-section">
            {conditionallyRender(
              <strong>{experience.major}</strong>,
              'input',
              experience.major,
              'major',
              handleChange,
              index
            )}
            <p>{experience.school}</p>
            <p>{experience.date}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Education;
