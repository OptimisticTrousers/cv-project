/* eslint-disable react/prop-types */
import React from 'react';
import './Experience.css';
import uniqid from 'uniqid';
import Button from '../Button/Button';

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
      const { practicalExperiences } = state;
      const practicalExperience = practicalExperiences[index];
      practicalExperience[value] = event.target.value;
      return {
        practicalExperiences,
      };
    });
  }

  addPracticalExperience() {
    const defaultEducation = {
      id: uniqid(),
      company: 'New Company',
      position: 'New Position',
      description:
        'Dolor voluptate ad voluptate laborum officia duis veniam. Officia Lorem adipisicing ad in cupidatat sunt do consequat proident Lorem. Voluptate labore adipisicing Lorem dolor adipisicing ut. Amet labore pariatur labore anim aliquip esse irure labore esse incididunt amet sint. Cillum ipsum esse eu ex anim ea ipsum incididunt aliquip officia labore minim ut. Reprehenderit laboris dolore Lorem do laborum tempor. Occaecat ea irure officia laborum tempor Lorem cillum adipisicing aliqua ullamco duis deserunt.',
      dateFrom: new Date().toDateInputValue(),
      dateTo: new Date().toDateInputValue(),
    };
    this.setState((state) => ({
      practicalExperiences: [...state.practicalExperiences, defaultEducation],
    }));
  }

  deletePracticalExperience(id) {
    this.setState((state) => ({
      practicalExperiences: state.practicalExperiences.filter(
        (element) => element.id !== id
      ),
    }));
  }

  render() {
    const { conditionallyRender, submitted } = this.props;
    const { practicalExperiences } = this.state;
    const { addPracticalExperience, deletePracticalExperience, handleChange } =
      this;
    return (
      <div className="experience">
        <h2>EXPERIENCES</h2>
        <Button
          handleClick={() => addPracticalExperience()}
          textContent="Add Practical Experience"
          submitted={submitted}
        />
        {practicalExperiences.map((experience, index) => (
          <div key={experience.id} className="experience-container">
            <div className="experience-position">
              <div className="company-position">
                <h3>{experience.company}</h3>
                <span>{experience.position}</span>
              </div>
              <p>
                <span className="date">{experience.dateFrom}</span> -{' '}
                <span className="date">{experience.dateTo}</span>
              </p>
            </div>
            {conditionallyRender(
              <p className="experience-description">
                {experience.description}
              </p>,
              'textarea',
              practicalExperiences[index].description,
              'description',
              handleChange,
              index
            )}
            <Button
              handleClick={() => deletePracticalExperience(experience.id)}
              textContent="Delete Practical Experience"
              submitted={submitted}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Experience;
