/* eslint-disable react/prop-types */
import React from 'react';

class Input extends React.Component {
  render() {
    const { value, handleChange, type } = this.props;
    if (type === 'file') {
      return <input type={type} onChange={handleChange} value={value} />;
    }
    return <input type={type} required onChange={handleChange} value={value} />;
  }
}

Input.defaultProps = {
  type: 'text',
};

export default Input;
