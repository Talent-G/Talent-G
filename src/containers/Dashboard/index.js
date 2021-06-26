import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainInfo from '../MainInfo';
import './styles.css';

function Dashboard() {
  return (
    <div className='dashboard-grid'>
      <Header />
      <MainInfo className='Main_info' />
      <Footer />
    </div>
  );
}

export default Dashboard;
