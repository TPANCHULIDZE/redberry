import { useSelector } from 'react-redux';
import { selectExperiences } from '../../store/experiences/experiences.select';
import { selectKnowledges } from '../../store/knowledge/knowledge.select';
import { selectPersonalInfo } from '../../store/personalInfo/personalInfo.select';
import './styles/showResume.style.css';
import emailIcon from '../../files/logos/email.svg'
import phoneIcon from '../../files/logos/phone.svg'
import { ShowExperience } from './showExperience';
import { ShowKnowledge } from './showKnowledge';


export const ShowResume = () => {
  const experiences = useSelector(selectExperiences);
  const knowledges = useSelector(selectKnowledges);
  const {name, email, aboutInfo, number, lastName, image} = useSelector(selectPersonalInfo);
  const personalInfoisShow = [name, email, number, image].some(val => val !== '' && val )
  const showExp = (Object.values(experiences).some(val => (Object.values(val)).some(val1 => val1 !== '')))
  const showKnow = (Object.values(knowledges).some(val => (Object.values(val)).some(val1 => val1 !== '')))

  
  
  return (
    <div id='resume-div' className='flex grow'>
      <div id='cont'  className='w-full flex'>
          <div className=' w-1/2'>
            <div className='flex'>
              <div className='grid grid-rows-2 space-y-1'>
                <div className='flex justify-start'>
                  <div className='flex justify-around'>
                    <h3 id="resume-name">{name}</h3>
                  
                    <h3 id='resume-name'>{lastName}</h3>
                  </div>
                </div>
                <div className='flex justify-start'>
                  <div className='grid grid-rows-2'>
                    <div className='flex space-x-2'>
                      {email ? <img src={emailIcon}/> : null }
                      <h5 id='resume-email'>{email}</h5>

                    </div>
                    <div className='flex space-x-2'>
                      {number ? <img src={phoneIcon}/> : null }
                      <h5 id='resume-number'>{number}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-start mt-8'>
              <div id='about-me-cont'>
                {aboutInfo !== '' ? <h3 id='about-me-head'>ჩემს შესახებ</h3> : null}
                <div className='flex'>
                  <p id='res-about-me-text'>{aboutInfo}</p>

                </div>
              </div>
            </div>
          </div>
          <div className='w-1/2' id='resume-image'>
            { image ? <img src={image.image}/> : null}
          </div>
      </div>
      {/* {personalInfoisShow ? <div id='resume-line'>
        <hr className='w-full'></hr>
      </div> : null} */}
      <div id='res-experiences' className='flex flex-col'>
        {showExp ? (<div className='mb-2' id='resume-line'>
        <hr className='w-full'></hr>
      </div>) : null}
        {showExp ? <h3 id="experience-head">გამოცდილება</h3> : null}
        {
          Object.values(experiences).map(experience => (
            <div>
              <ShowExperience experience={experience}/>
              {showExp ?<div className='ml-0'  id='resume-line'>
                 <hr className='w-full'></hr> 
              </div> : null}
            </div>
            
          ))
        }

      </div>
      <div id='res-experiences' className='flex flex-col'>
        {showKnow ? <h3 id="experience-head">განათლება </h3> : null}
        {
          Object.values(knowledges).map(knowledge => (
            <div>
              <ShowKnowledge knowledge={knowledge}/>
              {showKnow ?<div className='ml-0'  id='resume-line'>
                <hr className='w-full'></hr>
              </div> : null }
            </div>
            
          ))
        }

      </div>
    </div>    
  )
}
