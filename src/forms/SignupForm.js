import React, { useEffect, useState, memo } from 'react'
import FormSpinner from '../components/spiners/FormSpinner'
import Email from '../components/FormComponents/Email'
import Password from '../components/FormComponents/Password'
import InputField from '../components/FormComponents/InputField'
import Checkbox from '../components/FormComponents/Checkbox'
import { SignalContext } from '../utils/contexts'
import useSignupFormRefs from '../hooks/SignupPage/useSignupFormRefs'
import DoneMessage from '../components/FormComponents/DoneMessage'
import signupHandler from '../actionHandlers/SignupForm'
import useComplainLog from '../hooks/useComplainLog'


export default memo(({theme}) => {
  const [ userCreated, setUserCreated ] = useState(false)
  const [ submiting, setSubmiting ] = useState(false)

  const [ setError, complainLog ] = useComplainLog() 

  const [ refs ] = useSignupFormRefs()

  useEffect(_ => refs.firstname.current && refs.firstname.current.focus())

  const formClassName = `${theme? 'Bright': 'Dark'}LoginForm ${submiting? 'FormWithSpinner' : ''}`

  return (
    <>  
      <form className={formClassName}>
          {userCreated
        ? <DoneMessage theme={theme}>
            Check your email
          </DoneMessage>
        : <>
            { complainLog }
            <FormSpinner/>
            <div className="SignupFields">
              <InputField placeholder="Firstname" ref={refs.firstname} required withLabel name/>
              <InputField placeholder="Lastname" ref={refs.lastname} required  withLabel name/>
              <InputField placeholder="Username" ref={refs.username} required  withLabel username strictLowerCase/>
              <Email ref={refs.email} signup label="Your email address"/>
              <Password ref={refs.password1} signup label="Password"/>
              <Password ref={refs.password2} signup label="Password repeat"/>
            </div>
            <div>
              <Checkbox ref={refs.publicProf}> 
                <p className="InputLabel">
                  Your profile is public
                </p>
              </Checkbox>
              <Checkbox ref={refs.accept}>
                <p className="InputLabel">
                  Agree with all of the polices
                  <span className="requiredField">*</span>
                </p>
              </Checkbox>
            </div>
            <SignalContext.Consumer>
              {signal =>
                <button
                  onClick={e => {
                    e.preventDefault()
                    signupHandler({
                      email: refs.email.current.value,
                      password1: refs.password1.current.value,
                      password2: refs.password2.current.value,
                      username: refs.username.current.value,
                      firstname: refs.firstname.current.value,
                      lastname: refs.lastname.current.value,
                      accept: refs.accept.current.checked,
                      public: refs.publicProf.current.checked,
                    }, setError, setUserCreated, setSubmiting, signal)
                  }}
                >
                  Submit
                </button>
              }
            </SignalContext.Consumer>
          </>
        }
      </form>
      {!userCreated &&
        <p className="Lowest-warning">
          Fields marked with 
          <span className="requiredField">{' * '}</span>
          are required
        </p>
      }
    </>
  )
})