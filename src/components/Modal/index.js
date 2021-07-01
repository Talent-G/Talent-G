import ReactDom from 'react-dom';
import React from 'react';
import './styles.css';
import Form from '../Form';
//import Accordion from '../Accordion';

export default function Modal({ componente, children, open }) {
  //const [abierto, setAbierto] = useState(true);

  if (!open) return null;
  return ReactDom.createPortal(
    <div className='Padre-modal'>
      <div className='perfil_modal'>
        {componente === 'Formulario' ? (
          <div>
            <Form />
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
            Aqui va el accorden
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
