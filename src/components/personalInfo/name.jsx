import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLastName, setName } from '../../store/personalInfo/personalInfo.actions';
import { selectLastName, selectName } from '../../store/personalInfo/personalInfo.select';
import './styles/name.style.css';
import { ValidationIcons } from '../alerts/validationIcons';

 export const Name = ({isSubmit}) => {
  const name = useSelector(selectName);
  const lastName = useSelector(selectLastName)
  const dispatch = useDispatch()
  console.log(isSubmit, 'dd')
  const changeName = (event) =>{
    const { value } = event.target;
    dispatch(setName(value)); 
  }

  const changeLastName = (event) => {
    const { value } = event.target;
    dispatch(setLastName(value)); 
  }

  return (
    <div>

      <div className="flex justify-between mt-12">
        <div id='name-container'>
          <label id="nameLabel">სახელი</label>
          <div id='name'>
            <input onChange={changeName} id="nameInput" placeholder='ტატო' value={name} />
            <ValidationIcons isSubmit={isSubmit} val={name} option='name'/>
          </div>
          <label id="nameHint">მინიმუმ 2 ასო. ქართული ასოები</label>

        </div>
        <div id='name-container'>
          <label id='nameLabel'>გვარი</label>
          <div id='name'  >
            <input onChange={changeLastName} id="nameInput" placeholder='ფანჩულიძე' value={lastName}/>
            <ValidationIcons isSubmit={isSubmit} val={lastName} option='name'/>
          </div>
          <label id='nameHint'>მინიმუმ 2 ასო. ქართული ასოები</label>

        </div>
      </div>
    </div>
  )
}