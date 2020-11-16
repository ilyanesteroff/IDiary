import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { QuitHandlerContext } from '../../../utils/contexts'


export default _ => (
  <QuitHandlerContext.Consumer>
    {clickHandler => 
      <div id="quitConversation">
        <Link to="/messages">
          <FontAwesomeIcon
            icon={faArrowLeft}
            id="LeaveConversation"
            onClick={clickHandler}
          />
        </Link>
      </div>
    }
  </QuitHandlerContext.Consumer>
) 