import { useDispatch, useSelector } from "react-redux"
import { setDeleteExperience, setExperience } from "../../store/experiences/experiences.actions";
import { selectExperiences } from "../../store/experiences/experiences.select";
import './styles/addExperience.style.css'

const defaultExperience = {
  uni: '',
  degree: '',
  endDate: '',
  description: ''
}

export const AddExperience = () => {
  const experiences = useSelector(selectExperiences);
  const dispatch = useDispatch();

  const addMoreExperience = () => {
    dispatch(setDeleteExperience())
    dispatch(setExperience())
  }

  return (
    <div id="button">
      <button onClick={addMoreExperience} id="add-experience">მეტი გამოცდილების დამატება</button>
    </div>
  )
}