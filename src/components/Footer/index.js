import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { stepSelector } from '../../redux/selectors/questionnaireSelectors';
import { setStep } from '../../redux/actions/questionnaireActions';

import Button from '../../atoms/Button';

import s from './style.module.css';

const Footer = () => {
  const currentStep = useSelector((state) => stepSelector(state));
  const dispatch = useDispatch();

  const handleNextClick = () => {
    if (currentStep !== 0 && currentStep < 4) {
      const nextStep = currentStep + 1;
      dispatch(setStep(nextStep));
    }
  };

  const handlePrevClick = () => {
    if (currentStep > 1 && currentStep <= 4) {
      const prevStep = currentStep - 1;
      dispatch(setStep(prevStep));
    }
  };

  return (
    <footer className={s.footer}>
      <div className={s.buttonsRow}>
        <Button name="Back" type="secondary" handleClick={handlePrevClick} />
        <Button name="Next step" type="primary" handleClick={handleNextClick} />
      </div>
    </footer>
  );
};

export default Footer;
