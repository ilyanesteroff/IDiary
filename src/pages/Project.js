import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/navbar'
import { BrightThemeContext } from '../utils/contexts'


export default _ => {
  return(
    <>
      <Navbar/>
      <BrightThemeContext.Consumer>
        {theme => 
          <div className={`${theme? 'Bright' : 'Dark'}Page Page`}>
             
          </div>
        }
      </BrightThemeContext.Consumer>
      <Footer/>
    </>
  )
}