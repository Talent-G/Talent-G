import React from 'react';
import ProfileData from '../ProfileData';
import Profile from '../../statics/user_icon_512px.png';
import './styles.css';

function InfoProfile({ name, rol, bootcamp, location, image }) {

  return (
    <div className='wrapper profile'>
      <div className='profile__image'>
        <img alt='profile' src={image} />
      </div>
      <ProfileData name={name} rol={rol} />
      <div className='profile__info'>
        <div className='info__container sidebar'>
          <h2>Bootcamp</h2>
          <span>{bootcamp}</span>
        </div>
        <div className='info__container'>
          <h2>Ubicacion</h2>
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}

InfoProfile.defaultProps = {
  name: 'Miguel Romero',
  rol: 'Trainer',
  bootcamp: 'Web UI',
  location: 'CDMX',
  image: Profile,
};

export default InfoProfile;
