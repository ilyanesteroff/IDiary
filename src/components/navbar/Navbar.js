import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass } from '@fortawesome/free-solid-svg-icons'
import './navbar.css'

export default props => {
  return (
    <div>
      <FontAwesomeIcon icon={faCompass}/>
    </div>
  )
}