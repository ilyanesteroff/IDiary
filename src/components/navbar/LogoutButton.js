import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { LogoutHandlerContext } from '../../utils/contexts'


export default ({ sideMenu }) => 
  <LogoutHandlerContext.Consumer>
    {logoutHandler => 
      <li 
        id={ sideMenu ? 'SideMenuNavbarOption' : 'navbarOption' } 
        onClick={logoutHandler}
      >
        <FontAwesomeIcon icon={faSignOutAlt} id={ sideMenu ? 'SideMenuNavbarOptionIcon' : 'navbarOptionIcon' }/>
        <p>Logout</p>
      </li>
    }
  </LogoutHandlerContext.Consumer>
  
