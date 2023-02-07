import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setEmail } from '../../store/personalInfo/personalInfo.actions';
import { selectEmail } from '../../store/personalInfo/personalInfo.select'
import { ValidationIcons } from '../alerts/validationIcons';
import './styles/email.style.css'

export const Email = ({validate}) => {
  const email = useSelector(selectEmail);
  const dispatch = useDispatch();
  const [valEmail, setValEmail] = useState(false)
  const changeEmail = (event) => {
    const { value } = event.target;
    dispatch(setEmail(value))
    setValEmail(true)
  }
  
  return (
    <div>
      <label id="emailLabel">ელ.ფოსტა</label>
      <div id='email'>
        <input onChange={changeEmail} id="emailInput" placeholder="tato@redberry.ge" value={email}/>
        <ValidationIcons validate={valEmail || validate} val={email} option='email'/>
      </div>
      <label id="emailHint">უნდა მთავრდებოდეს @redberry.ge-ით</label>
    </div>
  )
}