import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mt-14 mx-auto max-w-6xl grid grid-cols-[40%_60%]'>
      <div>
        <div className='sticky top-0 grid grid-rows-[35%_45%_20%]'> 
            <div>
              <div>Nichapa Dumripattanasakul</div>
              <div>Frontend Engineer</div>
              <div>I build accessible, pixel-perfect digital experiences for the web.</div>
              <div>View Resume</div>
            </div>
            
            <div>Nav</div>
            <div className='flex items-end'>Link</div>
        </div>
      </div>
     <div>
        <div>About</div>
        <div className='mb-80'>Experience</div>
        <div className='mb-80'>Experience</div>
        <div className='mb-80'>Experience</div>
        <div className='mb-80'>Experience</div>
     </div>
    </div>
  )
}

export default App
