import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProgressBar = ({ currentStep }) => {
  const [currentWidth, setCurrentWidth] = useState(25);

  useEffect(() => {
    switch (currentStep) {
      case 1:
        return setCurrentWidth(25);
      case 2:
        return setCurrentWidth(50);
      case 3:
        return setCurrentWidth(75);
      case 4:
        return setCurrentWidth(100);
      default:
        return setCurrentWidth(25);
    }
  }, [currentStep]);

  return <MyProgressBar currentWidth={currentWidth} />;
};

ProgressBar.defaultProps = {
  currentStep: 1,
};

ProgressBar.propTypes = {
  currentStep: PropTypes.number.isRequired,
};

export default ProgressBar;

const MyProgressBar = styled.div`
  height: 4px;
  width: ${(props) => props.currentWidth}%;
  background-color: #61ad15;
  transition: all 0.5s ease-in-out;
`;
