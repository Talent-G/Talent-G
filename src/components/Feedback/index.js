
import React from 'react';
import BottomCard from '../BottomCard';
import './styles.css';

const Feedback = ({ title, asignments }) => {
  return (
    <>
      <BottomCard>
        <div className='feedback-container'>
          <span className='feedback-title'>{title}</span>
          <ul className='feedback-items'>
            {asignments.map((asignment) => (
              <li className='feedback-item' key={asignment.id}>
                <a href='/'>
                  {asignment.type}
                  {' '}
                  -
                  {' '}
                  {asignment.description}
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
    type: 'Tarea',
    description: 'Magazine Layout',
    status: true,
  },
  {
    id: 2,
    type: 'Tarea',
    description: 'Codewars Katas',
    status: true,
  },
  {
    id: 3,
    type: 'Tarea',
    description: 'Puzzle JS',
    status: true,
  },
  ],
};

export default Feedback;
