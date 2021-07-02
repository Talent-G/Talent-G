import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import fetchSchedule from '../../redux/actions/fetchSchedule';
import fetchHomework from '../../redux/actions/fetchHomework';
import './styles.css';

function MainInfo({ summary, day, topic, resourceDTOList, firstName, lastName }) {
  const [scheduleDay, setScheduleDay] = useState(1);
  const dispatch = useDispatch();

  const listResources = resourceDTOList?.map((recurso) => (
    <li>
      <a href='todo:replaceRoute'>
        {' '}
        {recurso.summary}
        {' '}
      </a>
    </li>
  ));

  useEffect(() => {
    dispatch(fetchSchedule(scheduleDay));
    dispatch(fetchHomework(scheduleDay));
  }, [scheduleDay]);

  return (
    <div className='main__info '>
      <button type='button' onClick={() => setScheduleDay(scheduleDay + 1)}>Next</button>
      <div className='main__card wrapper'>
        <div className='main__left'>
          <div className='text__container'>
            <h1 className='main__title'>
              {`Día ${day} - ${topic}`}
            </h1>
            <div className='main_content'>
              <ol className='main__classes'>{summary}</ol>
            </div>
            <div className='main__resources'>
              <span className='text-bold'>Recursos:</span>
              <ul className='main__resources__list'>{listResources}</ul>
            </div>
          </div>
        </div>
        <div className='main__right'>
          <div className='image__container'>
            <img className='main__image' src='https://via.placeholder.com/755x375' alt={day} />
            <figcaption className='main__trainer'>
              <span className='text-bold'>Trainer:</span>
              {' '}
              <span className='text-primary'>{`${firstName} ${lastName}`}</span>
            </figcaption>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    day: state?.schedule?.content?.day,
    topic: state?.schedule?.content?.topic,
    summary: state?.schedule?.content?.summary,
    firstName: state?.schedule?.content?.trainerDTO?.firstName,
    lastName: state?.schedule?.content?.trainerDTO?.lastName,
    resourceDTOList: state?.schedule?.content?.resourceDTOList,
  };
};

export default connect(mapStateToProps, null)(MainInfo);
