import React from 'react';
import { useSelector } from 'react-redux';

import { stepSelector } from '../../redux/selectors/questionnaireSelectors';

import ProgressBar from '../../atoms/ProgressBar';

import s from './style.module.css';

const Header = () => {
  const currentStep = useSelector((state) => stepSelector(state));
  return (
    <div className={s.headerBlock}>
      <div className={s.header} />
      <ProgressBar currentStep={currentStep} />
    </div>
  );
};

export default Header;
