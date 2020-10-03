import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from './logo/Logo'
import { 
  BrightThemeContext, 
  IsAuthContext, 
  FirstnameContext
} from '../../utils/contexts'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as na from './navbarOptions'
import SideMenu from './PortalMenu'
import { ThemeToggler } from './ToggleThemeBtn/ThemeToggler'


export default props => {
  const [ width, setWidth ] = useState(window.innerWidth)
  const [ menuInPortalOpened, setMenuInPortalOpened] = useState(false)
  const IsAuth = _ => useContext(IsAuthContext)
  const Firstname = _ => useContext(FirstnameContext)
  const Theme = _ => useContext(BrightThemeContext)

  useEffect(_ => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    return _ => window.removeEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
 
  const closeSideMenu = _ => {
    if(menuInPortalOpened) setMenuInPortalOpened(false)
  }

  let options 

  if(IsAuth()) {
    options = na.optionsForUsers
    const firstnameIndex = options.findIndex(f => f.value === 'firstname')
    options[firstnameIndex].value = Firstname().firstname
  } else options = na.optionsForVisitors

  options = options.map((o, i) => <Option 
    key={i+'op'}
    link={o.link} 
    content={o.value} 
    icon={o.icon}
    theme={Theme()}
  />)

  return (
    <div 
      id="navbar" 
      className={Theme() ? 'brightNavbar' : 'darkNavbar'}
      onClick={() => closeSideMenu()}
    >
      <Logo clickHandler={width > 830? _ => {} : _ => setMenuInPortalOpened(true)}/>
      {width > 830 && 
        <div id="navbarOptions">
          <ul>
            {options}
          </ul>
        </div>
      }
      {width < 830 && menuInPortalOpened && <SideMenu opened={setMenuInPortalOpened}/>}
      <ThemeToggler/>
    </div>
  )
}

const Option = ({link, icon, content, theme}) => {
  return(
    <li className="navbarOption">
      <Link to={link} id="link">
        <div 
          id="navbarOptionIcon" 
          className={
            theme
              ? 'BrightNavbarIcon'
              : 'DarkNavbarIcon'
          }
        >
          <FontAwesomeIcon icon={icon}/>
        </div>
        <p 
          id="navbarOptionText"
          className={
            theme
              ? 'BrightNavbarOptionText'
              : 'DarkNavbarOptionText'
          }
        >
          {content}
        </p>
      </Link>
    </li>
  )
}