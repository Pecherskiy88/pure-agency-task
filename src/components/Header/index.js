import React from 'react';

import s from './style.module.css';

const Header = () => {
  return (
    <div className={s.headerBlock}>
      <div className={s.header} />
      <div className={s.progressBar} />
    </div>
  );
};

export default Header;
