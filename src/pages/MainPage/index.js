import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import FirstStep from '../../components/StepsContent/FirstStep';

import s from './style.module.css';

const MainPage = () => {
  return (
    <>
      <Header />
      <div className={s.content}>
        <FirstStep />
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
