import React from 'react'
import Navbar from '../components/navbar/index'
import * as Ctx from '../utils/contexts'
import Page from '../components/MainPageForUsers/index'


export default _ => {
  document.title = 'IDiary - Main'
  return(
    <>
      <Navbar/>
      <Ctx.BrightThemeContext.Consumer>
        {theme => 
          <div className={`${theme? 'Bright' : 'Dark'}Page Page`}>
            <Page/>
          </div>
        }
      </Ctx.BrightThemeContext.Consumer>
    </>
  )
}