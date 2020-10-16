import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-regular-svg-icons'

export default ({clickHandler}) => (
  <FontAwesomeIcon
    id="EditTodoIcon"
    onClick={clickHandler}
    icon={faEdit}
  />
)