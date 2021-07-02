import ReactDom from 'react-dom';
import React from 'react';
import Form from '../Form';
import Accordion from '../Accordion';
import Agenda from '../Agenda';
import './styles.css';

export default function Modal({ componente, children, open, cerrarModal }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <div className='Padre-modal'>
      <div className='perfil_modal'>
        {componente === 'Formulario' ? (
          <div>
            <Form cerrarModal={cerrarModal} />
            {children}
          </div>
        ) : componente === 'agenda' ? (
          <p>
            {' '}
            Agenda
            {children}
          </p>
        ) : componente === 'Feedback_Accordeon' ? (
          <div>
            {' '}
            <Accordion />
            {children}
          </div>
        ) : componente === 'Agenda' ? (
          <div>
            {' '}
            <Agenda />
            {children}
          </div>
        ) :
          (
            <p>
              {' '}
              No le llego ningun componente al modal
              {children}
            </p>
          )}
      </div>
    </div>,
    document.getElementById('portal'),
  );
}

Modal.defaultProps = {
  css: 'perfil_modal',
  componente: '-',

};
