/* eslint-disable react/prop-types */
import React from 'react';

class Qualifications extends React.Component {
  render() {
    const { qualifications } = this.props;
    return (
      <div className="qualifications">
        {qualifications.map((qualification, index) => (
          <p key={index}>{qualification}</p>
        ))}
      </div>
    );
  }
}

export default Qualifications;
