import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './styles.css';

export default function MainInfo({ children, title: day, content, resources }) {

  const [dataInfo, setDataInfo] = useState({});
  if (!dataInfo) {
    return null;
  }
  const listTasks = content.list_tasks.map((task) => (
    <li>
      {' '}
      {task}
    </li>
  ));
  const listResources = dataInfo?.content?.resourceDTOList.map((recurso) => (
    <li>
      <a href='todo:replaceRoute'>
        {' '}
        {recurso.summary}
        {' '}
      </a>
    </li>
  ));

  useEffect(() => {
    axios.get('http://proyectofinalbootcamp-env.eba-nmb4rsib.us-east-2.elasticbeanstalk.com/schedule/1')
      .then((response) => {
        console.log(response);
        setDataInfo(response.data);
      });
  }, []);

  return (
    <div className='main__info '>
      <div className='main__card wrapper'>
        <div className='main__left'>
          <div className='text__container'>
            <h1 className='main__title'>
              {`Día ${dataInfo?.content?.day} - ${dataInfo?.content?.topic}`}
            </h1>
            <div className='main_content'>
              {dataInfo?.content?.summary}
              <ol className='main__classes'>{listTasks}</ol>
            </div>
            <div className='main__resources'>
              <span className='text-bold'>Recursos:</span>
              <ul className='main__resources__list'>{listResources}</ul>
            </div>
          </div>
        </div>
        <div className='main__right'>
          <div className='image__container'>
            <img className='main__image' src={content.image} alt={day} />
            <figcaption className='main__trainer'>
              <span className='text-bold'>Trainer:</span>
              {' '}
              <span className='text-primary'>{content.trainer}</span>
            </figcaption>
          </div>
        </div>
      </div>
    </div>
  );
}

MainInfo.defaultProps = {
  title: 'Día 1 - CSS',
  content: {
    caption: 'Aprenderemos los conceptos core sobre css:',
    list_tasks: [
      'Qué es el CCSOM y su importancia',
      'Qué son los selectores y la especificidad.',
      'Cómo declarar los estilos en una hoja de estilos',
      'Propiedades para realizar layouting',
      'Flexbox',
      'Grid Css',
    ],
    image: 'https://via.placeholder.com/755x375',
    trainer: 'Juan Crisóstomo',
  },
  resources: ['What is flex?', 'Understanding Grid layout', 'Css selectors'],
};
