/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import arrowLogo from '../statics/G.png';
import Button from '../Button';

import './styles.css';

const eye = <FontAwesomeIcon icon={faEye} />;

function Login() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const [passwordInput, setInput] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const switchInput = (input) => {
    setInput(input);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className='Login__component'>
      <div className='login__container'>
        <div className='form'>
          <div className='form__logo'>
            <span className='form__logo--title'>Talent</span>
            <img src={arrowLogo} alt='logo' />
          </div>
          <div className='form__input'>
            {!passwordInput ? (
              <div className='form__input--container'>
                <label htmlFor='name'>Dirección email</label>
                <input
                  id='name'
                  className='input'
                  {...register('username', { required: 'This is required.' })}
                  type='text'
                />
                <div className='form__button'>
                  <Button
                    type='primary-button'
                    callback={() => switchInput(!passwordInput)}
                  >
                    <span>Siguiente</span>
                  </Button>
                </div>
              </div>
            ) : (
              <div className='form__input--container'>
                <label htmlFor='password'>Contraseña</label>
                <input
                  id='password'
                  className='input'
                  {...register('password', { required: 'This is required.' })}
                  type={passwordShown ? 'text' : 'password'}
                />
                <i role='button' tabIndex={0} onClick={togglePasswordVisiblity}>
                  {eye}
                </i>
                <div className='form__button'>
                  <Button
                    type='primary-button'
                    callback={handleSubmit(onSubmit)}
                  >
                    <span>Iniciar Sesión</span>
                  </Button>
                  <Button
                    type='other'
                    callback={() => switchInput(!passwordInput)}
                  >
                    <span>Usar otra cuenta</span>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
