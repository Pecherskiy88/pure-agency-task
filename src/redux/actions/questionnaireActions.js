import { ActionType } from '../constants/questionnaireConstants';

const { SET_STEP } = ActionType;

export const setStep = (value) => ({
  type: SET_STEP,
  payload: value,
});
