import React from 'react';

import './styles.css';

const BotomCard = ({ children }) => {
  return (
    <div className='botomcard-container'>
      {children}
    </div>
  );
};

export default BotomCard;
