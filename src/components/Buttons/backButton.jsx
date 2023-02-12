import './styles/backButton.style.css';
import backPage from '../../files/logos/backPage.svg';

export const BackButton = () => {
  
  return (
    <div id="back-page">
        <div id='elips'>
          <img id="back-page-icon" src={backPage}/>

        </div>
    </div>
  )
}