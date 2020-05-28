import React from 'react';
import { useSelector } from 'react-redux';

import { stepSelector } from '../../redux/selectors/questionnaireSelectors';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import FirstStep from '../../components/StepsContent/FirstStep';
import SecondStep from '../../components/StepsContent/SecondStep';
import ThirdStep from '../../components/StepsContent/ThirdStep';
import LastStep from '../../components/StepsContent/LastStep';

import s from './style.module.css';

const MainPage = () => {
  const currentStep = useSelector((state) => stepSelector(state));
  const stepsContentArray = [
    <FirstStep />,
    <SecondStep />,
    <ThirdStep />,
    <LastStep />,
  ];
  return (
    <>
      <Header />
      <div className={s.content}>{stepsContentArray[currentStep - 1]}</div>
      <Footer />
    </>
  );
};

export default MainPage;
