import './styles/aboutMe.style.css';

export const AboutMe = () => {
  return (
    <div>
      <label id="about-me-label">ჩემ შესახებ (არასავალდებულო)</label>
      <div id="about-me">
        <textarea id="about-me-text" placeholder="ზოგადი ინფო შენ შესახებ"/> 
      </div>
    </div>
  )
}