import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default ({clickHandler, deleting}) => {
  return (
      <button 
        onClick={clickHandler}>
        {deleting
          ? <span>
              <FontAwesomeIcon icon={faSpinner}/>
            </span>
          : <p>Delete Todo</p>
        }
      </button>
  )
}