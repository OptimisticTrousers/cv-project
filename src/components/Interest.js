import React from 'react';

class Interest extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { image, title, description } = this.props;

    return (
      <div className="interest">
        <img src={monitor} alt="monitor" />
        <h3>RESPONSIVE WEB DESIGN</h3>
        <p>
          Sunt proident mollit qui ullamco. Nisi cillum consectetur pariatur
          veniam consectetur quis ex occaecat pariatur dolor irure non cillum.
          Incididunt elit elit laboris aliqua eiusmod excepteur ex magna id est
          labore eiusmod ad laborum. Laboris ea culpa cillum incididunt velit
          nostrud id ipsum esse aliqua pariatur labore incididunt.
        </p>
      </div>
    );
  }
}

export default Interest
