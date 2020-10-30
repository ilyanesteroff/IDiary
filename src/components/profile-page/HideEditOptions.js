import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog  } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'


export default ({ clickHandler, hidden }) => (
  <div id="HideFilter">
    <FontAwesomeIcon 
      icon={hidden ? faCog : faTimesCircle } 
      onClick={clickHandler}
    />
  </div>
)