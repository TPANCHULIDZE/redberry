import createAction from "../../utils/reducer.utils";
import { PERSONAL_INFO } from "./personalInfo.types";

export const setName = (name) => createAction(PERSONAL_INFO.SET_NAME, name);

export const setLastName = (lastName) => createAction(PERSONAL_INFO.SET_LASTNAME, lastName);

export const setEmail = (email) => createAction(PERSONAL_INFO.SET_EMAIL, email);

export const setImage = (image) => createAction(PERSONAL_INFO.SET_IMAGE, image);

export const setNumber = (number) => createAction(PERSONAL_INFO.SET_NUMBER, number)

export const setAboutInfo = (info) => createAction(PERSONAL_INFO.SET_ABOUT_INFO, info);