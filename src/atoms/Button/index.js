import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import IconArrow from '../../assets/icons/arrow.svg';

const MyButton = ({ type, name, handleClick }) => {
  const classes = useStyles();

  return (
    <Button className={classes[type]} variant="contained" onClick={handleClick}>
      {name}
      {type === 'primary' ? (
        <img className={classes.icon} src={IconArrow} alt="arrow-icon" />
      ) : null}
    </Button>
  );
};

const useStyles = makeStyles({
  primary: {
    width: '148px',
    backgroundColor: '#61AD15',
    color: '#fff',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: '#549612',
    },
    '& > *': {
      fontSize: '16px',
      lineHeight: '26px',
      fontWeight: 'normal',
    },
    boxShadow: 'none',
  },
  secondary: {
    width: '84px',
    backgroundColor: '#fff',
    color: '#5D606B',
    textTransform: 'capitalize',
    boxShadow: '0px 2px 4px rgba(73, 129, 18, 0.3)',
    '& > *': {
      fontSize: '16px',
      lineHeight: '26px',
      fontWeight: 'normal',
    },
  },
  icon: {
    paddingLeft: '14px',
  },
});

MyButton.defaultProps = {
  type: 'primary',
  name: 'primary',
  handleClick: () => {
    console.log('CLICK');
  },
};

MyButton.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default MyButton;
