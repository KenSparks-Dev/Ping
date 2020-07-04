import React from 'react';
import '../css/ContactLinks.scss';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons';


function ContactLinks({copyright}) {
  return (
    <div>
      <div className="contactLinks">
      <FontAwesomeIcon className="contactLinks__icon" icon={faGithub} />
      <FontAwesomeIcon className="contactLinks__icon" icon={faTwitter} />
      <FontAwesomeIcon className="contactLinks__icon" icon={faInstagram} />
    </div>
      <p className="copyright">{copyright}</p>
    </div>
  )
}

export default ContactLinks
