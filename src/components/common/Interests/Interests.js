/* eslint-disable react/prop-types */
import React from 'react';
import './Interests.css';
import uniqid from 'uniqid';
import monitor from '../../../assets/monitor.png';
import website from '../../../assets/website.png';
import contract from '../../../assets/contract.png';
import branding from '../../../assets/branding.png';
import Interest from '../../ui/Interest/Interest';

class Interests extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      interests: [
        {
          id: uniqid(),
          image: monitor,
          title: 'RESPONSIVE WEB DESIGN',
          description: `Sunt proident mollit qui ullamco. Nisi cillum consectetur pariatur veniam consectetur quis ex occaecat pariatur dolor irure non cillum. Incididunt elit elit laboris aliqua eiusmod excepteur ex magna id est labore eiusmod ad laborum. Laboris ea culpa cillum incididunt velit nostrud id ipsum esse aliqua pariatur labore incididunt.
    `,
        },
        {
          id: uniqid(),
          image: website,
          title: 'WEB DEVELOPMENT',
          description: `Sunt proident mollit qui ullamco. Nisi cillum consectetur pariatur veniam consectetur quis ex occaecat pariatur dolor irure non cillum. Incididunt elit elit laboris aliqua eiusmod excepteur ex magna id est labore eiusmod ad laborum. Laboris ea culpa cillum incididunt velit nostrud id ipsum esse aliqua pariatur labore incididunt.
    `,
        },
        {
          id: uniqid(),
          image: contract,
          title: 'PRINT DESIGN',
          description: `Sunt proident mollit qui ullamco. Nisi cillum consectetur pariatur veniam consectetur quis ex occaecat pariatur dolor irure non cillum. Incididunt elit elit laboris aliqua eiusmod excepteur ex magna id est labore eiusmod ad laborum. Laboris ea culpa cillum incididunt velit nostrud id ipsum esse aliqua pariatur labore incididunt.
    `,
        },
        {
          id: uniqid(),
          image: branding,
          title: 'BRANDING',
          description: `Sunt proident mollit qui ullamco. Nisi cillum consectetur pariatur veniam consectetur quis ex occaecat pariatur dolor irure non cillum. Incididunt elit elit laboris aliqua eiusmod excepteur ex magna id est labore eiusmod ad laborum. Laboris ea culpa cillum incididunt velit nostrud id ipsum esse aliqua pariatur labore incididunt.
    `,
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value, index) {
    this.setState((state) => {
      const { interests } = state;
      const interest = interests[index];
      interest[value] = event.target.value;
      return {
        interests,
      };
    });
  }

  render() {
    const { interests } = this.state;
    const { conditionallyRender } = this.props;
    const { handleChange } = this;
    return (
      <div className="interests">
        <h2>THINGS I LIKE TO DO</h2>
        <div className="interests-container">
          {interests.map((interest, index) => (
            <Interest
              key={interest.id}
              image={interest.image}
              title={interest.title}
              description={interest.description}
              handleChange={handleChange}
              conditionallyRender={conditionallyRender}
              index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Interests;
