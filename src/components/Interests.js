import React from 'react';
import './Interests.css';
import monitor from '../../public/assets/monitor.png';
import website from '../../public/assets/website.png';
import contract from '../../public/assets/contract.png';
import branding from '../../public/assets/branding.png';
import Interest from './Interest';

class Interests extends React.Component {
  render() {
    return (
      <div className="interests">
        <h2>THINGS I LIKE TO DO</h2>
        <div className="interests-container">
          <Interest
            image={monitor}
            title="RESPONSIVE WEB DESIGN"
            description="Sunt proident mollit qui ullamco. Nisi cillum consectetur pariatur
              veniam consectetur quis ex occaecat pariatur dolor irure non
              cillum. Incididunt elit elit laboris aliqua eiusmod excepteur ex
              magna id est labore eiusmod ad laborum. Laboris ea culpa cillum
              incididunt velit nostrud id ipsum esse aliqua pariatur labore
              incididunt."
          />
          <Interest
            image={website}
            title="WEB DEVELOPMENT"
            description="
              Sunt proident mollit qui ullamco. Nisi cillum consectetur pariatur
              veniam consectetur quis ex occaecat pariatur dolor irure non
              cillum. Incididunt elit elit laboris aliqua eiusmod excepteur ex
              magna id est labore eiusmod ad laborum. Laboris ea culpa cillum
              incididunt velit nostrud id ipsum esse aliqua pariatur labore
              incididunt.
          "
          />
          <Interest
            image={contract}
            title="PRINT DESIGN"
            description="

              Sunt proident mollit qui ullamco. Nisi cillum consectetur pariatur
              veniam consectetur quis ex occaecat pariatur dolor irure non
              cillum. Incididunt elit elit laboris aliqua eiusmod excepteur ex
              magna id est labore eiusmod ad laborum. Laboris ea culpa cillum
              incididunt velit nostrud id ipsum esse aliqua pariatur labore
              incididunt.
          "
          />
          <Interest
            image={branding}
            title="BRANDING"
            description="
              Sunt proident mollit qui ullamco. Nisi cillum consectetur pariatur
              veniam consectetur quis ex occaecat pariatur dolor irure non
              cillum. Incididunt elit elit laboris aliqua eiusmod excepteur ex
              magna id est labore eiusmod ad laborum. Laboris ea culpa cillum
              incididunt velit nostrud id ipsum esse aliqua pariatur labore
              incididunt.
          "
          />
        </div>
      </div>
    );
  }
}

export default Interests;
