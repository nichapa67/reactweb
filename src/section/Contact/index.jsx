import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
        <div className='flex items-end gap-2 text-2xl '>
            <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faInstagram} />
            <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faYoutube} />
            <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faGithub} />
        </div>
    )
}
export default Contact