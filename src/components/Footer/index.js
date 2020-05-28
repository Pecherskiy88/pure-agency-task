import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  stepSelector,
  employmentSelector,
} from '../../redux/selectors/questionnaireSelectors';
import { setStep } from '../../redux/actions/questionnaireActions';

import Button from '../../atoms/Button';

import s from './style.module.css';

const Footer = () => {
  const currentStep = useSelector((state) => stepSelector(state));
  const employmentValue = useSelector((state) => employmentSelector(state));
  const dispatch = useDispatch();

  const [btnClasses, setBtnClasses] = useState({
    btnRow: s.buttonsRow,
    prevBtn: 'secondary',
    nextBtn: 'primary',
  });

  useEffect(() => {
    switch (currentStep) {
      case 1:
        return setBtnClasses({
          btnRow: s.singleButtonRow,
          prevBtn: 'hidden',
          nextBtn: 'primary',
        });
      case 4:
        setBtnClasses((prevState) => ({
          ...prevState,
          nextBtn: 'disabled',
        }));
        return;
      default:
        return setBtnClasses({
          btnRow: s.buttonsRow,
          prevBtn: 'secondary',
          nextBtn: 'primary',
        });
    }
  }, [currentStep]);

  const handleNextClick = () => {
    if (currentStep !== 0 && currentStep < 4) {
      const step = employmentValue !== 30 && currentStep === 1 ? 2 : 1;
      const nextStep = currentStep + step;
      dispatch(setStep(nextStep));
    }
  };

  const handlePrevClick = () => {
    if (currentStep > 1 && currentStep <= 4) {
      const step = employmentValue !== 30 && currentStep === 3 ? 2 : 1;
      const prevStep = currentStep - step;
      dispatch(setStep(prevStep));
    }
  };

  return (
    <footer className={s.footer}>
      <div className={btnClasses.btnRow}>
        <Button
          name="Back"
          type={btnClasses.prevBtn}
          handleClick={handlePrevClick}
        />
        <Button
          name="Next step"
          type={btnClasses.nextBtn}
          handleClick={handleNextClick}
        />
      </div>
    </footer>
  );
};

export default Footer;
