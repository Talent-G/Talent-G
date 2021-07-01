import React from 'react';
import arrowLogo from '../statics/arrow-logo.png';
import './styles.css';

function Header(props) {
  const { action } = props;
  return (
    <header>
      <nav className='header-nav'>
        <h1>Talent G</h1>
        <img className='header__logo' src={arrowLogo} alt='arrow' />
        <a href='/'>Mi bootcamp</a>
        <span className='header__buton' role='dialog' type='button' onClick={action}>Mi Perfil</span>
      </nav>
    </header>
  );
}

export default Header;
