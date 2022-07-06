/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './Education.css';
import uniqid from 'uniqid';
import DeleteButton from '../DeleteButton/DeleteButton';

class Education extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      educationalExperiences: [
        {
          id: uniqid(),
          school: 'University name - Location',
          major: 'Masters in Computer Science',
          dateFrom: '2019-09-01',
          dateTo: '2020-05-13',
        },
        {
          id: uniqid(),
          school: 'University name - Location',
          major: 'B.S. Computer Science',
          dateFrom: '2014-09-01',
          dateTo: '2018-05-13',
        },
        {
          id: uniqid(),
          school: 'London High School',
          major: 'N/A',
          dateFrom: '2010-09-06',
          dateTo: '2014-06-21',
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.deleteEducationalExperience =
      this.deleteEducationalExperience.bind(this);
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

  deleteEducationalExperience(id) {
    this.setState((state) => ({
      educationalExperiences: state.educationalExperiences.filter(
        (element) => element.id !== id
      ),
    }));
  }

  render() {
    const { conditionallyRender } = this.props;
    const { handleChange, deleteEducationalExperience } = this;
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
            {conditionallyRender(
              <p className="school">{educationalExperiences[index].school}</p>,
              'input',
              educationalExperiences[index].school,
              'school',
              handleChange,
              index
            )}
            {conditionallyRender(
              <p>{educationalExperiences[index].dateFrom}</p>,
              'input',
              educationalExperiences[index].dateFrom,
              'dateFrom',
              handleChange,
              index,
              'date'
            )}
            <p className="to">TO</p>
            {conditionallyRender(
              <p>{educationalExperiences[index].dateTo}</p>,
              'input',
              educationalExperiences[index].dateTo,
              'dateTo',
              handleChange,
              index,
              'date'
            )}
            <DeleteButton
              handleClick={() => deleteEducationalExperience(experience.id)}
              textContent="Delete Educational Experience"
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Education;
