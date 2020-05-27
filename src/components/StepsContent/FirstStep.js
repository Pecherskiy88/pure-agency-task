import React from 'react';

import Title from '../../atoms/Title';
import Radio from '../../atoms/Radio';

import s from './style.module.css';

const questionsArray = [
  { text: 'Employed', value: 10, id: 1 },
  { text: 'Unemployed', value: 20, id: 2 },
  { text: 'Self-employed', value: 30, id: 3 },
];

const FirstStep = () => {
  const renderItems =
    questionsArray.length > 0
      ? questionsArray.map((el) => (
          <div className={s.item} key={el.id}>
            <Radio />
            <span className={s.itemText}>{el.text}</span>
          </div>
        ))
      : [];

  return (
    <>
      <div className={s.titleBlock}>
        <Title text="What is your employment status?" />
      </div>
      <div className={s.list}>{renderItems}</div>
    </>
  );
};

export default FirstStep;
