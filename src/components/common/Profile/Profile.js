/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
import './Profile.css';
import Input from '../../ui/Input/input';
import Textarea from '../../ui/Textarea/Textarea';

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
    this.conditionallyRenderInput = this.conditionallyRenderInput.bind(this);
  }

  handleChange(event, value) {
    this.setState({
      [value]: event.target.value,
    });
  }

  conditionallyRender(...args) {
    const { submitted } = this.props;

    const { submittedComponent, inputType, value, propName } = args;
    return submitted ? (
      submittedComponent
    ) : inputType === 'input' ? (
      <Input
        value={value}
        handleChange={(event) => this.handleChange(event, propName)}
        type={args.type}
      />
    ) : (
      <Textarea
        value={value}
        handleChange={(event) => this.handleChange(event, propName)}
      />
    );
  }

  conditionallyRenderInput(submittedComponent, value, propName, type = 'text') {
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

  conditionallyRenderTextArea(submittedComponent, value, propName) {
    const { submitted } = this.props;
    return submitted ? submittedComponent : <Textarea value={value} />;
  }

  render() {
    const { name, description, portfolio, email, phoneNumber, location } =
      this.state;

    const { conditionallyRenderInput } = this;

    return (
      <div className="head">
        {conditionallyRenderInput(<h2>{name}</h2>, name, 'name')}
        <div className="overview">
          <p className="overview-description">{description}</p>,
          <div className="contact">
            <div className="contact-item">
              <p>Portfolio </p>
              {conditionallyRenderInput(
                <a>{portfolio}</a>,
                portfolio,
                'portfolio'
              )}
            </div>
            <div className="contact-item">
              <p>Email</p>
              {conditionallyRenderInput(
                <a>{email}</a>,
                email,
                'email',
                'email'
              )}
            </div>
            <div className="contact-item">
              <p>Phone</p>
              {conditionallyRenderInput(
                <a>{phoneNumber}</a>,
                phoneNumber,
                'phoneNumber'
              )}
            </div>
            <div className="contact-item">
              <p>Location</p>
              {conditionallyRenderInput(
                <a>{location}</a>,
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
