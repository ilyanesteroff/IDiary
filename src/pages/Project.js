import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/navbar'
import Project from '../components/project/index'
import { BrightThemeContext } from '../utils/contexts'


export default _ => {
  useEffect(_ => window.scrollTo(0, 0), [ ])
  
  return(
    <>
      <Navbar/>
      <BrightThemeContext.Consumer>
        {theme => 
          <div className={`${theme? 'Bright' : 'Dark'}Page Page`}>
            <Project/>
          </div>
        }
      </BrightThemeContext.Consumer>
      <Footer/>
    </>
  )
}