import React, { useRef, useContext, useState, memo } from 'react'
import ComplainLog from '../components/FormComponents/ComplainLog'
import Email from '../components/FormComponents/Email'
import Password from '../components/FormComponents/Password'
import InputField from '../components/FormComponents/InputField'
import Checkbox from '../components/FormComponents/Checkbox'
import { ErrorContext } from '../utils/contexts'
import useSignupFormRefs from '../hooks/useSignupForm'
import DoneMessage from '../components/FormComponents/DoneMessage'
import signupHandler from '../actionHandlers/SignupForm'


export default memo(({theme, signal}) => {
  const [userCreated, setUserCreated] = useState(false)
  const [submiting, setSubmiting] = useState(false)

  const Error = _ => useContext(ErrorContext)

  const setError = useRef(Error().setError)

  const [refs] = useSignupFormRefs()

  const formClassName = `${theme? 'Bright': 'Dark'}LoginForm ${submiting? theme? 'BrightSubmitingForm': 'DarkSubmitingForm' : ''}`

  return (
    <form className={formClassName}>
      {userCreated
      ? <DoneMessage theme={theme}>
          Check your email
        </DoneMessage>
      : <>
          <ComplainLog/>
          <InputField placeholder="Firstname" ref={refs.firstname} required/>
          <InputField placeholder="Lastname" ref={refs.lastname} required/>
          <InputField 
            placeholder="Username" 
            ref={refs.username} 
            required 
            strictLowerCase
          />
          <p>
            Your Email address
            <span className="requiredField">*</span>
          </p>
          <Email ref={refs.email}/>
          <p>
            Password
            <span className="requiredField">*</span>
          </p>
          <Password ref={refs.password1}/>
          <p>
            Password repeat
            <span className="requiredField">*</span>
          </p>
          <Password ref={refs.password2}/>
          <div>
            <Checkbox ref={refs.publicProf}> 
              <p>
                Your profile is public
              </p>
            </Checkbox>
            <Checkbox ref={refs.accept}>
              <p>
                Agree with all of the polices
                <span className="requiredField">*</span>
              </p>
            </Checkbox>
          </div>
          <p className="Lowest-warning">
            Fields marked with 
            <span className="requiredField">{' * '}</span>
            are required
          </p>
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
              }, setError.current, setUserCreated, setSubmiting, signal)
            }}
          >
            Submit
          </button>
        </>
      }
    </form>
  )
})