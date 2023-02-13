import './styles/experiences.style.css';
import { NextButton } from '../../components/Buttons/nextButton';
import { BackButton } from '../../components/Buttons/backButton';
import { Experience } from '../../components/experince/experience';
import { AddExperience } from '../../components/Buttons/addExperience';
import { useNavigate } from 'react-router-dom';
import { setDeleteExperience } from '../../store/experiences/experiences.actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectExperiences } from '../../store/experiences/experiences.select';
import { useEffect, useState } from 'react';
import { checkExperience } from '../../utils/regExps/checkExperience';
import { HeadLine } from '../../components/headlines/headline';
import { Line } from '../../components/lines/line';
import { SpaceLine } from '../../components/lines/spaceLine';
import { ShowResume } from '../../components/showResume/showResume';
import { handleChangeExperience } from '../../store/store';

const Experiences = () => {
  const navigator = useNavigate();
  const experiences = useSelector(selectExperiences)
  const dispatch = useDispatch();
  const [isSubmit, setIsSubmit] = useState(false)
  const indexs = Object.keys(experiences)

  const navigateBackPage = () => {
    navigator('/personalInfo');
  }  

  const navigateNextPage = () => {
    dispatch(setDeleteExperience());
    const updatedExp = handleChangeExperience()
    const isValid = Object.values(updatedExp).every(val => checkExperience(val))
    setIsSubmit(true);
    console.log(isValid)
    if(isValid) navigator('/knowledge');
  }

  const handleIsSubmit = () => {
    setIsSubmit(false)
  }

  return (
    <div className="flex h-full">
    <div className="h-full w-1/2">
      <div onClick={navigateBackPage}>
        <BackButton />

      </div>
      <div id="experiences" >
        <HeadLine page={2}/>
        <Line />
        <div >
        {
          indexs.map(index => <div> <Experience isSubmit={isSubmit} index={index}/> <SpaceLine /> </div>)
        }
        <div onClick={handleIsSubmit} >
          <AddExperience onClick={handleIsSubmit} />

        </div>
        </div>
        <div>
          <div id="next-page-experiences">
            <div onClick={navigateBackPage}>
              <NextButton val="უკან"  />

            </div>
            <div onClick={navigateNextPage}>
              <NextButton val="შემდეგი"  />
            </div>
          </div>
        </div>
      </div>
    </div>
      <div id="show-resume">
        <ShowResume/>
        <div id='bottom-icon' className='mt-2 flex-none h-10'>
          <img id='icon'/>
        </div>
      </div>
    </div>
  )
}

export default Experiences;