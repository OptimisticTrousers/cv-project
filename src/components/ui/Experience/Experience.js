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
          id: uniqid(),
          company: 'Cloud.com',
          position: 'Senior Software Engineer',
          description:
            'Adipisicing qui dolor duis officia nostrud laborum eu ea consectetur. Enim mollit ut tempor qui mollit. Sint magna sit elit officia exercitation nisi commodo in consectetur.Enim ullamco amet aliqua incididunt dolor deserunt. Sint ea ipsum consectetur sit. Ipsum commodo fugiat officia ut enim culpa occaecat nisi fugiat elit cupidatat pariatur. Sint ad laboris pariatur cillum ad commodo magna mollit nostrud nulla culpa exercitation fugiat.',
          dateFrom: '2021-12-06',
          dateTo: new Date().toDateInputValue(),
        },
        {
          id: uniqid(),
          company: 'OptimisticTrouser',
          position: 'Web Developer',
          description:
            'Adipisicing qui dolor duis officia nostrud laborum eu ea consectetur. Enim mollit ut tempor qui mollit. Sint magna sit elit officia exercitation nisi commodo in consectetur.Enim ullamco amet aliqua incididunt dolor deserunt. Sint ea ipsum consectetur sit. Ipsum commodo fugiat officia ut enim culpa occaecat nisi fugiat elit cupidatat pariatur. Sint ad laboris pariatur cillum ad commodo magna mollit nostrud nulla culpa exercitation fugiat.',
          dateFrom: '2019-07-16',
          dateTo: '2021-11-25',
        },
        {
          id: uniqid(),
          company: 'OptimisticTrouser',
          position: 'Junior Developer',
          description:
            'Adipisicing qui dolor duis officia nostrud laborum eu ea consectetur. Enim mollit ut tempor qui mollit. Sint magna sit elit officia exercitation nisi commodo in consectetur.Enim ullamco amet aliqua incididunt dolor deserunt. Sint ea ipsum consectetur sit. Ipsum commodo fugiat officia ut enim culpa occaecat nisi fugiat elit cupidatat pariatur. Sint ad laboris pariatur cillum ad commodo magna mollit nostrud nulla culpa exercitation fugiat.',
          dateFrom: '2018-01-28',
          dateTo: '2019-07-12',
        },
        {
          id: uniqid(),
          company: 'OptimisticTrouser',
          position: 'Junior Developer',
          description:
            'Adipisicing qui dolor duis officia nostrud laborum eu ea consectetur. Enim mollit ut tempor qui mollit. Sint magna sit elit officia exercitation nisi commodo in consectetur.Enim ullamco amet aliqua incididunt dolor deserunt. Sint ea ipsum consectetur sit. Ipsum commodo fugiat officia ut enim culpa occaecat nisi fugiat elit cupidatat pariatur. Sint ad laboris pariatur cillum ad commodo magna mollit nostrud nulla culpa exercitation fugiat.',
          dateFrom: '2018-01-28',
          dateTo: '2019-07-12',
        },
        {
          id: uniqid(),
          company: 'OptimisticTrouser',
          position: 'Junior Developer',
          description:
            'Adipisicing qui dolor duis officia nostrud laborum eu ea consectetur. Enim mollit ut tempor qui mollit. Sint magna sit elit officia exercitation nisi commodo in consectetur.Enim ullamco amet aliqua incididunt dolor deserunt. Sint ea ipsum consectetur sit. Ipsum commodo fugiat officia ut enim culpa occaecat nisi fugiat elit cupidatat pariatur. Sint ad laboris pariatur cillum ad commodo magna mollit nostrud nulla culpa exercitation fugiat.',
          dateFrom: '2018-01-28',
          dateTo: '2019-07-12',
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.addPracticalExperience = this.addPracticalExperience.bind(this);
    this.deletePracticalExperience = this.deletePracticalExperience.bind(this);
  }

  handleChange(event, value, index) {
    this.setState((state) => {
      const { educationalExperiences } = state;
      const educationalExperience = educationalExperiences[index];
      educationalExperience[value] = event.target.value;
      return {
        educationalExperiences,
      };
    });
  }

  addPracticalExperience() {
    const defaultEducation = {
      id: uniqid(),
      company: 'New Company',
      position: 'New Position',
      dateFrom: new Date().toDateInputValue(),
      dateTo: new Date().toDateInputValue(),
    };
    this.setState((state) => ({
      educationalExperiences: [
        ...state.educationalExperiences,
        defaultEducation,
      ],
    }));
  }

  deletePracticalExperience(id) {
    this.setState((state) => ({
      educationalExperiences: state.educationalExperiences.filter(
        (element) => element.id !== id
      ),
    }));
  }

  render() {
    const { conditionallyRender } = this.props;
    const { practicalExperiences } = this.state;
    return (
      <div className="experience">
        <h2>EXPERIENCES</h2>
        {practicalExperiences.map((experience) => (
          <div key={experience.id} className="experience-container">
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
