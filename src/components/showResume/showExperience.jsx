import { useSelector } from "react-redux"
import { selectExperiences } from "../../store/experiences/experiences.select"
import './styles/showExperience.style.css'

export const ShowExperience = ({experience}) => {
  const {position, employer, startDate, endDate, expDescription} = experience;

  return (
    <div id="experience-cont">
      <div>
        {position || employer ? <h5 id="resume-position">{position + ', ' + employer}</h5> : null }
        {startDate || endDate? <h5 id="resume-date">{startDate + ' - '+ endDate}</h5> : null}
      </div>
      <h5 id="resume-desc">{expDescription}</h5>
    </div>
  )
}