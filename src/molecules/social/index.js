import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faLinkedin, faGithub, faFlipboard, faMedium } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './social.module.scss'

library.add(faTwitter,faLinkedin,faGithub, faFlipboard, faMedium);

export default class Markdown extends React.Component {

  render() {
    return (
      <ul className={styles.socialList}>
        <li><a target="_blank" href="https://www.linkedin.com/in/jasonjgeiger/">
          <FontAwesomeIcon size="2x" icon={faLinkedin} />
        </a></li>
        <li><a target="_blank" href="https://twitter.com/jasonjgeiger">
          <FontAwesomeIcon size="2x" icon={faTwitter} />
        </a></li>
        <li><a target="_blank" href="https://github.com/jasonjgeiger">
          <FontAwesomeIcon size="2x" icon={faGithub} />
        </a></li>
        <li><a target="_blank" href="https://medium.com/@jasonjgeiger">
          <FontAwesomeIcon size="2x" icon={faMedium} />
        </a></li>
      </ul>
    );
  }
}