import Logo from "../../components/home/logo";
import Button from "../../components/home/button";
import './home.style.css';


const Home = () => {
  return (
      <div id="home" className="w-full h-full">
          <div>
              <Logo logoName='logo1'/>
              <hr id="line"/>            
          </div>
          
          <div className="flex justify-center items-center">
              <Button /> 
          </div>
          <Logo logoName='logo2' />
      </div>
  )
}

export default Home;