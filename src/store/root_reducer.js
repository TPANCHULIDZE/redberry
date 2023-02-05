import { combineReducers } from "redux";
import { personalInfo } from "./personalInfo/personalInfo.reducer";


export const rootReducer = combineReducers({
  personalInfo: personalInfo,
})