import { combineReducers } from 'redux';

import { ActionType } from '../constants/questionnaireConstants';

const { SET_STEP } = ActionType;

const stepInitialState = 1;

const stepReducer = (state = stepInitialState, { type, payload }) => {
  switch (type) {
    case SET_STEP: {
      return payload;
    }
    default:
      return state;
  }
};

export default combineReducers({
  step: stepReducer,
});
