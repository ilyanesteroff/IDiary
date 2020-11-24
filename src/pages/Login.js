import React, { useEffect } from 'react'
import Navbar from '../components/navbar/index'
import Footer from '../components/Footer/index'
import LoginForm from '../forms/LoginForm'
import { BrightThemeContext } from '../utils/contexts'


export default _ => {  
  document.title = 'IDiary - Login'

  useEffect(_ => window.scrollTo(0, 0), [ ])
  
  return(    
    <>
      <Navbar/>
      <BrightThemeContext.Consumer>
        {theme => 
          <div className={`formPage ${theme? 'Bright' : 'Dark'}Page`}>
            <>
              <h1>
                Login into your account
              </h1>
              <LoginForm theme={theme}/>
            </>
          </div>
        }
      </BrightThemeContext.Consumer>
      <Footer/>
    </>
  )
}