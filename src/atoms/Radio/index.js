import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';

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

const MyRadio = () => {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <GreenRadio
      checked={selectedValue === 'c'}
      onChange={handleChange}
      value="c"
      name="radio-button-demo"
      inputProps={{ 'aria-label': 'C' }}
    />
  );
};

export default MyRadio;
