import { KNOWLEDGE_PROPERTY_TYPES } from "./knowledge.types";

const INITIAL_STATE = {
   0: {
      uni: '',
      degree: '',
      endDate: '',
      description: '', 
    }
}

export const knowledges = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  const {index, value} = payload || {};
 
  switch(type) {
    case KNOWLEDGE_PROPERTY_TYPES.SET_DELETE_KNOWLEDGE:
      return Object.fromEntries(Object.entries(state).filter(([key, val]) => JSON.stringify(val) !== JSON.stringify(INITIAL_STATE[0]) || key === '0'))
    case KNOWLEDGE_PROPERTY_TYPES.SET_KNOWLEDGE:
      return {
        ...state,
        [index]: value
      }
    case KNOWLEDGE_PROPERTY_TYPES.SET_UNI:
      return {
        ...state,
        [index]: {
          ...state[index],
          uni: value
        }
      }
    case KNOWLEDGE_PROPERTY_TYPES.SET_DEGREE:
      return {
        ...state,
        [index]: {
          ...state[index],
          degree: value
        }
      }
    case KNOWLEDGE_PROPERTY_TYPES.SET_END_DATE:
      return {
        ...state,
        [index]: {
          ...state[index],
          endDate: value
        }
      }
    case KNOWLEDGE_PROPERTY_TYPES.SET_DESCRIBE:
      return {
        ...state,
        [index]: {
          ...state[index],
          description: value
        }
      }
    default:
      return state;
  }
}