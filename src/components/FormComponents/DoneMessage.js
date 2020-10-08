import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export default props => (
  <div id="DoneMessage">
    <span>
      <FontAwesomeIcon icon={faCheckCircle} className="GreenIcon"/>
    </span>
    <span 
      className={`${props.theme? 'Bright' : 'Dark'}Text bigText`}
    >
      {' ' + props.children}
    </span>
  </div>
) 