import './styles/headline.style.css'

export const pages = ['პირადი ინფო', 'გამოცდილება', 'განათლება']

export const HeadLine = ({page}) => {
  return (
    <div id="headline">
      <div className='flex justify-between'>
        <div><h1 className='font-sans' id='headtext'>{pages[page-1]}</h1></div>
        <div><h1 className='font-sans' id='headpages'>{page}/3</h1></div>
      </div>
    </div>
  )
} 