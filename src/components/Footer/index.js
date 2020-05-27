import React from 'react';

import s from './style.module.css';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.buttonsRow}>
        <button type="button">Back</button>
        <button type="button">Next step -></button>
      </div>
    </footer>
  );
};

export default Footer;
