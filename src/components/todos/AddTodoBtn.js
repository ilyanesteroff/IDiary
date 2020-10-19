import React from 'react'
import { OpenModalContext } from '../../utils/contexts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default _ => {
  return(
    <OpenModalContext.Consumer>
      {openModal =>
        <div className="AddTodoBtn" onClick={openModal}>
          <div>
            <FontAwesomeIcon icon={faPlus}/>
          </div>
        </div>
      }
    </OpenModalContext.Consumer>
  )
}