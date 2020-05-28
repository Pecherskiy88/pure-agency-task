import React from 'react';

import Title from '../../atoms/Title';
import FinalBlock from '../FinalBlock';

import s from './style.module.css';

const LastStep = () => {
  return (
    <>
      <Title text="Ready to see your score?" />
      <p className={s.description}>
        We value a freedom of choice. You can pick our pre-selected PRO
        specially for you or find one on your own. You decide.
      </p>
      <div className={s.finalBlock}>
        <FinalBlock />
      </div>
    </>
  );
};

export default LastStep;
