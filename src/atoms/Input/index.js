import React from 'react';
import PropTypes from 'prop-types';

import s from './style.module.css';

const Input = (props) => {
  return (
    <div className={s.inputBlock}>
      <p className={s.label}>{props.label}</p>
      <input type="text" {...props} className={s.input} />
    </div>
  );
};

Input.defaultProps = {
  label: 'Label',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};

export default Input;
