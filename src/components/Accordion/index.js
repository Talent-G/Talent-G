/* eslint-disable indent */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-quotes */
import React, { useState } from 'react';
import Button from '../Button/index';
import './styles.css';

const Accordion = () => {
    const accordionData = {
        title: 'Section 1',
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem.`,
        };
        const { title, content } = accordionData;

  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className='accordion'>
        <div className="accordion-item">
          <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
            <div>{title}</div>
            <div>{isActive ? '-' : '+'}</div>
          </div>
          {isActive && <div className="accordion-content">{content}</div>}
        </div>
      </div>
      <Button />
    </>
  );
};

export default Accordion;

