/* eslint-disable react/prop-types */
import React from 'react';
import './Textarea.css';

class Textarea extends React.Component {
  render() {
    const { description } = this.props;
    return <textarea>{description}</textarea>;
  }
}

export default Textarea;
