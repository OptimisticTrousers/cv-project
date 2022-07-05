import React from 'react';
import './CV.css';
import Experience from '../../ui/Experience/Experience';
import Skills from '../../ui/Skills/Skills';
import Qualifications from '../../ui/Qualifications/Qualifications';
import Education from '../../ui/Education/Education';

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
    return (
      <div className="curriculum-vitae">
        <div className="curriculum-vitae-container">
          <h2>CURRICULUM VITAE</h2>
          <div className="head">
            <h2>Optimistic Trousers</h2>
            <div className="overview">
              <p className="overview-description">
                Ea minim aute nulla reprehenderit dolore mollit qui veniam dolor
                sunt incididunt fugiat Lorem. Nisi culpa magna aute dolore
                consectetur ea aliqua eiusmod amet. Voluptate in enim ipsum amet
                id enim. Eiusmod mollit est pariatur ut do id occaecat aliqua
                aliqua. Culpa et est pariatur nostrud. Aliquip sint et
                exercitation sunt irure cupidatat duis. Ipsum non consectetur
                quis reprehenderit ex.
              </p>
              <div className="contact">
                <div className="contact-item">
                  <p>Portfolio </p>
                  <a>optimistictrousers.com</a>
                </div>
                <div className="contact-item">
                  <p>Email</p>
                  <a>theoptimistictrouser@protonmail.com</a>
                </div>
                <div className="contact-item">
                  <p>Phone</p>
                  <a>555-666-7777</a>
                </div>
                <div className="contact-item">
                  <p>Location</p>
                  <a>Earth</a>
                </div>
              </div>
            </div>
          </div>
          <div className="curriculum-vitae-grid">
            <Experience
              title="PRACTICAL EXPERIENCE"
              experiences={practicalExperiences}
            />
            <Education educationalExperiences={educationalExperiences} />
            <Skills skills={skills} />
            <Qualifications qualifications={qualifications} />
          </div>
        </div>
      </div>
    );
  }
}

export default CV;
