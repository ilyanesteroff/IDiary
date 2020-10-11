import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default ({clickHandler}) => {
  return(
    <div className="AddTodoBtn" onClick={clickHandler}>
      <div>
        <FontAwesomeIcon icon={faPlus}/>
      </div>
    </div>
  )
}