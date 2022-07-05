/* eslint-disable react/prop-types */
import React from 'react';

class Input extends React.Component {
  render() {
    const { value, handleChange, type } = this.props;
    return <input type={type} required onChange={handleChange} value={value} />;
  }
}

export default Input;
