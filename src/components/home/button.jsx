import './styles/button.style.css'
import { useNavigate } from 'react-router-dom'

const Button = () => {
  const navigator = useNavigate();
  const goToNextPage = () => {
    navigator('/personalInfo');
  }

  return (
    <div >
      <button onClick={goToNextPage} id="addCV">რეზიუმეს დამატება</button>
  </div>
  )
}

export default Button;