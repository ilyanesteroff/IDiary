import React, { useLayoutEffect, useContext } from 'react'
import ReactDOM from 'react-dom'
import { 
  IsAuthContext, 
  FirstnameContext,
  BrightThemeContext
} from '../../utils/contexts'
import { NavbarElement } from './NavbarElement'
import { LogoutButton as Logout } from './LogoutButton'
import * as na from './navbarOptions'
import './portal-menu.css'
import './navbar.css'


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
  const IsAuth = _ => useContext(IsAuthContext)
  const Firstname = _ => useContext(FirstnameContext)
  let options //navbar options

  if(IsAuth()){
    options = na.optionsForUsers
    const firstnameIndex = options.findIndex(f => f.link === '/profile')
    options[firstnameIndex].value = Firstname().firstname
  } else options = na.optionsForVisitors

  options = options.map((o, i) => 
    <NavbarElement
      sideMenu={true}
      link={o.link} 
      icon={o.icon}
      content={o.value}
      key={i+'op'}
    />
  )

  if(IsAuth()) options.push(<Logout key="logoutBtn" sideMenu={true}/>)

  return (
    <BrightThemeContext.Consumer>
      {theme =>
        <SideMenuPortal>
          <div 
            id="SideMenu" 
            className={theme? 'brightSideMenu' : 'darkSideMenu'}
            onClick={() => opened(false)}
          >
            <ul className="SideMenuOptions">
              { options }
            </ul>
          </div>
      </SideMenuPortal>
      }
    </BrightThemeContext.Consumer>
  )
}

export default SideMenu