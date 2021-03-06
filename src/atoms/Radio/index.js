import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';

const MyRadio = (props) => {
  return <GreenRadio {...props} />;
};

MyRadio.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default MyRadio;

const GreenRadio = withStyles({
  root: {
    padding: 0,
    color: '#61AD15',
    '&$checked': {
      color: '#61AD15',
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);
