import React from 'react';
import './Hello.css';
import profilePicture from '../../../assets/optimistictrousers.jpg';

class Hello extends React.Component {
  render() {
    return (
      <div className="hello-background">
        <div className="hello">
          <div className="hello-image">
            <img src={profilePicture} alt="applicant" />
          </div>
          <h2 className="hello-greeting">HELLO, I AM OPTIMISTIC TROUSERS</h2>
          <p className="hello-about">
            Sunt exercitation aute sit amet consequat deserunt nostrud anim
            consequat ea laborum aute. Est laboris magna consectetur esse eu
            sint minim. Culpa exercitation amet sunt ex. Deserunt fugiat mollit
            ipsum commodo ea nisi eu incididunt sit magna commodo in sint
            commodo. Aliqua nostrud incididunt Lorem quis et. Amet sunt laborum
            officia fugiat. Nostrud consectetur laboris minim voluptate fugiat
            excepteur sit sint aliqua nisi eu cillum nostrud culpa. Enim
            incididunt est veniam laborum sit aute consectetur mollit.
          </p>
        </div>
      </div>
    );
  }
}

export default Hello;
