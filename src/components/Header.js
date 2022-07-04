import React from 'react';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="introduction">
          <p className="i-am">I AM</p>
          <h1>Tom Newton</h1>
          <p className="occupation">
            A Digital Designer based in London, England.
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
