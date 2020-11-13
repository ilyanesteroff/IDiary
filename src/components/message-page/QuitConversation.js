import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRunning } from '@fortawesome/free-solid-svg-icons'
import { QuitHandlerContext } from '../../utils/contexts'


export default _ => (
  <QuitHandlerContext.Consumer>
    {clickHandler => 
      <Link to="/messages">
        <FontAwesomeIcon
          icon={faRunning}
          id="LeaveConversation"
          onClick={clickHandler}
        />
      </Link>
    }
  </QuitHandlerContext.Consumer>
) 