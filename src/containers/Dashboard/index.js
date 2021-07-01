/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainInfo from '../../components/MainInfo';
import InfoProfile from '../../components/InfoProfile';
import Feedback from '../../components/Feedback';
import AsideButton from '../../components/AsideButton';
import Survey from '../../components/Survey';
import Modal from '../../components/Modal';

import './styles.css';

function Dashboard() {
  const [open, setOpen] = useState(false);
  const [component, setComponent] = useState('');
  const actionModal = (componentName) => {
    setComponent(componentName);
    setOpen(!open);
  };
  const verModal = (component) => {
    return (
      <Modal componente={component} open={open}>
        <Button callback={() => setOpen(!open)} type='secondary-button'> Cerrar </Button>
      </Modal>
    );

  };

  return (
    <div className='dashboard'>
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
            <AsideButton lbl='Editar Perfil' />
            <AsideButton lbl='Ver Agenda' />
            <AsideButton lbl='Ver Feedback' />
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
    </div>
  );
}

export default Dashboard;
