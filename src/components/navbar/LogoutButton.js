import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBomb } from '@fortawesome/free-solid-svg-icons'
import {
  BrightThemeContext,
  LogoutHandlerContext
} from '../../utils/contexts'
import './navbar.css'
import './portal-menu.css'

export const LogoutButton = ({sideMenu}) => 
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
            <div 
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
            >
              <FontAwesomeIcon icon={faBomb}/>
            </div>
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
  
