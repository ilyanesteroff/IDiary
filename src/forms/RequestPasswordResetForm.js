import React, { useState, useRef, memo } from 'react'
import FormSpinner from '../components/spiners/FormSpinner'
import ComplainLog from '../components/FormComponents/ComplainLog'
import Email from '../components/FormComponents/Email'
import DoneMessage from '../components/FormComponents/DoneMessage'
import resetPaswordHandler from '../actionHandlers/ResetPassword'
import { SignalContext } from '../utils/contexts'


export default memo(({theme}) => {
  const [ mailSent, setMailSent ] = useState(false)
  const [ submiting, setSubmiting ] = useState(false)
  const [ error, setError ] = useState('')

  const email = useRef(null)
  
  const formClassName = `${theme? 'Bright': 'Dark'}LoginForm ${submiting? 'FormWithSpinner' : ''}`
  
  return (
    <form className={formClassName}>
      { mailSent
        ? <DoneMessage theme={theme}>
            Check your email
          </DoneMessage>
        : <>
            <ComplainLog message={error}/>
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