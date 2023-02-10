import './styles/nextButton.style.css'
export const NextButton = ({val}) => {
  return (
    <div id='nextButton'>
      <button><span id='next'>{val}</span></button>

    </div>
  )
}