import { combineReducers } from 'redux';

import { ActionType } from '../constants/questionnaireConstants';

const { SET_STEP } = ActionType;

export const stepInitialState = 1;

const stepReducer = (state = stepInitialState, { type, payload }) => {
  switch (type) {
    case SET_STEP: {
      state = payload;
      return state;
    }
    default:
      return state;
  }
};

export default combineReducers({
  step: stepReducer,
});
