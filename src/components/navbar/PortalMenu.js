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
  const Thema = _ => useContext(BrightThemeContext)
  let options //navbar options

  if(IsAuth()){
    options = na.optionsForUsers
    const firstnameIndex = options.findIndex(f => f.value === 'firstname')
    options[firstnameIndex].value = Firstname().firstname
  } else options = na.optionsForVisitors

  options = options.map((o, i) => 
    <NavbarElement
      thema={Thema()} 
      link={o.link} 
      icon={o.icon}
      content={o.value}
      key={i+'op'}
    />)

  return (
    <SideMenuPortal>
      <div 
        id="SideMenu" 
        className={Thema()? 'brightSideMenu' : 'darkSideMenu'}
        onClick={() => opened(false)}
      >
        <ul className="SideMenuOptions">
          {options}
        </ul>
      </div>
    </SideMenuPortal>
  )
}

const NavbarElement = ({thema, link, icon, content}) => {
  return(
    <li className="SideMenuNavbarOption">
      <Link to={link} id="link">
        <div 
          id="SideMenuNavbarOptionIcon" 
          className={
            thema
              ? 'BrightNavbarIcon'
              : 'DarkNavbarIcon'
          }
        >
          <FontAwesomeIcon icon={icon}/>
          <span>  </span>
          <span
            id="SideMenuNavbarOptionText"
            className={
              thema
                ? 'BrightNavbarOptionText'
                : 'DarkNavbarOptionText'
            }
          >
            {content}
          </span>
        </div>
      </Link>
    </li>
  )
}

export default SideMenu