import React, { useEffect } from 'react'
import Navbar from '../components/navbar/index'
import Footer from '../components/Footer/index'
import * as Ctx from '../utils/contexts'
import Page from '../components/MainPageForUsers/index'


export default _ => {
  document.title = 'IDiary - Main'
  
  useEffect(_ => window.scrollTo(0, 0), [ ])

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
      <Footer/>
    </>
  )
}