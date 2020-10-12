import React, { useState, useRef, useContext, memo } from 'react'
import Password from '../components/FormComponents/Password'
import ComplainLog from '../components/FormComponents/ComplainLog'
import setNewPassword from '../actionHandlers/SetNewPassword'
import { ErrorContext, SignalContext } from '../utils/contexts'

export default memo(({theme}) => {
  const Error = _ => useContext(ErrorContext)

  const [ errorResetingPw, setErrorResetingPw ] = useState(false)
  const [ submiting, setSubmiting ] = useState(false)
  
  const setError = useRef(Error().setError)
  const password1 = useRef(null)
  const password2 = useRef(null)
  
  const formClassName = `${theme? 'Bright': 'Dark'}LoginForm ${submiting? theme? 'BrightSubmitingForm': 'DarkSubmitingForm' : ''}`

  return(
    <form className={formClassName}>
      <ComplainLog/>
      {!errorResetingPw &&
        <>
          <Password ref={password1}/>
          <Password ref={password2}/>
          <SignalContext.Consumer>
            {signal =>
              <button onClick={e =>
                setNewPassword(
                  e,
                  password1.current.value,
                  password2.current.value,
                  setErrorResetingPw,
                  setSubmiting,
                  setError.current,
                  signal
                )
              }>
                Reset
              </button>
            }
          </SignalContext.Consumer>
        </>
      }
    </form>
  )
})