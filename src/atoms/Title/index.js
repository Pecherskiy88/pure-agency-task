import React from 'react';
import PropTypes from 'prop-types';

import s from './style.module.css';

const Title = ({ text }) => {
  return <h2 className={s.title}>{text}</h2>;
};

Title.defaultProps = {
  text: 'Title',
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
