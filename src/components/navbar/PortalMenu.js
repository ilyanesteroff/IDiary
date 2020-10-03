import React, { useLayoutEffect, useContext } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { 
  isAuthContext, 
  FirstnameContext,
  BrightThemeContext
} from '../../utils/contexts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as na from './navbarOptions'
import './portal-menu.css'


const sideMenu = document.getElementById('side-menu');

const SideMenuPortal = props => {
  let element = document.createElement('div')
  
  useLayoutEffect(() => {
    sideMenu.appendChild(element)
    document.body.style.overflowY = 'hidden'
    
    return _ => {
      sideMenu.removeChild(element)
      document.body.style.overflowY = 'auto'
    }
  })

  return  ReactDOM.createPortal(
    props.children,
    element
  )
}

const SideMenu = ({opened}) => {
  const IsAuth = _ => useContext(isAuthContext)
  const Firstname = _ => useContext(FirstnameContext)
  const Theme = _ => useContext(BrightThemeContext)
  let options //navbar options

  if(IsAuth()){
    options = na.optionsForUsers
    const firstnameIndex = options.findIndex(f => f.value === 'firstname')
    options[firstnameIndex].value = Firstname().firstname
  } else options = na.optionsForVisitors

  options = options.map((o, i) => 
    <NavbarElement
      theme={Theme()} 
      link={o.link} 
      icon={o.icon}
      content={o.value}
      key={i+'op'}
    />)

  return (
    <SideMenuPortal>
      <div 
        id="SideMenu" 
        className={Theme()? 'brightSideMenu' : 'darkSideMenu'}
        onClick={() => opened(false)}
      >
        <ul className="SideMenuOptions">
          {options}
        </ul>
      </div>
    </SideMenuPortal>
  )
}

const NavbarElement = ({theme, link, icon, content}) => {
  return(
    <li 
      id="SideMenuNavbarOption"
      className={
        theme
          ? 'BrightSideMenuNavbarOption'
          : 'DarkSideMenuNavbarOption'
      }
    >
      <Link to={link} id="link">
        <div>
          <FontAwesomeIcon icon={icon} id="SideMenuNavbarOptionIcon" 
          className={
            theme
              ? 'BrightNavbarIcon'
              : 'DarkNavbarIcon'
          }/>
          <p
            id="SideMenuNavbarOptionText"
            className={
              theme
                ? 'BrightNavbarOptionText'
                : 'DarkNavbarOptionText'
            }
          >
            {content}
          </p>
        </div>
      </Link>
    </li>
  )
}

export default SideMenu