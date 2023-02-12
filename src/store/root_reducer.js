import { combineReducers } from "redux";
import { experiencesReducer } from "./experiences/experiences.reducer";
import { knowledges } from "./knowledge/knowledge.reducer";
import { personalInfo } from "./personalInfo/personalInfo.reducer";


export const rootReducer = combineReducers({
  personalInfo: personalInfo,
  knowledges: knowledges,
  experiences: experiencesReducer,
})