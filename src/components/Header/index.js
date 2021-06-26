import React from 'react';
import arrowLogo from '../statics/arrow-logo.png';
import './styles.css';

function Header() {
  return (
    <header>
      <nav className='header-nav'>
        <h1>Talent G</h1>
        <img className='header__logo' src={arrowLogo} alt='arrow' />
        <a href='/'>Mi bootcamp</a>
        <a href='/'>Mi Perfil</a>
      </nav>
    </header>
  );
}

export default Header;
