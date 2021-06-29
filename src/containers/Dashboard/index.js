import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainInfo from '../../components/MainInfo';
import InfoProfile from '../../components/InfoProfile';
import Feedback from '../../components/Feedback';
import AsideButton from '../../components/AsideButton';
import Survey from '../../components/Survey';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

import './styles.css';

function Dashboard() {
  const color = ['rgba(0,0,0,0)', 'rgba(54,54,54,0.77)'];
  const [open, setOpen] = useState(false);
  const [colorTransparent, setColorTransparent] = useState(color[0]);
  const [component, setComponent] = useState('');
  const changePropierties = () => {
    setOpen(!open);
    if (open === true) { setColorTransparent(color[0]); }
    if (open === false) { setColorTransparent(color[1]); }
  };

  const actionModal = (componentName) => {
    setComponent(componentName);
    changePropierties();
  };
  const verModal = (component) => {
    return (
      <Modal componente={component} open={open}>
        <Button callback={changePropierties} type='secondary-button'> Cerrar </Button>
      </Modal>
    );

  };

  return (
    <div className='dashboard' style={{ backgroundColor: colorTransparent }}>
      <Header />
      <div className='dashboard__container'>
        <div className='dashboard-grid'>
          <section className='dashboard__userCard'>
            <InfoProfile />
          </section>
          <section className='dashboard__main'>
            <MainInfo />
          </section>
          <section className='dashboard__buttons wrapper'>
            <AsideButton lbl='Editar Perfil' action={() => actionModal('Formulario')} />
            <AsideButton lbl='Ver Agenda' action={() => actionModal('--')} />
            <AsideButton lbl='Ver Feedback' action={() => actionModal('List_Students')} />
          </section>
          <section className='dashboard__feedback'>
            <Feedback />
          </section>
          <section className='dashboard__survey'>
            <Survey />
          </section>
        </div>
      </div>
      <Footer />
      {verModal(component)}
    </div>
  );
}

export default Dashboard;
