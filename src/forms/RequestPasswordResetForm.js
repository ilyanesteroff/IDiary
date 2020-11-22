import React, { useEffect, useState, useRef, memo } from 'react'
import FormSpinner from '../components/spiners/FormSpinner'
import Email from '../components/FormComponents/Email'
import DoneMessage from '../components/FormComponents/DoneMessage'
import resetPaswordHandler from '../actionHandlers/ResetPassword'
import { SignalContext } from '../utils/contexts'
import useComplainLog from '../hooks/useComplainLog'


export default memo(({theme}) => {
  const [ mailSent, setMailSent ] = useState(false)
  const [ submiting, setSubmiting ] = useState(false)

  const [ setError, complainLog ] = useComplainLog()

  const email = useRef(null)

  useEffect(_ => email.current && email.current.focus())
  
  const formClassName = `${theme? 'Bright': 'Dark'}LoginForm ${submiting? 'FormWithSpinner' : ''}`
  
  return (
    <form className={formClassName}>
      { mailSent
        ? <DoneMessage theme={theme}>
            Check your email
          </DoneMessage>
        : <>
            { complainLog }
            <FormSpinner/>
            <p className={`${theme? 'Bright' : 'Dark'}Text margin-bottom`}>
              We will send you password reset link on your email
            </p>
            <Email 
              placeholder="Your email or username"
              ref={email}
            />
            <SignalContext.Consumer>
              {signal =>
                <button onClick=
                  {(e) => 
                    resetPaswordHandler(
                      e, 
                      email.current.value, 
                      setSubmiting, 
                      setMailSent,
                      setError,
                      signal
                    )
                  }
                >
                  Submit
                </button>
              }
            </SignalContext.Consumer>
            <hr/>
            <a id="buttonLikeAnchor" href="/create-user">Create account</a>
          </>
      }
    </form>
  )
})