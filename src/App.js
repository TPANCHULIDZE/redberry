import Home from './routes/home/home'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Knowledge from './components/knowledge/knowledge';


function App() {
  return (
   <div className='w-full h-full'>
    <Routes>
     <Route path="/" element={<Home />} /> 
     <Route path='/knowledge' element={<Knowledge />} />
    </Routes>
   </div>
  );
}

export default App;
