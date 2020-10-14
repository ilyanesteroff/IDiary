import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'


export default ({completed}) => (
  <h3>
    {completed ? 'Done ': 'Need to complete '}
    {
      completed 
        ? <span id="DoneTodo">
            <FontAwesomeIcon icon={faCheck}/>
          </span>
        : <span id="NeedToCompleteTodo">
            <FontAwesomeIcon icon={faClock}/>
          </span>
    }  
  </h3>
)