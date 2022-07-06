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
          id: uniqid(),
          school: 'University name - Location',
          major: 'Masters in Computer Science',
          date: 'September 2019 - June 2020',
        },
        {
          id: uniqid(),
          school: 'University name - Location',
          major: 'B.S. Computer Science',
          date: 'September 2014 - June 2018',
        },
        {
          id: uniqid(),
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
      const { educationalExperiences } = state;
      const educationalExperience = educationalExperiences[index];
      educationalExperience[value] = event.target.value;
      return {
        educationalExperiences,
      };
    });
  }

  render() {
    const { conditionallyRender } = this.props;
    const { handleChange } = this;
    const { educationalExperiences } = this.state;
    return (
      <div className="education">
        <h2>EDUCATION</h2>
        {educationalExperiences.map((experience, index) => (
          // Fixing bug where text was unfocused after each character: https://stackoverflow.com/questions/51268900/text-input-unfocused-after-one-character-react
          <div key={experience.id} className="education-section">
            {conditionallyRender(
              <strong>{educationalExperiences[index].major}</strong>,
              'input',
              educationalExperiences[index].major,
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
