import { ActionType } from '../constants/questionnaireConstants';

const {
  SET_STEP,
  SET_EMPLOYMENT_STATUS,
  SET_PROPRIETORSHIPS,
  SET_FILING_STATUS,
} = ActionType;

export const setStep = (value) => ({
  type: SET_STEP,
  payload: value,
});

export const setEmploymentStatus = (value) => ({
  type: SET_EMPLOYMENT_STATUS,
  payload: value,
});

export const setProprietorships = (value) => ({
  type: SET_PROPRIETORSHIPS,
  payload: value,
});

export const setFilingStatus = (name, value) => ({
  type: SET_FILING_STATUS,
  payload: { name, value },
});
