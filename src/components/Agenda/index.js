import React from 'react';
import Icon from '../../statics/icon.png';
import './styles.css';

function Agenda({ tipo, contenido }) {
  const action = () => {
    console.log('Se dio clic');
  };
  const listAgendaStudent = contenido.map((dia) => (
    <li key={dia}>
      {dia}
      <hr />
      {' '}
    </li>
  ));
  const listAgendaTrainer = contenido.map((dia) => (
    <li key={dia}>
      {dia}
      <img className='Agenda__icon' onClick={action} src={Icon} alt='Icon' />
      <hr />
      {' '}
    </li>
  ));
  function SwitchAgenda() {
    switch (tipo) {
      case 'student': return (
        <div>
          <h2>agenda</h2>
          <ul>
            {listAgendaStudent}
          </ul>
        </div>
      );
      case 'trainer': return (
        <div>
          <h2>Agenda</h2>
          <ul>
            {listAgendaTrainer}
          </ul>
        </div>
      );
      default: return (
        <div>
          Nunca deberia llegar aqui, ten cuidado si esto pasa D:
        </div>
      );
    }
  };

  return (
    <div>
      {SwitchAgenda()}
    </div>
  );
}
Agenda.defaultProps = {
  contenido: [' Dia 1 - Css', 'Dia 2 - HTML Semantico', 'Dia 3 -Js Basics'],
  tipo: 'trainer',

};

export default Agenda;
