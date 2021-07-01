import ReactDom from 'react-dom';
import React from 'react';
import './styles.css';
import Form from '../Form';
import ListStudents from '../StudentList';

export default function Modal({ componente, children, css, open }) {
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
        ) : componente === 'List_Students' ? (
          <div>
            {' '}
            <ListStudents />
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
