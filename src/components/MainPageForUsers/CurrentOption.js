import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default ({ option, icon, clickHandler, currentOption }) => (
  <FontAwesomeIcon
    icon={icon}
    id={currentOption === option ? 'activeOption' : ''}
    onClick={_ => clickHandler(option)}
  />
)