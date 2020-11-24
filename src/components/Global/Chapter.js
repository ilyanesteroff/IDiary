import React from 'react'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'


export default ({ label, icon }) => (
  <h1>
    { label }
    <FA 
      icon={ icon }
      id="h1-Icon"
    />
  </h1>
)