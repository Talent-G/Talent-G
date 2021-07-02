
import React from 'react';
import { connect } from 'react-redux';
import BottomCard from '../BottomCard';
import './styles.css';

const Feedback = ({ title, homework }) => {
  return (
    <>
      <BottomCard>
        <div className='feedback-container'>
          <span className='feedback-title'>{title}</span>
          <ul className='feedback-items'>
            {homework.map((asignment) => (
              <li className='feedback-item' key={asignment.id}>
                <a href='/'>
                  {asignment.homeworkName}
                  {' '}
                  -
                  {' '}
                  {asignment.feedback}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </BottomCard>
    </>
  );

};

Feedback.defaultProps = {
  title: 'Feedback',
  asignments: [{ id: 1,
    homeworkName: 'Tarea',
    feedback: 'Magazine Layout',
    status: true,
  },
  {
    id: 2,
    homeworkName: 'Tarea',
    feedback: 'Codewars Katas',
    status: true,
  },
  {
    id: 3,
    homeworkName: 'Tarea',
    feedback: 'Puzzle JS',
    status: true,
  },
  ],
};

const mapStateToProps = (state) => {
  return {
    homework: state?.homework?.content,
  };
};

export default connect(mapStateToProps, null)(Feedback);
