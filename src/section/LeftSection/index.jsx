import Header from '../Header'
import Navbar from '../Navbar'
import Contact from '../Contact'

const LeftSection = () => {
  return (
    <div className='px-5'>
      <div className='sticky top-14 grid gap-y-5 lg:grid-rows-[35%_40%_25%] h-[90vh]'>
        <Header />
        <Navbar />
        <Contact />
      </div>
    </div>
  )
}

export default LeftSection