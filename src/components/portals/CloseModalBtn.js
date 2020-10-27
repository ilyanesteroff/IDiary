import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'


export default ({clickHandler, className}) => (
  <FontAwesomeIcon 
    id="closeIcon"
    icon={faTimesCircle} 
    onClick={clickHandler}
    className={className? className : ''}
  />
)