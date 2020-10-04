import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { BrightThemeContext } from '../../utils/contexts'
import './navbar.css'
import './portal-menu.css'

export const NavbarElement = ({link, icon, content, sideMenu}) => {
  return(
    <BrightThemeContext.Consumer>
      {theme =>
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
        >
          <Link to={link} id="link">
            <span>
              <FontAwesomeIcon icon={icon} 
                id={
                  sideMenu
                    ? 'SideMenuNavbarOptionIcon'
                    : 'navbarOptionIcon'
                } 
                className={
                  theme
                    ? 'BrightNavbarIcon'
                    : 'DarkNavbarIcon'
              }/>
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
                {content}
              </p>
            </span>
          </Link>
        </li>
      }
    </BrightThemeContext.Consumer>
  )
}