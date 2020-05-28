import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Checkbox from '@material-ui/core/Checkbox';

const MyCheckbox = (props) => {
  return <GreenCheckbox {...props} />;
};

MyCheckbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default MyCheckbox;

const GreenCheckbox = withStyles({
  root: {
    padding: 0,
    color: '#61AD15',
    '&$checked': {
      color: '#61AD15',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);
