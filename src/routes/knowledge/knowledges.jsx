import { Line } from "../../components/lines/line";
import { BackButton } from "../../components/Buttons/backButton";
import { NextButton } from "../../components/Buttons/nextButton";
import { HeadLine } from "../../components/headlines/headline";
import { Knowledge } from "../../components/knowledge/knowledge";
import './styles/knowledges.style.css'
import { AddKnowledge } from "../../components/Buttons/addKnowledge";
import { SpaceLine } from "../../components/lines/spaceLine";
import { useDispatch, useSelector } from "react-redux";
import { selectKnowledges } from "../../store/knowledge/knowledge.select";
import { useNavigate } from "react-router-dom";
import { setDeleteKnowledge } from "../../store/knowledge/knowledge.actions";
import { checkKnowledge } from "../../utils/regExps/checkKnowledge";
import { useEffect, useState } from "react";
import { ShowResume } from "../../components/showResume/showResume";

const defaultKnowledge = {
  uni: '',
  degree: '',
  endDate: '',
  description: ''
}

const Knowledges = () => {
  const knowledges = useSelector(selectKnowledges);
  const indexs = Object.keys(knowledges);
  const navigator = useNavigate()
  const dispatch = useDispatch();
  const [isSubmit, setIsSubmit] = useState(false)

  const navigateNextPage = () => {
    dispatch(setDeleteKnowledge());
    const isValid = Object.values(knowledges).every(val => checkKnowledge(val))
    
    setIsSubmit(true);
    if(isValid) navigator('/resume');
  }
  

  const navigateBackPage = () => {
    navigator('/experience')
  }

  return (
    <div className="flex h-full">
    <div className="w-1/2 h-full">
      <div onClick={navigateBackPage}>
        <BackButton />
      </div>
      <div id="knowledge" >
        <HeadLine page={3}/>
        <Line />
        <div >
        {
          indexs.map(index => <div> <Knowledge isSubmit={isSubmit} index={index}/> <SpaceLine /> </div>)
        }

        <AddKnowledge/>
        </div>
        <div>
          <div id="next-page-knowledge">
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
      </div>
    </div>
  )
}

export default Knowledges;