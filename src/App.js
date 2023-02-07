import Home from './routes/home/home'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Knowledge from './components/knowledge/knowledge';
import PersonalInfo from './routes/personalInfo/personalInfo';


function App() {
  return (
   <div className='w-full h-full'>
    <Routes>
      
    <Route index element={<Home />} /> 
    <Route path='/personalInfo' element={<PersonalInfo />} />
    <Route path='/knowledge' element={<Knowledge />} />
  
    </Routes>
   </div>
  );
}

export default App;
