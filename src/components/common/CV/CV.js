/* eslint-disable react/prop-types */
import React from 'react';
import './CV.css';
import Experience from '../../ui/Experience/Experience';
import Skills from '../../ui/Skills/Skills';
import Qualifications from '../../ui/Qualifications/Qualifications';
import Education from '../../ui/Education/Education';
import Profile from '../Profile/Profile';

const practicalExperiences = [
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
];

const educationalExperiences = [
  {
    school: 'University name - Location',
    major: 'Masters in Computer Science',
    date: 'September 2019 - June 2020',
  },
  {
    school: 'University name - Location',
    major: 'B.S. Computer Science',
    date: 'September 2014 - June 2018',
  },
  {
    school: 'London High School',
    major: 'N/A',
    date: 'September 2010 - June 2014',
  },
];

const skills = [
  'HTML',
  'CSS',
  'Javascript',
  'React',
  'Tailwind CSS',
  'GraphQL',
  'Next.js',
  'Node.js',
  'Express.js',
  'MongoDB',
];

const qualifications = [
  'Won USMCD Hackathon',
  'Best Designer Award of 2014',
  'Certificate of Completion for AWS',
];

class CV extends React.Component {
  render() {
    const { conditionallyRender, submitted } = this.props;
    return (
      <div className="curriculum-vitae">
        <div className="curriculum-vitae-container">
          <h2>CURRICULUM VITAE</h2>
          <Profile
            submitted={submitted}
            conditionallyRender={conditionallyRender}
          />
          <div className="curriculum-vitae-grid">
            <Experience
              title="PRACTICAL EXPERIENCE"
              experiences={practicalExperiences}
              submitted={submitted}
              conditionallyRender={conditionallyRender}
            />
            <Education
              educationalExperiences={educationalExperiences}
              conditionallyRender={conditionallyRender}
            />
            <Skills skills={skills} />
            <Qualifications qualifications={qualifications} />
          </div>
        </div>
      </div>
    );
  }
}

export default CV;
