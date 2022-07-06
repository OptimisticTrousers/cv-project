/* eslint-disable react/prop-types */
import React from 'react';
import './Qualifications.css';
import uniqid from 'uniqid';
import Button from '../Button/Button';

class Qualifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      qualifications: [
        { qualification: 'Won USMCD Hackathon', id: uniqid() },
        { qualification: 'Best Designer Award of 2014', id: uniqid() },
        { qualification: 'Certificate of Completion for AWS', id: uniqid() },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.addQualification = this.addQualification.bind(this);
    this.deleteQualification = this.deleteQualification.bind(this);
  }

  handleChange(event) {
    this.setState((state) => {
      const { qualifications } = state;
      qualifications.qualification = event.target.value;
      return {
        qualifications,
      };
    });
  }

  addQualification() {
    const defaultEducation = {
      qualification: 'New Qualification',
      id: uniqid(),
    };
    this.setState((state) => ({
      qualifications: [...state.qualifications, defaultEducation],
    }));
  }

  deleteQualification(id) {
    this.setState((state) => ({
      qualifications: state.qualifications.filter(
        (element) => element.id !== id
      ),
    }));
  }

  render() {
    const { qualifications } = this.state;
    const { conditionallyRender, submitted } = this.props;
    const { deleteQualification, addQualification, handleChange } = this;
    return (
      <div className="qualifications">
        <h2>QUALIFICATIONS</h2>
        <Button
          handleClick={() => addQualification()}
          textContent="Add Qualification"
          submitted={submitted}
        />
        {qualifications.map((qualification, index) => (
          <div>
            {conditionallyRender(
              <p key={qualification.id}>{qualification.qualification}</p>,
              'input',
              qualification.qualification,
              'qualification',
              handleChange,
              index
            )}
            <Button
              handleClick={() => deleteQualification(qualification.id)}
              textContent="Delete Qualification"
              submitted={submitted}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Qualifications;
