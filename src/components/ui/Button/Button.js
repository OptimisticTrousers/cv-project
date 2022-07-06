/* eslint-disable react/prop-types */
import React from 'react';
import './Button.css';

class Button extends React.Component {
  render() {
    const { handleClick, textContent } = this.props;
    return (
      <button className="modify" type="button" onClick={handleClick}>
        {textContent}
      </button>
    );
  }
}

export default Button;
