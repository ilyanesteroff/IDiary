import React, { useContext } from 'react'
import { 
  IsAuthContext, 
  FirstnameContext,
  BrightThemeContext
} from '../../utils/contexts'
import SideMenuPortal from '../portals/index'
import NavbarElement from './NavbarElement'
import Logout from './LogoutButton'
import * as na from './navbarOptions'


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
        <SideMenuPortal parent="side-menu">
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