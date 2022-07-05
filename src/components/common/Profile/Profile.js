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

    const { handleChange, conditionallyRender } = this;

    return (
      <div className="head">
        {conditionallyRender(<h2>{name}</h2>, name, 'name')}
        <div className="overview">
          <p className="overview-description">{description}</p>
          <div className="contact">
            <div className="contact-item">
              <p>Portfolio </p>
              {conditionallyRender(<a>{portfolio}</a>, portfolio, 'portfolio')}
            </div>
            <div className="contact-item">
              <p>Email</p>
              {conditionallyRender(<a>{email}</a>, email, 'email', 'email')}
            </div>
            <div className="contact-item">
              <p>Phone</p>
              {conditionallyRender(
                <a>{phoneNumber}</a>,
                phoneNumber,
                'phoneNumber'
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
