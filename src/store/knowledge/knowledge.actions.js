import { KNOWLEDGE_PROPERTY_TYPES } from "./knowledge.types";
import createAction from "../../utils/reducer.utils";

export const setKnowledge =  (knowledge) => createAction(KNOWLEDGE_PROPERTY_TYPES.SET_KNOWLEDGE, knowledge);

export const setUni = (uni) => createAction(KNOWLEDGE_PROPERTY_TYPES.SET_UNI, uni);

export const setDegree = (degree) = createAction(KNOWLEDGE_PROPERTY_TYPES.SET_DEGREE, degree);

export const setEndDate = (date) = createAction(KNOWLEDGE_PROPERTY_TYPES.SET_END_DATE, date);

export const setDescribe = (description) = createAction(KNOWLEDGE_PROPERTY_TYPES.SET_DESCRIBE, description);