import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks } from '@fortawesome/free-solid-svg-icons'

export default _ => (
  <h1>Your todos
    <FontAwesomeIcon id="h1-Icon" icon={faTasks}/> 
  </h1>
)
