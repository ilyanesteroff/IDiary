import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/navbar'
import Stack from '../components/stack-page'
import { BrightThemeContext } from '../utils/contexts'


export default _ => {
  document.title = 'IDiary Stack'
  return(
    <>
      <Navbar/>
      <BrightThemeContext.Consumer>
        {theme => 
          <div className={`${theme? 'Bright' : 'Dark'}Page Page`}>
            <Stack/>
          </div>
        }
      </BrightThemeContext.Consumer>
      <Footer/>
    </>
  )
}