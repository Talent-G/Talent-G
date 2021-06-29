import React, { useState } from 'react';
import './styles.css';
import Button from '../Button';

export default function SecondForm({ title, dayNumber, classTheme }) {
  const primario = 'primary-button';

  const [description, setDescription] = useState('');

  const enviar = (event) => {
    event.preventDefault();

  };

  const action = (event) => {
    event.preventDefault();
    setDescription(event.target.value);
  };

  console.log(description);

  return (
    <div>
      <form className='form_body' onSubmit={enviar}>
        <div className='label_form'>

          <div className='header'>
            <h1>
              {' '}
              {title}
              {' '}
            </h1>
          </div>

          <span>
            Día
            {dayNumber}
            {' '}
            -
            {classTheme}
          </span>
          <br />

          <label htmlFor='summary' className='label_summary' />
          <br />
          <textarea
            className='label text_area'
            placeholder='Summary...'
            onChange={action}
            value={description}
            name='summary'
          />

          <select>
            <option value='trainer'>Trainer..</option>
            <option value='Miguel Romero'>Miguel Romero</option>
            <option value='Ruben Pantoja'>Rúben Pantoja</option>
            <option value='Ad Quintero'>Ad Quintero</option>
          </select>

        </div>

        <Button children='Guardar' tipo={primario} type='submit' />
      </form>
    </div>
  );
}
SecondForm.defaultProps = {
  open: false,
  classTheme: 'CSS',
  dayNumber: '1',
  title: 'Agenda',
};

