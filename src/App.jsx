import { useState } from 'react'
import './App.css'
import Header from './section/Header'
import Navbar from './section/Navbar'
import Contact from './section/Contact'
import LeftSection from './section/LeftSection'
import RightSection from './section/RightSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mt-14 mx-auto max-w-6xl grid grid-cols-[40%_60%]'>
      <LeftSection/>
      <RightSection/>
    </div>
  )
}

export default App