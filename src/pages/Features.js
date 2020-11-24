import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/navbar'
import Features from '../components/Features/index'
import { BrightThemeContext } from '../utils/contexts'


export default _ => {
  return(
    <>
      <Navbar/>
      <BrightThemeContext.Consumer>
        {theme => 
          <div className={`${theme? 'Bright' : 'Dark'}Page Page`}>
            <Features/>
          </div>
        }
      </BrightThemeContext.Consumer>
      <Footer/>
    </>
  )
}