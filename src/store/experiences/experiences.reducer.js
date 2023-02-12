import { act } from "react-dom/test-utils";
import { SET_EXPERIENCES_TYPES } from "./experiences.types";

const INITIAL_STATE = {
  0: {
    position: '',
    employer: '',
    startDate: '',
    endDate: '',
    expDescription: ''
  }
}

export const experiencesReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  const {index, value} = payload || {};

  switch(type) {
    case SET_EXPERIENCES_TYPES.SET_DELETE_EXPERIENCE:
      return Object.fromEntries(Object.entries(state).filter(([key, val]) => JSON.stringify(val) !== JSON.stringify(INITIAL_STATE[0]) || key === '0'))
    case SET_EXPERIENCES_TYPES.SET_EXPERIENCE:
      return {
        ...state,
        [Math.max(...(Object.keys(state)))+1]: INITIAL_STATE[0] 
      }
    case SET_EXPERIENCES_TYPES.SET_EMPLOYER:
      return {
        ...state,
        [index]: {
          ...state[index],
          employer: value,
        }
      }
    case SET_EXPERIENCES_TYPES.SET_POSITION:
      return {
        ...state, 
        [index]: {
          ...state[index],
          position: value
        }
      }
    case SET_EXPERIENCES_TYPES.SET_START_DATE:
      return {
        ...state,
        [index]: {
          ...state[index],
          startDate: value
        }
      }
    case SET_EXPERIENCES_TYPES.SET_END_DATE:
      return {
        ...state,
        [index]: {
          ...state[index],
          endDate: value
        }
      }
    case SET_EXPERIENCES_TYPES.SET_EXP_DESCRIPTION:
      return {
        ...state,
        [index]: {
          ...state[index],
          expDescription: value
        }
      }
    default:
      return state;
  }
}