import React, { useRef, useState, memo } from 'react'
import { LoginHandlerContext } from '../utils/contexts'
import FormSpinner from '../components/spiners/FormSpinner'
import Email from '../components/FormComponents/Email'
import Password from '../components/FormComponents/Password'
import Checkbox from '../components/FormComponents/Checkbox'
import handleClick from '../actionHandlers/LoginForm'
import useComplainLog from '../hooks/useComplainLog'


export default memo(({ theme }) => {
  const password = useRef(null)
  const email = useRef(null)
  const session = useRef(null)

  const [ submiting, setSubmiting ] = useState(false) 

  const [ setError, complainLog ] = useComplainLog()
  
  const formClassName = `${theme? 'Bright': 'Dark'}LoginForm ${submiting? 'FormWithSpinner' : ''}`
  
  return(
    <form className={formClassName}>
      <FormSpinner/>
      { complainLog }
      <Email 
        placeholder="Email or username"
        ref={email}    
      />
      <Password ref={password}/>
      <Checkbox ref={session}>
        <p className="InputLabel">Logout when browser closes</p>
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
      <a id="firstLink" href="/password-reset">Forgot your password? No problems</a>
      <hr/>
      <a id="buttonLikeAnchor" href="/create-user">Create account</a>
    </form>
  )
})
  