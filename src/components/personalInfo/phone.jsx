import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNumber } from '../../store/personalInfo/personalInfo.actions';
import { selectPhone } from '../../store/personalInfo/personalInfo.select';
import { ValidationIcons } from '../alerts/validationIcons';
import './styles/phone.style.css';

export const Phone = ({isSubmit}) => {
  const number = useSelector(selectPhone);
  const dispatch = useDispatch();
  const indexs = [5, 9, 12, 15]

  const changeNumber = (event) => {
    const { value } = event.target;
    let space = '';
    if(indexs.some(val => val === value.length && value.length > number.length)) space = ' ';
    const newNumber = value.slice(0, value.length-1) + space + value.slice(value.length-1).split(' ').filter(el => el !== '' && el!== ' ').join(' ')
    dispatch(setNumber(newNumber))    
  }

  return (
    <div>
      <label id="phoneLabel">მობილურის ნომერი</label>
      <div id='phone'>
        <input type="tel" onChange={changeNumber} id="phoneInput" placeholder="+995 551 12 34 56" value={number} />
        <ValidationIcons option='phone' val={number} isSubmit={isSubmit}/>
      </div>
      <label id="phoneHint">უნდა აკმაყოფილებდეს ქართული მობილურის ნიშნის ფორმატს</label>
    </div>
  )
}