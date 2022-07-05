/* eslint-disable react/prop-types */
import React from 'react';

class Input extends React.Component {
  render() {
    const { value } = this.props;
    return <input required value={value} />;
  }
}
