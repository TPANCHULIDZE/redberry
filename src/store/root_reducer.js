import { combineReducers } from "redux";
import { knowledges } from "./knowledge/knowledge.reducer";
import { personalInfo } from "./personalInfo/personalInfo.reducer";


export const rootReducer = combineReducers({
  personalInfo: personalInfo,
  knowledges: knowledges,
})