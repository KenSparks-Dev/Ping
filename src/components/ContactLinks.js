import React from 'react';
import '../css/ContactLinks.scss';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons';

function ContactLinks({copyright, twitter, github, instagram}) {
  return (
  <div className="contact">
    <div className="contactLinks">
     <a href={github} target="_blank" rel="noopener noreferrer" className="contactLinks__link">
       <FontAwesomeIcon className="contactLinks__icon" icon={faGithub}/>
      </a>
     <a href={twitter} target="_blank" rel="noopener noreferrer" className="contactLinks__link">
       <FontAwesomeIcon className="contactLinks__icon" icon={faTwitter}/>
     </a>
     <a href={instagram} target="_blank" rel="noopener noreferrer" className="contactLinks__link">
       <FontAwesomeIcon className="contactLinks__icon" icon={faInstagram}/>
     </a>
    </div>
    <p className="copyright">{copyright}</p>
  </div>
  )
}

export default ContactLinks
