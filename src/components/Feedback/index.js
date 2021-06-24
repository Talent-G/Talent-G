
import React from 'react'
import BottomCard from '../BottomCard'
import './styles.css'

const Feedback = ({title, asignments}) => {
  return(
    <>
`    <BottomCard >
      <div className="feedback-container">
        <span className="feedback-title">{title}</span>
        <ul>
            {asignments.map((asignment)=>(<li className="feedback-items" key={asignment.id}><a href='/'>{asignment.firstName} {asignment.lastName}</a></li>))}
        </ul>
      </div>
    </BottomCard>`
    </>
  )

}

Feedback.defaultProps={
  title: 'Feedback',
  asignments:[{id: 1,
            email: 'firstStudent@students.com',
            firstName: 'Eduardo',
            lastName: 'Torres',
            location: 'Guadalajara',
            summary: 'Es muy cool',
            training: 1,
            status: true
        },
        {
            id: 2,
            email: 'secondStudent@students.com',
            firstName: 'Jaime',
            lastName: 'Hurtado',
            location: 'Tuxtla Gutiérrez',
            summary: 'Es muy cool',
            training: 1,
            status: true
        },
        {
            id: 3,
            email: 'thirdStudent@students.com',
            firstName: 'Ruben',
            lastName: 'Carpinteyro',
            location: 'Puebla',
            summary: 'Es muy cool',
            training: 1,
            status: true
        }
    ]
}

export default Feedback;
