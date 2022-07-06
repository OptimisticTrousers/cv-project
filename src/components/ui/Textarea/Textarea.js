/* eslint-disable react/prop-types */
import React from 'react';
import './Textarea.css';

class Textarea extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return <textarea rows={5} value={value} required onChange={handleChange} />;
  }
}

export default Textarea;
