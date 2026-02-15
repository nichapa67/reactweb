/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowsDownToLine } from '@fortawesome/free-solid-svg-icons'

const Navbar =() => {
    return (
         <div className='flex flex-col gap-4 font-semibold'>
            <div>
              <FontAwesomeIcon className='mr-2 text-primaryTitle' icon={faArrowRight} />
              About
            </div>
            <div>Experience</div>
            <div>Projects</div>
            <div>Article</div>
          </div>
    )
}

export default Navbar*/
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const navs = [
  { title: "About", sectionId: "About-section" },
  { title: "Experience", sectionId: "Experience-section" },
  { title: "Project", sectionId: "Project-section" },
  { title: "Article", sectionId: "Article-section" },
]

const Navbar = () => {
  const [isMouseEnter, setIsMouseEnter] = useState({});

  const handleClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

  return (
    <div className='flex flex-col gap-3 font-semibold'>
      {
        navs.map((e, i) => (
          <div 
            key={`nav-${e}-${i}`}
            onClick={() => handleClick(e.sectionId)}
            onMouseEnter={() => setIsMouseEnter({ [e.title]: true })}
            onMouseLeave={() => setIsMouseEnter({ [e.title]: false })}
            className="cursor-pointer flex "
            
          >
            <div>
              <FontAwesomeIcon className={`mr-2 text-primaryTitle new-arrow ${isMouseEnter[e.title] ? "" : "hidden"}`} icon={faArrowRight} />
            </div>
        
            <div className={`${isMouseEnter[e.title] ? "translate-x-4" : ""} duration-500 ease-out`}>{e.title}</div>
          </div>
        ))
      } 
    </div>
  )
}

export default Navbar;