import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'


export default ({ clickHandler }) => 
  <FontAwesomeIcon
    icon={ faTimesCircle }
    onClick={ clickHandler }
    id="rightSideInputIcon"
  />