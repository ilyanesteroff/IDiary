import React, { memo } from 'react'
import Navbar from '../components/navbar/index'
import Footer from '../components/Footer/index'
import SignupForm from '../forms/SignupForm'
import { BrightThemeContext } from '../utils/contexts'

export default memo(_ => {
  document.title = 'IDiary - Create account'

  return(
    <>
      <Navbar/>      
      <BrightThemeContext.Consumer>
        {theme =>
          <div className={`signupFormPage ${theme? 'Bright' : 'Dark'}Page`}>
            <h1
              id="headline"
              className={`${theme ? 'Bright' : 'Dark'}Headline`}
            >
              Create your account
            </h1>
            <SignupForm theme={theme}/>
          </div>
        }
      </BrightThemeContext.Consumer>
      <Footer/>
    </>
  )
})
