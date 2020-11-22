import React, { useRef, useEffect, useState, memo } from 'react'
import { Link } from 'react-router-dom'
import { LoginHandlerContext } from '../utils/contexts'
import FormSpinner from '../components/spiners/FormSpinner'
import Email from '../components/FormComponents/Email'
import Password from '../components/FormComponents/Password'
import Checkbox from '../components/FormComponents/Checkbox'
import handleClick from '../actionHandlers/LoginForm'
import useComplainLog from '../hooks/useComplainLog'


export default memo(_ => {
  const password = useRef(null)
  const email = useRef(null)
  const session = useRef(null)

  const [ submiting, setSubmiting ] = useState(false) 

  const [ setError, complainLog ] = useComplainLog()

  useEffect(_ => email.current && email.current.focus())
  
  return(
    <form className={submiting? 'FormWithSpinner' : ''}>
      <FormSpinner/>
      { complainLog }
      <Email 
        placeholder="Email or username"
        ref={email}    
      />
      <Password ref={password}/>
      <Checkbox ref={session}>
        <p className="InputLabel">Keep me logged in</p>
      </Checkbox>
      <LoginHandlerContext.Consumer> 
        {loginHandler => 
          <button onClick={(e) => 
            handleClick( 
              e, 
              email.current.value, 
              password.current.value, 
              session.current.checked, 
              loginHandler, 
              setSubmiting,
              setError
            )
          }>
            Login
          </button>
        }
      </LoginHandlerContext.Consumer>
      <Link id="firstLink" to="/password-reset">Forgot your password? No problems</Link>
      <hr/>
      <Link id="buttonLikeAnchor" to="/create-user">Create account</Link>
    </form>
  )
})
  