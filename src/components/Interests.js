import React from 'react';
import './Interests.css';
import monitor from '../images/monitor.png';
import website from '../images/website.png';

class Interests extends React.Component {
  render() {
    return (
      <div className="interests">
        <h2>THINGS I LIKE TO DO</h2>
        <div className="interests-container">
          <div className="interest">
            <img src={monitor} alt="monitor" />
            <h3>RESPONSIVE WEB DESIGN</h3>
            <p>
              Sunt proident mollit qui ullamco. Nisi cillum consectetur pariatur
              veniam consectetur quis ex occaecat pariatur dolor irure non
              cillum. Incididunt elit elit laboris aliqua eiusmod excepteur ex
              magna id est labore eiusmod ad laborum. Laboris ea culpa cillum
              incididunt velit nostrud id ipsum esse aliqua pariatur labore
              incididunt.
            </p>
          </div>
          <div className="interest">
            <img src={website} alt="website" />
            <h3>WEB DEVELOPMENT</h3>
            <p>
              Sunt proident mollit qui ullamco. Nisi cillum consectetur pariatur
              veniam consectetur quis ex occaecat pariatur dolor irure non
              cillum. Incididunt elit elit laboris aliqua eiusmod excepteur ex
              magna id est labore eiusmod ad laborum. Laboris ea culpa cillum
              incididunt velit nostrud id ipsum esse aliqua pariatur labore
              incididunt.
            </p>
          </div>
          <div className="interest">
            <img alt="document" />
            <h3>PRINT DESIGN</h3>
            <p>
              Sunt proident mollit qui ullamco. Nisi cillum consectetur pariatur
              veniam consectetur quis ex occaecat pariatur dolor irure non
              cillum. Incididunt elit elit laboris aliqua eiusmod excepteur ex
              magna id est labore eiusmod ad laborum. Laboris ea culpa cillum
              incididunt velit nostrud id ipsum esse aliqua pariatur labore
              incididunt.
            </p>
          </div>
          <div className="interest">
            <img alt="light-bulb" />
            <h3>BRANDING</h3>
            <p>
              Sunt proident mollit qui ullamco. Nisi cillum consectetur pariatur
              veniam consectetur quis ex occaecat pariatur dolor irure non
              cillum. Incididunt elit elit laboris aliqua eiusmod excepteur ex
              magna id est labore eiusmod ad laborum. Laboris ea culpa cillum
              incididunt velit nostrud id ipsum esse aliqua pariatur labore
              incididunt.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Interests;
