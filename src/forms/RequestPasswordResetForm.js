import React, { useState, useRef, useContext, memo } from 'react'
import ComplainLog from '../components/FormComponents/ComplainLog'
import Email from '../components/FormComponents/Email'
import DoneMessage from '../components/FormComponents/DoneMessage'
import resetPaswordHandler from '../actionHandlers/ResetPassword'
import { ErrorContext, SignalContext } from '../utils/contexts'


export default memo(({theme}) => {
  const Error = _ => useContext(ErrorContext)

  const [ mailSent, setMailSent ] = useState(false)
  const [ submiting, setSubmiting ] = useState(false)

  const setError = useRef(Error().setError)
  const email = useRef(null)

  const formClassName = `${theme? 'Bright': 'Dark'}LoginForm ${submiting? theme? 'BrightSubmitingForm': 'DarkSubmitingForm' : ''}`
  
  return (
    <form className={formClassName}>
      { mailSent
        ? <DoneMessage theme={theme}>
            Check your email
          </DoneMessage>
        : <>
            <ComplainLog/>
            <p className={`${theme? 'Bright' : 'Dark'}Text margin-bottom`}>
              We will send you password reset link on your email
            </p>
            <Email ref={email}/>
            <SignalContext.Consumer>
              {signal =>
                <button onClick=
                  {(e) => 
                    resetPaswordHandler(
                      e, 
                      email.current.value, 
                      setSubmiting, 
                      setMailSent,
                      setError.current,
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