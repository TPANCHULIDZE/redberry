import { checkByRegExps } from "./regExps"

const knowledge = {
  uni: true,
  degree: true, 
  endDate: true,
  description: true
}

export const checkKnowledge = ({uni, degree, description, endDate}) => {
  knowledge.uni = checkByRegExps("uni", uni);
  knowledge.degree = checkByRegExps("degree", degree);
  knowledge.description = checkByRegExps("description", description);
  knowledge.endDate = checkByRegExps("endDate", endDate);

  return Object.values(knowledge).every(val => val);
}