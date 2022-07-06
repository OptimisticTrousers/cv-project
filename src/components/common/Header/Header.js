import React from 'react';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Optimistic Trousers',
      occupancy: 'A Software Engineer based in New York City, NY',
    };
  }

  render() {
    const { conditionallyRender } = this.props;
    const { name, occupancy } = this.state;
    return (
      <div className="header">
        <div className="introduction">
          <p className="i-am">I AM</p>
          <h1>{name}</h1>
          <p className="occupation">{occupancy}</p>
        </div>
      </div>
    );
  }
}

export default Header;
