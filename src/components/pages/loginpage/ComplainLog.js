import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'
import { ErrorContext } from '../../../utils/contexts'
import './login.css'

export const ComplainLog = _ => 
  <ErrorContext.Consumer>
    {error => 
      <div className="complain">
        {error.value !== '' && 
          <>
            <span>
              <FontAwesomeIcon icon={faExclamation}/>
            </span>
            <span>
              {' ' + error.value}
            </span>
          </>
        }
      </div>
    }
  </ErrorContext.Consumer>
  