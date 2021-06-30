import React from 'react';
import { useForm } from 'react-hook-form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import arrowLogo from '../statics/G.png';

import './styles.css';

const eye = <FontAwesomeIcon icon={faEye} />;

function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
            <input
              name='username'
              type='text'
              placeholder='Username'
              ref={register({ required: 'This is required.' })}
            />
            <div className='pass-wrapper'>
              <input
                placeholder='Password'
                name='password'
                type='password'
                ref={register({ required: 'This is required.' })}
              />
              <i>{eye}</i>
            </div>
            <button type='submit' onClick={handleSubmit(onSubmit)}>
              Submit
            </button>
          </div>
          <div className='form__button'>
            button
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
