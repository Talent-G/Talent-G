import React, { Fragment } from 'react';
import './styles.css';

const AsideButton = (props) => {
  const { action, lbl } = props;

  return (
    <>
      <div className='aside_button'>
        <a href={action} className='aside-button__text'>
          {lbl}
          <svg
            width='36'
            height='36'
            viewBox='0 0 36 36'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='aside-button__arrow'
          >
            <path d='M15 9L12.885 11.115L19.755 18L12.885 24.885L15 27L24 18L15 9Z' />
          </svg>
        </a>
      </div>
    </>
  );
};

AsideButton.defaultProps = {
  action: '/',
  lbl: 'Button Label',
};

export default AsideButton;
