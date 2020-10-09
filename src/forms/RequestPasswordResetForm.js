import React, { useState, useRef, useContext, useEffect } from 'react'
import ComplainLog from '../components/FormComponents/ComplainLog'
import Email from '../components/FormComponents/Email'
import DoneMessage from '../components/FormComponents/DoneMessage'
import resetPaswordHandler from '../actionHandlers/ResetPassword'
import { ErrorContext } from '../utils/contexts'


export default ({theme}) => {
  const controller = new AbortController()
  const Error = _ => useContext(ErrorContext)

  const [ mailSent, setMailSent ] = useState(false)
  const [ submiting, setSubmiting ] = useState(false)

  const setError = useRef(Error().setError)
  const email = useRef(null)

  useEffect(_ => controller.abort())

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
            <button onClick=
              {(e) => 
                resetPaswordHandler(
                  e, 
                  email.current.value, 
                  setSubmiting, 
                  setMailSent,
                  setError.current,
                  controller.signal
                )
              }
            >
              Submit
            </button>
            <hr/>
            <a id="buttonLikeAnchor" href="/create-user">Create account</a>
          </>
      }
    </form>
  )
}