import { PERSONAL_INFO } from "./personalInfo.types";

export const INITIAL_STATE = {
  name: "",
  lastName: "",
  image: null,
  aboutInfo: "",
  email: "",
  number: "",
};

export const personalInfo = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case PERSONAL_INFO.SET_NAME:
      return {
        ...state,
        name: payload,
      };
    case PERSONAL_INFO.SET_LASTNAME:
      return {
        ...state,
        lastName: payload,
      };
    case PERSONAL_INFO.SET_EMAIL:
      return {
        ...state,
        email: payload,
      };
    case PERSONAL_INFO.SET_NUMBER:
      return {
        ...state,
        number: payload,
      };
    case PERSONAL_INFO.SET_ABOUT_INFO:
      return {
        ...state,
        aboutInfo: payload,
      };
    case PERSONAL_INFO.SET_IMAGE:
      return {
        ...state,
        image: payload,
      };
    default:
      return state;
  }
};
