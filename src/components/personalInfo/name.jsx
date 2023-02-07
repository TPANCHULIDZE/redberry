import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLastName, setName } from '../../store/personalInfo/personalInfo.actions';
import { selectLastName, selectName } from '../../store/personalInfo/personalInfo.select';
import './styles/name.style.css';
import { ValidationIcons } from '../alerts/validationIcons';

 export const Name = ({validateName, validateLastName}) => {
  const name = useSelector(selectName);
  const lastName = useSelector(selectLastName)
  const dispatch = useDispatch()
  const [valName, setValName] = useState(false)
  const [valLastName, setValLastName] = useState(false)

  console.log(valName, valLastName)
  console.log(validateName, validateLastName)
  const changeName = (event) =>{
    const { value } = event.target;
    dispatch(setName(value)); 
    setValName(true)
  }

  const changeLastName = (event) => {
    const { value } = event.target;
    dispatch(setLastName(value)); 
    setValLastName(true)
  }

  return (
    <div>

      <div className="flex justify-between mt-12">
        <div id='name-container'>
          <label id="nameLabel">სახელი</label>
          <div id='name'>
            <input onChange={changeName} id="nameInput" placeholder='ტატო' value={name} />
            <ValidationIcons validate={valName || validateName} val={name} option='name'/>
          </div>
          <label id="nameHint">მინიმუმ 2 ასო. ქართული ასოები</label>

        </div>
        <div id='name-container'>
          <label id='nameLabel'>გვარი</label>
          <div id='name'  >
            <input onChange={changeLastName} id="nameInput" placeholder='ფანჩულიძე' value={lastName}/>
            <ValidationIcons validate={valLastName || validateLastName} val={lastName} option='name'/>
          </div>
          <label id='nameHint'>მინიმუმ 2 ასო. ქართული ასოები</label>

        </div>
      </div>
    </div>
  )
}