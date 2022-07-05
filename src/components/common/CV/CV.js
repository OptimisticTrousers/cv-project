import React from 'react';
import './CV.css';
import Experience from '../../ui/Experience/Experience';
import Skills from '../../ui/Skills/Skills';

const practicalExperience = [
  {
    company: 'OptimisticTrouser',
    position: 'Software Engineer',
    description:
      'Adipisicing qui dolor duis officia nostrud laborum eu ea consectetur. Enim mollit ut tempor qui mollit. Sint magna sit elit officia exercitation nisi commodo in consectetur.',
    date: 'December 2021 - Present',
  },
  {
    company: 'OptimisticTrouser',
    position: 'Software Engineer',
    description:
      'Adipisicing qui dolor duis officia nostrud laborum eu ea consectetur. Enim mollit ut tempor qui mollit. Sint magna sit elit officia exercitation nisi commodo in consectetur.',
    date: 'December 2021 - Present',
  },
  {
    company: 'OptimisticTrouser',
    position: 'Software Engineer',
    description:
      'Adipisicing qui dolor duis officia nostrud laborum eu ea consectetur. Enim mollit ut tempor qui mollit. Sint magna sit elit officia exercitation nisi commodo in consectetur.',
    date: 'December 2021 - Present',
  },
];

const educationalExperience = [
  {
    school: 'Optimistic University',
    major: 'Computer Science',
    date: 'Dec 2015 - June 2019',
  },
  {
    school: 'Optimistic University',
    major: 'Computer Science',
    date: 'Dec 2015 - June 2019',
  },
  {
    school: 'Optimistic University',
    major: 'Computer Science',
    date: 'Dec 2015 - June 2019',
  },
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
            <Experience />
            <Skills />
            <Experience />
          </div>
        </div>
      </div>
    );
  }
}

export default CV;