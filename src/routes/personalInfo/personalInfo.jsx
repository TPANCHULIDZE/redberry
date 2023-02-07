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
import { selectPersonalInfo } from "../../store/personalInfo/personalInfo.select"
import { CheckPersonalInfo } from "../../utils/personalInfo/checkPersonalInfo"
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
  const [validates, setValidates] = useState(defaultValidates)
  const personalInfo = useSelector(selectPersonalInfo)
  
  const navigateNextPage = () => {
    const info = CheckPersonalInfo(personalInfo)
    setValidates(info);
    console.log(info)
    const isValidate = Object.values(info).every(val => val)
    if(isValidate) navigator('/knowledge')
  }

  return (
    <div>
      <BackButton />
      <div id="personalInfoSide">
        <HeadLine page={1}/>
        <Line />
        <div>
          <div className="grid-rows-5 space-y-5 mt-3">
            <div>
              <Name validateName={validates.name} validateLastName={validates.lastName} />
            </div>
            <div>
              <Photo validate={validates.image}/>
            </div>
            <div>
              <AboutMe/>
            </div>
            <div>
              <Email validate={validates.email}/>
            </div>
            <div>
              <Phone validate={validates.number}/>
            </div>
          </div>
        </div>
        <div onClick={navigateNextPage} id="next-page">
          <NextButton />
        </div>
      </div>
    </div>
  ) 
}

export default PersonalInfo;