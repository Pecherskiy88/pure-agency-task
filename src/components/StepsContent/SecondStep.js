import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setProprietorships } from '../../redux/actions/questionnaireActions';
import { proprietorshipsSelector } from '../../redux/selectors/questionnaireSelectors';

import Title from '../../atoms/Title';
import Input from '../../atoms/Input';

const SecondStep = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => proprietorshipsSelector(state));

  const handleChange = (event) => {
    const value = Number(event.target.value);

    if (!isNaN(value)) {
      dispatch(setProprietorships(value));
    }
  };

  return (
    <>
      <Title text="How many separate sole proprietorships do you operate?" />
      <Input
        label="Please enter a quantity"
        onChange={handleChange}
        value={inputValue}
      />
    </>
  );
};

export default SecondStep;
