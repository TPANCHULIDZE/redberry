import logo1 from "../../files/logos/red.svg";
import logo2 from "../../files/logos/circle.svg";
import './styles/logo.style.css'

const Logo = ({logoName}) => {
  return logoName === 'logo1' ? <img id="logo1" src={logo1} /> : <img id="logo2" src={logo2} />
}

export default Logo;