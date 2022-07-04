import React from 'react';
import './Hello.css';
import profilePicture from '../images/optimistictrousers.jpg';

class Hello extends React.Component {
  render() {
    return (
      <div className="hello-background">
        <div className="hello">
          <div className="image">
            <img src={profilePicture} alt="applicant" />
          </div>
          <h2>Hello, I am Optimistic Trousers</h2>
          <p>
            Sunt exercitation aute sit amet consequat deserunt nostrud anim
            consequat ea laborum aute. Est laboris magna consectetur esse eu
            sint minim. Culpa exercitation amet sunt ex. Deserunt fugiat mollit
            ipsum commodo ea nisi eu incididunt sit magna commodo in sint
            commodo. Aliqua nostrud incididunt Lorem quis et.
          </p>
        </div>
      </div>
    );
  }
}

export default Hello;
