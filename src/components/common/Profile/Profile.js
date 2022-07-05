/* eslint-disable react/prop-types */
import React from 'react';
import './Profile.css';
import Input from '../../ui/Input/input';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      description: props.description,
      portfolio: props.portfolio,
      email: props.email,
      phoneNumber: props.phoneNumber,
      location: props.location,
      submitted: props.submitted,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value) {
    this.setState({
      [value]: event.target.value,
    });
  }

  render() {
    const {
      name,
      description,
      portfolio,
      email,
      phoneNumber,
      location,
      submitted,
    } = this.state;

    return (
      <div className="head">
        {submitted ? (
          <h2>{name}</h2>
        ) : (
          <Input
            value={name}
            handleChange={(event) => this.handleChange(event, 'name')}
          />
        )}
        <div className="overview">
          <p className="overview-description">{description}</p>
          <div className="contact">
            <div className="contact-item">
              <p>Portfolio </p>
              {submitted ? (
                <a>{portfolio}</a>
              ) : (
                <Input
                  value={portfolio}
                  handleChange={(event) =>
                    this.handleChange(event, 'portfolio')
                  }
                />
              )}
            </div>
            <div className="contact-item">
              <p>Email</p>
              <a>{email}</a>
            </div>
            <div className="contact-item">
              <p>Phone</p>
              <a>{phoneNumber}</a>
            </div>
            <div className="contact-item">
              <p>Location</p>
              <a>{location}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;