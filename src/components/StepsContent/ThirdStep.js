import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setFilingStatus } from '../../redux/actions/questionnaireActions';
import { filingStatusSelector } from '../../redux/selectors/questionnaireSelectors';

import Title from '../../atoms/Title';
import CheckBox from '../../atoms/CheckBox';

import s from './style.module.css';

const ThirdStep = () => {
  const dispatch = useDispatch();
  const filingStatusData = useSelector((state) => filingStatusSelector(state));

  const { single, jointfly, separately, household, widow } = filingStatusData;

  const handleChange = (event) => {
    const { name, checked } = event.target;
    dispatch(setFilingStatus(name, checked));
  };

  return (
    <>
      <Title text="What best describes your filing status?" />
      <div className={s.list}>
        <div className={s.item}>
          <CheckBox onChange={handleChange} name="single" checked={single} />
          <span className={s.itemText}>Single</span>
        </div>
        <div className={s.item}>
          <CheckBox
            onChange={handleChange}
            checked={jointfly}
            name="jointfly"
          />
          <span className={s.itemText}>Married filing jointly</span>
        </div>
        <div className={s.item}>
          <CheckBox
            onChange={handleChange}
            checked={separately}
            name="separately"
          />
          <span className={s.itemText}>Married filing separately</span>
        </div>
        <div className={s.item}>
          <CheckBox
            onChange={handleChange}
            checked={household}
            name="household"
          />
          <span className={s.itemText}>Head of Household</span>
        </div>
        <div className={s.item}>
          <CheckBox onChange={handleChange} checked={widow} name="widow" />
          <span className={s.itemText}>
            Qualifying widow(-er) with dependent child
          </span>
        </div>
      </div>
    </>
  );
};

export default ThirdStep;
