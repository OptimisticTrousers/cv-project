/* eslint-disable react/prop-types */
import React from 'react';
import './Interest.css';

class Interest extends React.Component {
  constructor(props) {
    super(props);

    this.onImageChange = this.onImageChange.bind(this);
  }



  render() {
    // eslint-disable-next-line react/prop-types
    const {
      image,
      title,
      description,
      handleChange,
      conditionallyRender,
      index,
    } = this.props;

    return (
      <div className="interest">
        <img src={image} alt="monitor" />
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
