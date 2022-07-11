/* eslint-disable react/prop-types */
import React from 'react';
import './Button.css';

export default function Button(props) {
  const { handleClick, textContent, submitted } = props;
  return (
    !submitted && (
      <button className="modify" type="button" onClick={handleClick}>
        {textContent}
      </button>
    )
  );
}
