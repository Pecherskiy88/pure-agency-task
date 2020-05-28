import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setEmploymentStatus } from '../../redux/actions/questionnaireActions';
import { employmentSelector } from '../../redux/selectors/questionnaireSelectors';

import Title from '../../atoms/Title';
import Radio from '../../atoms/Radio';

import s from './style.module.css';

const FirstStep = () => {
  const dispatch = useDispatch();
  const employmentValue = useSelector((state) => employmentSelector(state));

  const handleChange = (event) => {
    const { value } = event.target;
    dispatch(setEmploymentStatus(Number(value)));
  };

  return (
    <>
      <Title text="What is your employment status?" />
      <div className={s.list}>
        <div className={s.item}>
          <Radio
            checked={employmentValue === 10 ? true : false}
            value={10}
            onChange={handleChange}
          />
          <span className={s.itemText}>Employed</span>
        </div>
        <div className={s.item}>
          <Radio
            checked={employmentValue === 20 ? true : false}
            value={20}
            onChange={handleChange}
          />
          <span className={s.itemText}>Unemployed</span>
        </div>
        <div className={s.item}>
          <Radio
            checked={employmentValue === 30 ? true : false}
            value={30}
            onChange={handleChange}
          />
          <span className={s.itemText}>Self-employed</span>
        </div>
      </div>
    </>
  );
};

export default FirstStep;
