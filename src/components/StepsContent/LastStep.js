import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { makeTotalAmount } from '../../helpers';

import {
  employmentSelector,
  proprietorshipsSelector,
  filingStatusSelector,
} from '../../redux/selectors/questionnaireSelectors';

import Title from '../../atoms/Title';
import FinalBlock from '../FinalBlock';

import s from './style.module.css';

const LastStep = () => {
  const employmentValue = useSelector((state) => employmentSelector(state));
  const multiplier = useSelector((state) => proprietorshipsSelector(state));
  const filingStatusData = useSelector((state) => filingStatusSelector(state));

  const [price, setPrice] = useState(0);

  useEffect(() => {
    setPrice(makeTotalAmount(employmentValue, multiplier, filingStatusData));
  }, [employmentValue, multiplier, filingStatusData]);

  return (
    <>
      <Title text="Ready to see your score?" />
      <p className={s.description}>
        We value a freedom of choice. You can pick our pre-selected PRO
        specially for you or find one on your own. You decide.
      </p>
      <div className={s.finalBlock}>
        <FinalBlock price={price} />
      </div>
    </>
  );
};

export default LastStep;
