import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faTrash } from '@fortawesome/free-solid-svg-icons'

export default ({clickHandler, deleting}) => {
  return (
    <FontAwesomeIcon 
      id={deleting? 'todoDeletingSpinner' : 'red'}
      icon={deleting? faSpinner : faTrash}
      onClick={clickHandler}
    />
  )
}