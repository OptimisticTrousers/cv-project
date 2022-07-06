/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
import './Profile.css';

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
  }

  render() {
    const { name, description, portfolio, email, phoneNumber, location } =
      this.state;

    const { conditionallyRender } = this.props;

    return (
      <div className="head">
        {conditionallyRender(<h2>{name}</h2>, 'input', name, 'name')}
        <div className="overview">
          {conditionallyRender(
            <p className="overview-description">{description}</p>,
            'textarea',
            description,
            'description'
          )}
          <div className="contact">
            <div className="contact-item">
              <p>Portfolio </p>
              {conditionallyRender(
                <a>{portfolio}</a>,
                'input',
                portfolio,
                'portfolio'
              )}
            </div>
            <div className="contact-item">
              <p>Email</p>
              {conditionallyRender(
                <a>{email}</a>,
                'input',
                email,
                'email',
                'email'
              )}
            </div>
            <div className="contact-item">
              <p>Phone</p>
              {conditionallyRender(
                <a>{phoneNumber}</a>,
                'input',
                phoneNumber,
                'phoneNumber'
              )}
            </div>
            <div className="contact-item">
              <p>Location</p>
              {conditionallyRender(
                <a>{location}</a>,
                'input',
                location,
                'location'
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
