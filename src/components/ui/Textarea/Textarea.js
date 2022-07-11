/* eslint-disable react/prop-types */
import React from 'react';
import './Textarea.css';

export default function Textarea(props) {
  const { value, handleChange } = props;
  return <textarea rows={5} value={value} required onChange={handleChange} />;
}
