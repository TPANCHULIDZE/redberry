import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { BackButton } from "../../components/Buttons/backButton"
import { NextButton } from "../../components/Buttons/nextButton"
import { HeadLine } from "../../components/headlines/headline"
import { Line } from "../../components/lines/line"
import { AboutMe } from "../../components/personalInfo/aboutMe"
import { Email } from "../../components/personalInfo/email"
import { Name } from "../../components/personalInfo/name"
import { Phone } from "../../components/personalInfo/phone"
import { Photo } from "../../components/personalInfo/photo"
import { ShowResume } from "../../components/showResume/showResume"
import { selectPersonalInfo } from "../../store/personalInfo/personalInfo.select"
import { checkPersonalInfo } from "../../utils/regExps/checkPersonalInfo"
// import { validatesPersonalInfo } from "../../utils/personalInfo/checkPersonalInfo"
import './styles/personalInfo.style.css'

const defaultValidates = {
  name: true,
  lastName: true,
  image: true,
  email: true,
  number: true
}

const PersonalInfo = () => {
  const navigator = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false)
  const personalInfo = useSelector(selectPersonalInfo)

  const navigateNextPage = () => {
    const info = checkPersonalInfo(personalInfo)
    setIsSubmit(true)
    console.log(info)
    const isValidate = Object.values(info).every(val => val)
    if(isValidate) navigator('/experience')
  }

  const navigateBackPage = () => {
    navigator('/')
  }
  useEffect(() => {
    setIsSubmit(false)
  }, [personalInfo])

  return (
    <div className="flex h-full">
      <div className="w-1/2 h-full">
      <div onClick={navigateBackPage}>
        <BackButton />
      </div>
      <div id="personalInfoSide">
        <HeadLine page={1}/>
        <Line />
        <div>
          <div className="grid-rows-5 space-y-5 mt-3">
            <div>
              <Name isSubmit={isSubmit} />
            </div>
            <div>
              <Photo isSubmit={isSubmit}/>
            </div>
            <div>
              <AboutMe isSubmit={isSubmit}/>
            </div>
            <div>
              <Email isSubmit={isSubmit}/>
            </div>
            <div>
              <Phone isSubmit={isSubmit}/>
            </div>
          </div>
        </div>
        <div onClick={navigateNextPage} id="next-page-personal">
          <NextButton val="შემდეგი" />
        </div>
      </div>
      </div>
      <div id="show-resume">
        <ShowResume/>
      </div>
    </div>
  ) 
}

export default PersonalInfo;