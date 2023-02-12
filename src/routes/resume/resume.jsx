import './styles/resume.style.css'
import { ShowResume } from '../../components/showResume/showResume';
import { useSelector } from 'react-redux';
import { selectExperiences } from '../../store/experiences/experiences.select';
import { selectPersonalInfo } from '../../store/personalInfo/personalInfo.select';
import { selectKnowledges } from '../../store/knowledge/knowledge.select';
import { useEffect } from 'react';
import axios from 'axios';
import { Buffer } from 'buffer';
// import { toFormData } from 'axios';


const Resume = () => {
  const experiences = useSelector(selectExperiences)
  const {name, lastName, email, number, aboutInfo, image} = useSelector(selectPersonalInfo)
  const knowledges = useSelector(selectKnowledges)
  

  const checkInformation = async () => {

    const degrees = (await axios.get('https://resume.redberryinternship.ge/api/degrees')).data

    const filterExperiences = Object.values(experiences).map(val => ({
      description: val.expDescription,
      position: val.position,
      employer: val.employer,
      start_date: val.startDate.split('/').reverse().join('/'),
      due_date: val.endDate.split('/').reverse().join('/')
    }))

    const filterKnowledges = Object.values(knowledges).map(val => ({
      institute: val.uni,
      due_date: val.endDate.split('/').reverse().join('/'),
      description: val.description,
      degree_id: degrees.filter(value => value.title === val.degree )[0].id
    }))

    

    // console.log(filterExperiences, 'ft', filterKnowledges)

    const blobsRes = await fetch(image.image)

    const blobd = await blobsRes.blob();

    // const form = new FormData()
    // form.append('image', blobd)
    // form
    const info = {
      name,
      surname: lastName, 
      email,
      image: blobd,
      phone_number: number.split(' ').join(''),
      about_me: aboutInfo,
      experiences: filterExperiences,
      educations: filterKnowledges
    }

    axios({
      method: 'post',
      url: 'https://resume.redberryinternship.ge/api/cvs',
      data: info,
      headers: {'Content-Type': 'multipart/form-data'}
      }).then(response => {
      console.log('res', response)
    }).catch(error => {
      console.log('er', error)
    })
  }

  useEffect(() => {
    checkInformation()
  }, [])

  return (
    <div id="main-show-resume">
      <div id='main-content' className='w-2/3 h-full'>
        <ShowResume/>
      </div>
    </div>
  )
}

export default Resume;