import React, { useRef, useState, useContext } from 'react'
import { ErrorContext } from '../utils/contexts'
import { LoginHandlerContext } from '../utils/contexts'
import ComplainLog from '../components/FormComponents/ComplainLog'
import Email from '../components/FormComponents/Email'
import Password from '../components/FormComponents/Password'
import handleClick from '../actionHandlers/LoginForm'


export default ({theme}) => {
  const Error = _ => useContext(ErrorContext)

  const password = useRef(null)
  const email = useRef(null)
  const setError = useRef(Error().setError)

  const [submiting, setSubmiting] = useState(false)  
  
  const formClassName = `${theme? 'Bright': 'Dark'}LoginForm ${submiting? theme? 'BrightSubmitingForm': 'DarkSubmitingForm' : ''}`
  
  return(
    <form className={formClassName}>
      <ComplainLog/>
      <Email ref={email}/>
      <Password ref={password}/>
      <LoginHandlerContext.Consumer>
        {loginHandler => 
          <button onClick={(e) => 
            handleClick(
              e,
              email.current.value,
              password.current.value,
              loginHandler,
              setSubmiting,
              setError.current
            )
          }>
            Login
          </button>
        }
      </LoginHandlerContext.Consumer>
      <a id="firstLink" href="/password-reset">Forgot your password? No problems</a>
      <hr/>
      <a id="buttonLikeAnchor" href="/create-user">Create account</a>
    </form>
  )
}
  