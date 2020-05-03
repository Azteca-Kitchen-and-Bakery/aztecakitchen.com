import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faInstagram, faFacebookF} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './social.module.scss'

library.add(faTwitter,faInstagram,faFacebookF);

export default class Markdown extends React.Component {

  render() {
    return (
      <div className={styles.socialList}>
        <ul>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/AztecaBakeries/">
            <FontAwesomeIcon size="2x" icon={faFacebookF} />
          </a></li>
          {/* <li><a target="_blank" rel="noopener noreferrer" href="#">
            <FontAwesomeIcon size="2x" icon={faTwitter} />
          </a></li> */}
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/azteca_phx/">
            <FontAwesomeIcon size="2x" icon={faInstagram} />
          </a></li>
        </ul>
      </div>
    );
  }
}