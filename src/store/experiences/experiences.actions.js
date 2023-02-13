import createAction from "../../utils/reducer.utils";
import { SET_EXPERIENCES_TYPES } from "./experiences.types";

export const setExperience = () => createAction(SET_EXPERIENCES_TYPES.SET_EXPERIENCE, {});

export const setPosition = (position) => createAction(SET_EXPERIENCES_TYPES.SET_POSITION, position);

export const setEmployer = (employer) => createAction(SET_EXPERIENCES_TYPES.SET_EMPLOYER, employer);

export const setStartDate = (startDate) => createAction(SET_EXPERIENCES_TYPES.SET_START_DATE, startDate);

export const setEndDateKN = (endDate) => createAction(SET_EXPERIENCES_TYPES.SET_END_DATE, endDate);

export const setExpDescription = (description) => createAction(SET_EXPERIENCES_TYPES.SET_EXP_DESCRIPTION, description);

export const setDeleteExperience = () => createAction(SET_EXPERIENCES_TYPES.SET_DELETE_EXPERIENCE, {})