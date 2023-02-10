import { createSelector } from "@reduxjs/toolkit";

const selectKnowledgesReducer = state => state.knowledges;

export const selectKnowledges = createSelector(
  [selectKnowledgesReducer],
  knowledges => knowledges
)