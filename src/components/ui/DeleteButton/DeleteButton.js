/* eslint-disable react/prop-types */
import React from 'react';
import './DeleteButton.css';

class DeleteButton extends React.Component {
  render() {
    const { handleClick, textContent } = this.props;
    return (
      <button type="button" onClick={handleClick}>
        {textContent}
      </button>
    );
  }
}

export default DeleteButton;
