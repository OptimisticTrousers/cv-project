/* eslint-disable react/prop-types */
import React from 'react';
import './Profile.css';

class Profile extends React.Component {
  render() {
    const { name, description, portfolio, email, phoneNumber, location } =
      this.props;
    return (
      <div className="head">
        <h2>{name}</h2>
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
