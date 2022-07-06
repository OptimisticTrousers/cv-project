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
      educationalExperiences: [
        {
          school: 'University name - Location',
          major: 'Masters in Computer Science',
          date: 'September 2019 - June 2020',
        },
        {
          school: 'University name - Location',
          major: 'B.S. Computer Science',
          date: 'September 2014 - June 2018',
        },
        {
          school: 'London High School',
          major: 'N/A',
          date: 'September 2010 - June 2014',
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value, index) {
    this.setState((state) => {
      const { tasks } = state;
      const task = tasks[index];
      task[value] = event.target.value;
      return {
        tasks,
      };
    });
  }

  render() {
    const { conditionallyRender, submitted } = this.props;
    const { handleChange } = this;
    const { educationalExperiences } = this.state;
    return (
      <div className="education">
        <h2>EDUCATION</h2>
        {educationalExperiences.map((experience, index) => (
          <div key={uniqid()} className="education-section">
            {conditionallyRender(
              <strong>{this.state.tasks[index].major}</strong>,
              'input',
              this.state.tasks[index].major,
              `major`,
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
