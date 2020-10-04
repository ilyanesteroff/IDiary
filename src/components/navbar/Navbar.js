import React, { useState, useEffect } from 'react'
import Logo from './logo/Logo'
import { 
  BrightThemeContext, 
  IsAuthContext, 
  FirstnameContext
} from '../../utils/contexts'
import { NavbarElement } from './NavbarElement'
import * as na from './navbarOptions'
import SideMenu from './PortalMenu'
import { ThemeToggler } from './ToggleThemeBtn/ThemeToggler'
import { LogoutButton as Logout } from './LogoutButton'
import './navbar.css'


export default props => {
  const [ width, setWidth ] = useState(window.innerWidth)
  const [ menuInPortalOpened, setMenuInPortalOpened] = useState(false)

  useEffect(_ => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    return function cleanup() {
      window.removeEventListener('resize', () => setWidth(window.innerWidth))
    }
  }, [])
 
  const closeSideMenu = _ => {
    if(menuInPortalOpened) setMenuInPortalOpened(false)
  }

  return (
    <BrightThemeContext.Consumer>
      {theme => 
        <div 
          id="navbar" 
          className={theme ? 'brightNavbar' : 'darkNavbar'}
          onClick={() => closeSideMenu()}
        >
          <Logo clickHandler={width > 830? _ => {} : _ => setMenuInPortalOpened(true)}/>
          { width > 830 && 
            <div id="navbarOptions">
              <IsAuthContext.Consumer>
                {isAuth =>
                  <FirstnameContext.Consumer>
                    {firstname =>
                      <ul>
                        {isAuth
                          ? na.optionsForUsers.map((op, i) => {
                              if(op.link === '/profile') op.value = firstname
                              return <NavbarElement
                                link={op.link}
                                content={op.value}
                                icon={op.icon}
                                key={i+'opt'}
                              />
                            })
                          : na.optionsForVisitors.map((op, i) => 
                              <NavbarElement
                                link={op.link}
                                content={op.value}
                                icon={op.icon}
                                key={i+'opt'}
                              />
                            )
                        }
                        {isAuth && <Logout/>}
                      </ul>
                    }
                  </FirstnameContext.Consumer>
                }
              </IsAuthContext.Consumer>
            </div>
          }
          {width < 830 && menuInPortalOpened && <SideMenu opened={setMenuInPortalOpened}/>}
          <ThemeToggler/>
        </div>
      }
    </BrightThemeContext.Consumer>
  )
}
