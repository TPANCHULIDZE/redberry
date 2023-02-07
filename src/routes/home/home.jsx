import Logo from "../../components/home/logo";
import Button from "../../components/home/button";
import './home.style.css';
import { Line } from "../../components/lines/line";

const Home = () => {
  return (
      <div id="home" className="w-full h-full">
          <div id="homeHead">
              <Logo logoName='logo1'/>  
              <Line/>  
          </div>
          
          <div className="flex justify-center items-center">
              <Button /> 
          </div>
          <Logo logoName='logo2' />
      </div>
  )
}

export default Home;