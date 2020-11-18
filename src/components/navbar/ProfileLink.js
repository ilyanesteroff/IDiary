import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserNinja } from '@fortawesome/free-solid-svg-icons'    
import { IncomingReqsContext } from '../../utils/contexts'
import formatNum from '../../utils/formatNum'
import useResizer from '../../hooks/useWindowResizer'


export default ({ username }) => {
  const [ width ] = useResizer()

  return(
    <IncomingReqsContext.Consumer>
      {({ requests }) =>
        <li id={width < 830 ? 'SideMenuNavbarOption' : 'navbarOption' }>
          <Link to="/profile">
            <div>
              <span id="icon">
                <FontAwesomeIcon icon={ faUserNinja }/>
                {requests > 0 && width < 1200 &&
                  <span id="notification">{ formatNum(requests) }</span>
                }
              </span>
              <p id={window.location.pathname.split('/')[1] === 'profile'? 'ActiveNavbarOption' : ''}>
                { username }
                {requests > 0 && width > 1200 &&
                  <>
                    <span>{ '  ' }</span>
                    <span id="notification">{ formatNum(requests) }</span>
                  </>
                }
              </p>
            </div>
          </Link>
        </li>
      }
    </IncomingReqsContext.Consumer>
  )
}