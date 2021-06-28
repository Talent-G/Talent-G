import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainInfo from '../../components/MainInfo';
import InfoProfile from '../../components/InfoProfile';
import Feedback from '../../components/Feedback';
import AsideButton from '../../components/AsideButton';

import './styles.css';

function Dashboard() {
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
            <Feedback />
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
