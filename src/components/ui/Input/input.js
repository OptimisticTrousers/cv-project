/* eslint-disable react/prop-types */
import React from 'react';

export default function Input(props) {
  const { value, handleChange, type } = props;
  if (type === 'file') {
    return <input type={type} onChange={handleChange} value={value} />;
  }
  return <input type={type} required onChange={handleChange} value={value} />;
}

Input.defaultProps = {
  type: 'text',
};
