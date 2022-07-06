/* eslint-disable react/prop-types */
import React from 'react';
import './Hello.css';
import profilePicture from '../../../assets/optimistictrousers.jpg';

class Hello extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      greeting: 'HELLO, I AM OPTIMISTIC TROUSERS',
      about:
        'Sunt exercitation aute sit amet consequat deserunt nostrud anim consequat ea laborum aute. Est laboris magna consectetur esse eu sint minim. Culpa exercitation amet sunt ex. Deserunt fugiat mollit ipsum commodo ea nisi eu incididunt sit magna commodo in sint commodo. Aliqua nostrud incididunt Lorem quis et. Amet sunt laborum officia fugiat. Nostrud consectetur laboris minim voluptate fugiat excepteur sit sint aliqua nisi eu cillum nostrud culpa. Enim incididunt est veniam laborum sit aute consectetur mollit.',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value) {
    this.setState({
      [value]: event.target.value,
    });
  }

  render() {
    const { greeting, about } = this.state;
    const { conditionallyRender } = this.props;
    const { handleChange } = this;
    return (
      <div className="hello-background">
        <div className="hello">
          <div className="hello-image">
            <img src={profilePicture} alt="applicant" />
          </div>
          <div className="inputs">
            {conditionallyRender(
              <h2 className="hello-greeting">{greeting}</h2>,
              'input',
              greeting,
              'greeting',
              handleChange
            )}
            {conditionallyRender(
              <p className="hello-about">{about}</p>,
              'textarea',
              about,
              'about',
              handleChange
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Hello;
