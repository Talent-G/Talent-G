import React, { useState } from 'react';
import './styles.css';
import Button from '../Button';
import avatar from './avatar.jpg';

export default function Form({ titulo }) {
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
              Perfil
              {' '}
            </h1>
            <div className=''>
              <img className='foto_avatar' src={avatar} alt='logo' />
            </div>
          </div>
          <div className='text_contet'>
            <label htmlFor='nombre' className='label_text label'> Nombre </label>
            <br />
            <input
              className='label text_input'
              onChange={action}
              id='nombre'
              value={user.nombre}
              name='nombre'
              type='text'
            />
            {' '}
            <br />
            <label htmlFor='apellido' className=' label_text label'> Apellido</label>
            <br />
            <input
              className='label text_input'
              name='apellido'
              id='apellido'
              onChange={action}
              value={user.apellido}
              type='text'
            />
            <br />
            <label htmlFor='sumary' className='label'> Summary </label>
            <br />
            <textarea
              className='label text_area'
              id='sumary'
              onChange={action}
              value={user.sumary}
              name='sumary'
            />
            <Button callback={enviar} type='primary-button'> Guardar</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
Form.defaultProps = {
  open: false,
  titulo: 'perfil',
};
