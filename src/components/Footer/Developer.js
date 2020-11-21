import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'


export default _ => (
  <div id="FormItems-li">
    <h3>Developer</h3>
    <div id="FooterIcons">
      <a href="https://github.com/IlyaNesterow">
        <FontAwesomeIcon icon={faGithub}/>
      </a>
      <a href="https://stackoverflow.com/users/13448560/ilyanesterow17">
        <FontAwesomeIcon icon={faStackOverflow}/>
      </a>
    </div>
  </div>
)