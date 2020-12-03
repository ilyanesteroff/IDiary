import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-regular-svg-icons'


export default ({ clickHandler }) => 
  <FontAwesomeIcon
    icon={ faWindowClose }
    onClick={ clickHandler }
    id="rightSideInputIcon"
  />