/* eslint-disable react/prop-types */
import React from 'react';
import './Qualifications.css';
import uniqid from 'uniqid';

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
    return (
      <div className="qualifications">
        <h2>QUALIFICATIONS</h2>
        {qualifications.map((qualification, index) => (
          <p key={qualification.id}>{qualification.qualification}</p>
        ))}
      </div>
    );
  }
}

export default Qualifications;
