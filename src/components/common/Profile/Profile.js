/* eslint-disable react/prop-types */
import React from 'react';
import './Profile.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'OptimisticTrousers',
      description:
        'Ea minim aute nulla reprehenderit dolore mollit qui veniam dolor sunt incididunt fugiat Lorem. Nisi culpa magna aute dolore consectetur ea aliqua eiusmod amet. Voluptate in enim ipsum amet id enim. Eiusmod mollit est pariatur ut do id occaecat aliqua aliqua. Culpa et est pariatur nostrud. Aliquip sint et exercitation sunt irure cupidatat duis. Ipsum non consectetur quis reprehenderit ex.',
      portfolio: 'optimistictrousers.com',
      email: 'theoptimistictrouser@protonmail.com',
      phoneNumber: '555-666-7777',
      location: 'Earth',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value) {
    this.setState({
      [value]: event.target.value,
    });
  }

  render() {
    const { name, description, portfolio, email, phoneNumber, location } =
      this.state;

    const { conditionallyRender } = this.props;

    const { handleChange } = this;

    return (
      <div className="head">
        {conditionallyRender(
          <h2>{name}</h2>,
          'input',
          name,
          'name',
          handleChange
        )}
        <div className="overview">
          {conditionallyRender(
            <p className="overview-description">{description}</p>,
            'textarea',
            description,
            'description',
            handleChange
          )}
          <div className="contact">
            <div className="contact-item">
              <p>Portfolio </p>
              {conditionallyRender(
                <a>{portfolio}</a>,
                'input',
                portfolio,
                'portfolio',
                handleChange
              )}
            </div>
            <div className="contact-item">
              <p>Email</p>
              {conditionallyRender(
                <a>{email}</a>,
                'input',
                email,
                'email',
                handleChange,
                'email'
              )}
            </div>
            <div className="contact-item">
              <p>Phone</p>
              {conditionallyRender(
                <a>{phoneNumber}</a>,
                'input',
                phoneNumber,
                'phoneNumber',
                handleChange
              )}
            </div>
            <div className="contact-item">
              <p>Location</p>
              {conditionallyRender(
                <a>{location}</a>,
                'input',
                location,
                'location',
                handleChange
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
