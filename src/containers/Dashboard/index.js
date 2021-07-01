import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainInfo from '../../components/MainInfo';
import InfoProfile from '../../components/InfoProfile';
import Feedback from '../../components/Feedback';
import AsideButton from '../../components/AsideButton';
import Survey from '../../components/Survey';
import Accordion from '../../components/Accordion';

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
            <Survey />
          </section>
        </div>
        <Accordion
          headTitle='Agenda'
          content={[
            {
              title: 'Dia 1 - Css',
              content: 'eu deserunt irure esse ut',
            },
            {
              title: 'Dia 2 - HTML Semantico',
              content: 'eu deserunt irure esse ut',
            },
            {
              title: 'Dia 3 - Js Basics',
              content: 'eu deserunt irure esse ut',
            },
          ]}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
