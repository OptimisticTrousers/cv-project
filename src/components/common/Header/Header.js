/* eslint-disable react/prop-types */
import React from 'react';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Optimistic Trousers',
      occupancy: 'A Software Engineer based in New York City, NY',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value) {
    this.setState({
      [value]: event.target.value,
    });
  }

  render() {
    const { conditionallyRender } = this.props;
    const { name, occupancy } = this.state;
    const { handleChange } = this;
    return (
      <div className="header">
        <div className="introduction">
          <p className="i-am">I AM</p>
          {conditionallyRender(
            <h1>{name}</h1>,
            'input',
            name,
            'name',
            handleChange
          )}
          {conditionallyRender(
            <p className="occupation">{occupancy}</p>,
            'input',
            occupancy,
            'occupancy',
            handleChange
          )}
        </div>
      </div>
    );
  }
}

export default Header;
