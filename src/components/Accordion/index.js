/* eslint-disable indent */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-quotes */
import React from 'react';
import AccordionItem from '../AccordionItem';
import './styles.css';

const Accordion = ({ headTitle, content }) => {

  return (
    <>
      <div>
        <h1>{headTitle}</h1>
        <div className="accordion">
          {content.map(({ title, content }) => (
            <AccordionItem title={title} content={content} />
          ))}
        </div>
      </div>
    </>
  );
};

Accordion.defaultProps = {
  headTitle: 'Accordion Group Title',
  content: [{
    title: 'Accordion Element',
    content: 'Lorem ipsum dolor sit amet, quis culpa elit eiusmod incididunt voluptate elit irure ipsum nisi',
    }],
  };

export default Accordion;
