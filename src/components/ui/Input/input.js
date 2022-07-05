/* eslint-disable react/prop-types */
import React from 'react';

class Input extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return <input required onChange={handleChange} value={value} />;
  }
}

export default Input;
