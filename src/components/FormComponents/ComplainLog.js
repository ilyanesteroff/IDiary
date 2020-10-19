import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'
import { ErrorContext } from '../../utils/contexts'

export default _ => (
  <ErrorContext.Consumer>
    {error => 
      <div className="complain">
        {error.value !== '' && 
          <>
            <span>
              <p>
                <span>
                  <FontAwesomeIcon icon={faExclamation}/>
                </span>
                {' ' + error.value}
              </p>
            </span>
          </>
        }
      </div>
    }
  </ErrorContext.Consumer>
)