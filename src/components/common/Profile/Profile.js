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
    };

    this.handleChange = this.handleChange.bind(this);
    this.conditionallyRender = this.conditionallyRender.bind(this);
  }

  handleChange(event, value) {
    this.setState({
      [value]: event.target.value,
    });
  }

  conditionallyRender(submittedComponent, value, propName, type = 'text') {
    const { submitted } = this.props;
    return submitted ? (
      submittedComponent
    ) : (
      <Input
        value={value}
        handleChange={(event) => this.handleChange(event, propName)}
        type={type}
      />
    );
  }

  render() {
    const { name, description, portfolio, email, phoneNumber, location } =
      this.state;

    const { submitted } = this.props;

    const { handleChange } = this;

    return (
      <div className="head">
        {submitted ? (
          <h2>{name}</h2>
        ) : (
          <Input
            value={name}
            handleChange={(event) => handleChange(event, 'name')}
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
                  handleChange={(event) => handleChange(event, 'portfolio')}
                />
              )}
            </div>
            <div className="contact-item">
              <p>Email</p>
              {submitted ? (
                <a>{email}</a>
              ) : (
                <Input
                  value={email}
                  handleChange={(event) => handleChange(event, 'email')}
                  type="email"
                />
              )}
            </div>
            <div className="contact-item">
              <p>Phone</p>
              {submitted ? (
                <a>{phoneNumber}</a>
              ) : (
                <Input
                  value={phoneNumber}
                  handleChange={(event) => handleChange(event, 'phoneNumber')}
                />
              )}
            </div>
            <div className="contact-item">
              <p>Location</p>
              {submitted ? (
                <a>{location}</a>
              ) : (
                <Input
                  value={location}
                  handleChange={(event) => handleChange(event, 'location')}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
