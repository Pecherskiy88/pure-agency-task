import { combineReducers } from 'redux';

import { ActionType } from '../constants/questionnaireConstants';

const {
  SET_STEP,
  SET_EMPLOYMENT_STATUS,
  SET_PROPRIETORSHIPS,
  SET_FILING_STATUS,
} = ActionType;

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

const employmentInitialState = 20;

const employmentReducer = (
  state = employmentInitialState,
  { type, payload },
) => {
  switch (type) {
    case SET_EMPLOYMENT_STATUS: {
      return payload;
    }
    default:
      return state;
  }
};

const proprietorshipsInitialState = 1;

const proprietorshipsReducer = (
  state = proprietorshipsInitialState,
  { type, payload },
) => {
  switch (type) {
    case SET_PROPRIETORSHIPS: {
      return payload;
    }
    default:
      return state;
  }
};

const filingStatusInitialState = {
  single: false,
  jointfly: false,
  separately: false,
  household: false,
  widow: false,
};

const filingStatusReducer = (
  state = filingStatusInitialState,
  { type, payload },
) => {
  switch (type) {
    case SET_FILING_STATUS: {
      const { name, value } = payload;
      return { ...state, [name]: value };
    }
    default:
      return state;
  }
};

export default combineReducers({
  step: stepReducer,
  employmentValue: employmentReducer,
  proprietorshipsValue: proprietorshipsReducer,
  filingStatusData: filingStatusReducer,
});
