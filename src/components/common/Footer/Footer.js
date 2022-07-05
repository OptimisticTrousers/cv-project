import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <a href="https://github.com/OptimisticTrousers">
          Created by Tony Isern
        </a>
        <a
          href="https://www.flaticon.com/free-icons/layout"
          title="layout icons"
        >
          Layout icons created by Freepik - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/web-development"
          title="web development icons"
        >
          Web development icons created by Eucalyp - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/document"
          title="document icons"
        >
          Document icons created by Freepik - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/branding"
          title="branding icons"
        >
          Branding icons created by Eucalyp - Flaticon
        </a>
      </footer>
    );
  }
}

export default Footer;
