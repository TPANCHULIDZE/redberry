import { createSelector } from "@reduxjs/toolkit";


const selectPersonalInfoReducer = state => state.personalInfo;
const selectNameReducer = state => state.personalInfo.name;
const selectLastNameReducer = state => state.personalInfo.lastName;
const selectEmailReducer = state => state.personalInfo.email;
const selectPhoneReducer = state => state.personalInfo.number;
const selectPhotoReducer = state => state.personalInfo.image;
const selectAboutMeReducer = state => state.personalInfo.aboutInfo;

export const selectPersonalInfo = createSelector(
  [selectPersonalInfoReducer],
  personalInfo => personalInfo
)

export const selectName = createSelector(
  [selectNameReducer],
  name => name
)

export const selectLastName = createSelector(
  [selectLastNameReducer],
  lastName => lastName
)

export const selectEmail = createSelector(
  [selectEmailReducer],
  email => email
)

export const selectPhoto = createSelector(
  [selectPhotoReducer],
  image => image
)

export const selectPhone = createSelector(
  [selectPhoneReducer],
  number => number
)

export const selectAboutMe = createSelector(
  [selectAboutMeReducer],
  aboutInfo => aboutInfo
)