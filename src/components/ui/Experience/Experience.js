/* eslint-disable react/prop-types */
import React from 'react';
import './Experience.css';
import uniqid from 'uniqid';

class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      practicalExperiences: [
        {
          company: 'Cloud.com',
          position: 'Senior Software Engineer',
          description:
            'Adipisicing qui dolor duis officia nostrud laborum eu ea consectetur. Enim mollit ut tempor qui mollit. Sint magna sit elit officia exercitation nisi commodo in consectetur.Enim ullamco amet aliqua incididunt dolor deserunt. Sint ea ipsum consectetur sit. Ipsum commodo fugiat officia ut enim culpa occaecat nisi fugiat elit cupidatat pariatur. Sint ad laboris pariatur cillum ad commodo magna mollit nostrud nulla culpa exercitation fugiat.',
          date: 'December 2021 - Present',
        },
        {
          company: 'OptimisticTrouser',
          position: 'Web Developer',
          description:
            'Adipisicing qui dolor duis officia nostrud laborum eu ea consectetur. Enim mollit ut tempor qui mollit. Sint magna sit elit officia exercitation nisi commodo in consectetur.Enim ullamco amet aliqua incididunt dolor deserunt. Sint ea ipsum consectetur sit. Ipsum commodo fugiat officia ut enim culpa occaecat nisi fugiat elit cupidatat pariatur. Sint ad laboris pariatur cillum ad commodo magna mollit nostrud nulla culpa exercitation fugiat.',
          date: 'July 2019 - November 2021',
        },
        {
          company: 'OptimisticTrouser',
          position: 'Junior Developer',
          description:
            'Adipisicing qui dolor duis officia nostrud laborum eu ea consectetur. Enim mollit ut tempor qui mollit. Sint magna sit elit officia exercitation nisi commodo in consectetur.Enim ullamco amet aliqua incididunt dolor deserunt. Sint ea ipsum consectetur sit. Ipsum commodo fugiat officia ut enim culpa occaecat nisi fugiat elit cupidatat pariatur. Sint ad laboris pariatur cillum ad commodo magna mollit nostrud nulla culpa exercitation fugiat.',
          date: 'January 2018 - July 2019',
        },
        {
          company: 'OptimisticTrouser',
          position: 'Junior Developer',
          description:
            'Adipisicing qui dolor duis officia nostrud laborum eu ea consectetur. Enim mollit ut tempor qui mollit. Sint magna sit elit officia exercitation nisi commodo in consectetur.Enim ullamco amet aliqua incididunt dolor deserunt. Sint ea ipsum consectetur sit. Ipsum commodo fugiat officia ut enim culpa occaecat nisi fugiat elit cupidatat pariatur. Sint ad laboris pariatur cillum ad commodo magna mollit nostrud nulla culpa exercitation fugiat.',
          date: 'January 2018 - July 2019',
        },
        {
          company: 'OptimisticTrouser',
          position: 'Junior Developer',
          description:
            'Adipisicing qui dolor duis officia nostrud laborum eu ea consectetur. Enim mollit ut tempor qui mollit. Sint magna sit elit officia exercitation nisi commodo in consectetur.Enim ullamco amet aliqua incididunt dolor deserunt. Sint ea ipsum consectetur sit. Ipsum commodo fugiat officia ut enim culpa occaecat nisi fugiat elit cupidatat pariatur. Sint ad laboris pariatur cillum ad commodo magna mollit nostrud nulla culpa exercitation fugiat.',
          date: 'January 2018 - July 2019',
        },
      ],
    };
  }

  render() {
    const { conditionallyRender } = this.props;
    const { practicalExperiences } = this.state;
    return (
      <div className="experience">
        <h2>EXPERIENCES</h2>
        {practicalExperiences.map((experience) => (
          <div key={uniqid()} className="experience-container">
            <div className="experience-position">
              <h3>
                {experience.company} <span>{experience.position}</span>
              </h3>
              <p>{experience.date}</p>
            </div>
            <p className="experience-description">{experience.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Experience;
