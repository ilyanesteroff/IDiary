import React, { useEffect } from 'react'
import { IsAuthContext, FirstnameContext, BrightThemeContext } from '../../utils/contexts'
import SideMenuPortal from '../portals/index'
import NavbarElement from './NavbarElement'
import ProfileLink from './ProfileLink'
import MessagesLink from './MessagesLink'
import Logout from './LogoutButton'
import * as na from './navbarOptions'


export default ({ opened }) => {  
  useEffect(_ => {
    if(opened){
      document.body.style.maxHeight = '100vh'
      return _ => document.body.style.maxHeight = 'auto' 
    }
  })

  return(
    <BrightThemeContext.Consumer>
      {theme =>
        <SideMenuPortal parent="side-menu">
          <IsAuthContext.Consumer>
            {isAuth =>
              <FirstnameContext.Consumer>
                {({ firstname }) =>
                  <div 
                    id="SideMenu" 
                    onClick={() => opened(false)}            
                    className={theme? 'brightSideMenu' : 'darkSideMenu'}
                  >
                    <ul className="SideMenuOptions">
                      {isAuth && 
                        <>
                          {
                            na.optionsForUsers.map((op, i) => 
                              <NavbarElement
                                link={op.link}
                                content={op.value}
                                icon={op.icon}
                                key={i+'opt'}
                                sideMenu
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
                            sideMenu
                          />
                        )
                      }
                      {isAuth && <Logout sideMenu/>}           
                    </ul>
                  </div>
                }
              </FirstnameContext.Consumer>
            }
          </IsAuthContext.Consumer>
        </SideMenuPortal>
      }
    </BrightThemeContext.Consumer>
  )
}