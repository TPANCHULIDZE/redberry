import Home from './routes/home/home'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Knowledge from './routes/knowledge/knowledges'
import PersonalInfo from './routes/personalInfo/personalInfo';
import Experiences from './routes/experiences/experiences';
import Resume from './routes/resume/resume';


function App() {
  return (
   <div className='w-full h-full'>
    <Routes>
      <Route index element={<Home />} /> 
      <Route path='/personalInfo' element={<PersonalInfo />} />
      <Route path='/knowledge' element={<Knowledge />} />
      <Route path='experience' element={<Experiences/>} />
      <Route path='/resume' element={<Resume/>} />
    </Routes>
   </div>
  );
}

export default App;
