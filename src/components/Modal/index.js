import ReactDom from 'react-dom';
import React from 'react';
import './styles.css';
import Formulario from '../Formulario';

export default function Modal({ componente, children, css, open }) {
  //const [abierto, setAbierto] = useState(true);

  if (!open) return null;
  return ReactDom.createPortal(
    <div className={css}>
      {componente === 'Formulario' ? (
        <div>
          <Formulario titulo='Perfil' />
          {children}
        </div>
      ) : (
        <p> No le llego ningun componente al modal </p>
      )}
    </div>,
    document.getElementById('portal'),
  );
}

Modal.defaultProps = {
  css: 'perfil_modal',
  componente: '-',

};
