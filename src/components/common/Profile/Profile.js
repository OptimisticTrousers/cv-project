/* eslint-disable react/prop-types */
import React from 'react';
import './Profile.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
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
    } = this.props;

    const { value } = this.state;
    return (
      <div className="head">
        {submitted ? (
          <h2>{value}</h2>
        ) : (
          <input onChange={this.handleChange} value={value} />
        )}
        <div className="overview">
          <p className="overview-description">{description}</p>
          <div className="contact">
            <div className="contact-item">
              <p>Portfolio </p>
              <a>{portfolio}</a>
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
