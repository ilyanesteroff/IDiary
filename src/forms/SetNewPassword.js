import React, { useState, useRef, useContext } from 'react'
import Password from '../components/FormComponents/Password'
import ComplainLog from '../components/FormComponents/ComplainLog'
import setNewPassword from '../actionHandlers/SetNewPassword'
import { ErrorContext } from '../utils/contexts'

export default ({theme, signal}) => {
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
          <button onClick={e =>
            setNewPassword(
              e,
              password1.current.value,
              password2.current.value,
              setErrorResetingPw,
              setSubmiting,
              signal,
              setError.current
            )
          }>Reset</button>
        </>
      }
    </form>
  )
}