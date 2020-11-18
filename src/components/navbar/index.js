import React, { useState } from 'react'
import Logo from './Logo'
import { BrightThemeContext, IsAuthContext, FirstnameContext } from '../../utils/contexts'
import NavbarElement from './NavbarElement'
import * as na from './navbarOptions'
import SideMenu from './PortalMenu'
import ThemeToggler from './ThemeToggler'
import Logout from './LogoutButton'
import ProfileLink from './ProfileLink'
import MessagesLink from './MessagesLink'
import useResizer from '../../hooks/useWindowResizer'


export default _ => {
  const [ width ] = useResizer()
  const [ menuInPortalOpened, setMenuInPortalOpened] = useState(false)

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
                    {({ firstname }) =>
                      <ul>
                        {isAuth && 
                          <>
                            {
                              na.optionsForUsers.map((op, i) => 
                                <NavbarElement
                                  link={op.link}
                                  content={op.value}
                                  icon={op.icon}
                                  key={i+'opt'}
                                />
                              )
                            }
                            <MessagesLink/>
                            <ProfileLink username={firstname}/>
                          </>
                        }
                        {!isAuth && na.optionsForVisitors.map((op, i) => 
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