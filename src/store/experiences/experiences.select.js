import { createSelector } from "@reduxjs/toolkit";

const selectExperiencesReducer = (state) => state.experiences;

export const selectExperiences = createSelector(
  [selectExperiencesReducer],
  experiences => experiences
)