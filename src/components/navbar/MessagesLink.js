import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'    
import { UnseenMsgsContext } from '../../utils/contexts'
import formatNum from '../../utils/formatNum'
import useResizer from '../../hooks/useWindowResizer'


export default _ => {
  const [ width ] = useResizer()

  return(
    <UnseenMsgsContext.Consumer>
      {({ messages }) =>
        <li id={width < 830 ? 'SideMenuNavbarOption' : 'navbarOption' }>
          <Link to="/messages">
            <div>
              <span id="icon">
                <FontAwesomeIcon icon={ faMailBulk }/>
                {messages > 0 && width < 1200 &&
                  <span id="notification">{ formatNum(messages) }</span>
                }
              </span>
              <p id={ window.location.pathname.split('/')[1] === 'messages'? 'ActiveNavbarOption' : ''}>
                Messages
                {messages > 0 && width > 1200 &&
                  <>
                    <span>{ '  ' }</span>
                    <span id="notification">{ formatNum(messages) }</span>
                  </>
                }
              </p>
            </div>
          </Link>
        </li>
      }
    </UnseenMsgsContext.Consumer>
  )
}