/* eslint-disable react/prop-types */
import React from 'react';
import './Interest.css';

class Interest extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const {
      image,
      title,
      description,
      handleChange,
      conditionallyRender,
      index,
      onImageChange,
    } = this.props;

    return (
      <div className="interest">
        {conditionallyRender(
          <img src={image} alt="monitor" />,
          'input',
          undefined,
          'image',
          onImageChange,
          index,
          'file'
        )}
        {conditionallyRender(
          <h3>{title}</h3>,
          'input',
          title,
          'title',
          handleChange,
          index
        )}
        {conditionallyRender(
          <p>{description}</p>,
          'textarea',
          description,
          'description',
          handleChange,
          index
        )}
      </div>
    );
  }
}

export default Interest;
