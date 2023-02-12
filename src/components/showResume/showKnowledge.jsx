import { useSelector } from "react-redux"
import { selectExperiences } from "../../store/experiences/experiences.select"
import './styles/showKnowledge.style.css'

export const ShowKnowledge= ({knowledge}) => {
  const {uni, degree, endDate, description} = knowledge;

  return (
    <div id="knowledge-cont">
      <div>
        {uni || degree ? <h5 id="resume-uni">{uni + ', ' + degree}</h5> : null }
        {endDate ? <h5 id="resume-date">{endDate}</h5> : null}
      </div>
      <h5 id="resume-desc">{description}</h5>
    </div>
  )
}