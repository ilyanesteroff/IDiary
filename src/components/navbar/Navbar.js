import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from './logo/Logo'
import { 
  BrightThemeContext, 
  isAuthContext, 
  FirstnameContext, 
  toggleThemeContext 
} from '../../utils/contexts'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as na from './navbarOptions'
import SideMenu from './PortalMenu'


export default props => {
  const [ width, setWidth ] = useState(window.innerWidth)
  const [ menuInPortalOpened, setMenuInPortalOpened] = useState(false)
  const IsAuth = _ => useContext(isAuthContext)
  const Firstname = _ => useContext(FirstnameContext)

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
  />)

  return (
    <BrightThemeContext.Consumer>
      { value => 
        <div 
          id="navbar" 
          className={value? 'brightNavbar' : 'darkNavbar'}
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
          {menuInPortalOpened && <SideMenu opened={setMenuInPortalOpened}/>}
          <ToggleThemeBtn/>
        </div>
      }
    </BrightThemeContext.Consumer>
  )
}

const Option = props => {
  return(
    <BrightThemeContext.Consumer>
      {value => 
        <li className="navbarOption">
          <Link to={props.link} id="link">
            <div 
              id="navbarOptionIcon" 
              className={
                value
                  ? 'BrightNavbarIcon'
                  : 'DarkNavbarIcon'
              }
            >
              <FontAwesomeIcon icon={props.icon}/>
            </div>
            <p 
              id="navbarOptionText"
              className={
                value
                  ? 'BrightNavbarOptionText'
                  : 'DarkNavbarOptionText'
              }
            >
              {props.content}
            </p>
          </Link>
        </li>
      }
    </BrightThemeContext.Consumer>
  )
}

const ToggleThemeBtn = _ => {
  return(
    <toggleThemeContext.Consumer>
      {toggle => 
        <BrightThemeContext.Consumer>
          {theme => 
            <div id="ThemeToggler">
              <label className="switch">
                <input 
                  type="checkbox" 
                  checked={theme} 
                  onChange={toggle}
                />
                <span className="slider round"></span>
              </label>
            </div>
          }
        </BrightThemeContext.Consumer>
      }
    </toggleThemeContext.Consumer>
  )
}