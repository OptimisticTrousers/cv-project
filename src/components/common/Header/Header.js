/* eslint-disable react/prop-types */
import React from 'react';
import './Header.css';

export default function Header(props) {
  const [personDetails, setPersonDetails] = React.useState({
    name: 'Optimistic Trousers',
    occupancy: 'A Software Engineer based in New York City, NY',
  });
  function handleChange(event, value) {
    setPersonDetails((prevState) => ({
      ...prevState,
      [value]: event.target.value,
    }));
  }

  const { conditionallyRender } = props;
  const { name, occupancy } = personDetails;
  return (
    <div className="header">
      <div className="introduction">
        <p className="i-am">I AM</p>
        <div className="inputs">
          {conditionallyRender(
            <h1>{name}</h1>,
            'input',
            name,
            'name',
            handleChange
          )}
          {conditionallyRender(
            <p className="occupation">{occupancy}</p>,
            'input',
            occupancy,
            'occupancy',
            handleChange
          )}
        </div>
      </div>
    </div>
  );
}
