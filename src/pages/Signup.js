import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar/index'
import Footer from '../components/Footer/index'
import Spinner from '../components/spiners/BigSpinner'
import SignupForm from '../forms/SignupForm'
import useSignupPage from '../hooks/SignupPage/useSignupPage'
import { BrightThemeContext } from '../utils/contexts'


export default _ => {
  document.title = 'IDiary - Create account'

  const [ error, setError ] = useState('')
  
  useEffect(_ => window.scrollTo(0, 0), [ ])

  const [ pageLoading, enoughSpace ] = useSignupPage(setError)

  return(
    <>
      <Navbar/>      
      <BrightThemeContext.Consumer>
        {theme =>
          <div className={`signupFormPage ${theme? 'Bright' : 'Dark'}Page Page`}>
            {enoughSpace === true && !pageLoading &&
              <>
                <h1>Create your account</h1>
                <SignupForm theme={theme}/>
              </>
            }
            {error.length > 0 &&
              <h3>{ error }</h3>
            }
            {!pageLoading && enoughSpace === false &&
              <h3>Unfortunately there is no space left on the database</h3>
            }
            { pageLoading && <Spinner/> }
          </div>
        }
      </BrightThemeContext.Consumer>
      <Footer/>
    </>
  )
}
