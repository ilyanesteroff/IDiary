import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'

export default ({message}) => (
  <div className="complain">
    {message !== '' && 
      <>
        <span>
          <p>
            <span>
              <FontAwesomeIcon icon={faExclamation}/>
            </span>
            {' ' + message}
          </p>
        </span>
      </>
    }
  </div>
)