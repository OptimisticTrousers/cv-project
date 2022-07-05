import React from 'react';
import './Interest.css';

class Interest extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { image, title, description } = this.props;

    return (
      <div className="interest">
        <img src={image} alt="monitor" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
}

export default Interest;
