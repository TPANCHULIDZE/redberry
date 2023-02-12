import { useSelector } from "react-redux"
import { selectExperiences } from "../../store/experiences/experiences.select"
import { checkByRegExps } from "./regExps"

const experience = {
  position: true,
  employer: true,
  startDate: true,
  endDate: true,
  expDescription: true
}

export const checkExperience = ({position, startDate, employer, endDate, expDescription}) => {

  experience.position = checkByRegExps('position',position)
  experience.employer = checkByRegExps('employer', employer)
  experience.startDate = checkByRegExps('startDate', startDate)
  experience.endDate = checkByRegExps('endDate', endDate)
  experience.expDescription = checkByRegExps('expDescription', expDescription)

  return Object.values(experience).every(val => val) && (new Date(endDate.split("/").reverse().join("-")) - new Date(startDate.split("/").reverse().join("-"))) > 0;
}
