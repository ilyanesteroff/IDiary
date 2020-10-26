import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import {
  BrightThemeContext,
  LogoutHandlerContext
} from '../../utils/contexts'

export default ({sideMenu}) => 
  <BrightThemeContext.Consumer>
    {theme => 
      <LogoutHandlerContext.Consumer>
        {logoutHandler => 
          <li 
            id={
              sideMenu 
                ? 'SideMenuNavbarOption'
                : 'navbarOption'
            } 
            className={
            sideMenu
              ? theme
                ? 'BrightSideMenuNavbarOption'
                : 'DarkSideMenuNavbarOption'
              : ''
            }
            onClick={logoutHandler}
          >
            <FontAwesomeIcon icon={faSignOutAlt}
              id={
                sideMenu
                  ? 'SideMenuNavbarOptionIcon'
                  : 'navbarOptionIcon'
              } 
              className={
                theme
                  ? 'BrightNavbarIcon'
                  : 'DarkNavbarIcon'
                }
            />
            <p 
              id={
                sideMenu
                  ? 'SideMenuNavbarOptionText'
                  : 'navbarOptionText'
              }
              className={
                theme
                  ? 'BrightNavbarOptionText'
                  : 'DarkNavbarOptionText'
              }
            > 
              Logout
            </p>
          </li>
        }
      </LogoutHandlerContext.Consumer>
    }
  </BrightThemeContext.Consumer>
  
