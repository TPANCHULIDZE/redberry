import { useDispatch, useSelector } from 'react-redux';
import { setAboutInfo } from '../../store/personalInfo/personalInfo.actions';
import { selectAboutMe } from '../../store/personalInfo/personalInfo.select';
import './styles/aboutMe.style.css';

export const AboutMe = () => {
  const aboutMe = useSelector(selectAboutMe);
  const dispatch = useDispatch();

  const handleSetPersonalInfo = (event) => {
    const {value} = event.target;

    dispatch(setAboutInfo(value))
  }

  return (
    <div>
      <label id="about-me-label">ჩემ შესახებ (არასავალდებულო)</label>
      <div id="about-me">
        <textarea onChange={handleSetPersonalInfo} value={aboutMe} id="about-me-text" placeholder="ზოგადი ინფო შენ შესახებ"/> 
      </div>
    </div>
  )
}