import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="introduction">
          <p className="i-am">I AM</p>
          <h1>Optimistic Trousers</h1>
          <p className="occupation">
            A Software Engineer based in New York City, NY.
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
