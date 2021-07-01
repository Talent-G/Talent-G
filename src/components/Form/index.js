import React, { useState } from 'react';
import './styles.css';
import Button from '../Button';
import avatar from './avatar.jpg';

export default function Form({ titulo }) {
  const primario = 'primary-button';

  const [user, setUser] = useState({
    nombre: '',
    apellido: '',
    sumary: '',
  });

  const enviar = (event) => {
    event.preventDefault();
    console.log(user);
  };

  const action = (event) => {
    event.preventDefault();
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <form className='form_body' onSubmit={enviar}>
        <div className='label_form'>
          <div className='cabecera'>
            <h1>
              {' '}
              {titulo}
              {' '}
            </h1>
            <div className=''>
              <img className='foto_avatar' src={avatar} alt='logo' />
            </div>
          </div>
          <label className='label_text label'> Nombre </label>
          <br />
          <input
            className='label text_input'
            onChange={action}
            value={user.nombre}
            name='nombre'
            type='text'
          />
          {' '}
          <br />
          <label className=' label_text label'> Apellido</label>
          <br />
          <input
            className='label text_input'
            name='apellido'
            onChange={action}
            value={user.apellido}
            type='text'
          />
          <br />
          <label className='label'> Sumary </label>
          <br />
          <textarea
            className='label text_area'
            onChange={action}
            value={user.sumary}
            name='sumary'
          />
        </div>
        <Button children='Guardar' tipo={primario} type='submit' />

      </form>
    </div>
  );
}
Form.defaultProps = {
  open: false,
  titulo: 'perfil',
};
