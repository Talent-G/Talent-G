import React, { useState } from 'react';
import arrowLogo from '../statics/arrow-logo.png';
import './styles.css';
import Button from '../Button';
import Modal from '../Modal';

function Header() {
  const [component, setComponent] = useState('');
  const [open, setOpen] = useState(false);
  const actionModal = (componentName) => {
    setComponent(componentName);
    setOpen(!open);
  };
  const verModal = (component) => (
    <Modal componente={component} open={open}>
      <Button callback={() => setOpen(!open)} type='secondary-button'> Cerrar </Button>
    </Modal>
  );

  return (
    <header>
      <nav className='header-nav'>
        <h1>Talent G</h1>
        <img className='header__logo' src={arrowLogo} alt='arrow' />
        <a href='/'>Mi bootcamp</a>
        <boton className='header__buton' type='button' onClick={() => actionModal('Formulario')}>Mi Perfil</boton>
      </nav>
      {verModal(component)}
    </header>
  );
}

export default Header;
