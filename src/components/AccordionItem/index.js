/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-quotes */
import React, { useState } from 'react';
import Chevron from '../../statics/right-chevron.png';
import './styles.css';

const AccordionItem = ({ title, content }) => {

  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className='accordion'>
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <img className='toggle' src={Chevron} aria-expanded={isActive} alt='Toggle Accordion' />
          <span>{title}</span>
        </div>
        {/* {isActive && <div className="accordion-content" aria-expanded={!isActive}>{content}</div>} */}
        <div className="accordion-content" aria-expanded={!isActive}>{content}</div>
      </div>
    </>
  );
};

export default AccordionItem;

