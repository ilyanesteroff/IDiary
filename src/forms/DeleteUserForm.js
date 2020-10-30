import React, { useState, useRef } from 'react'
import * as Ctx from '../utils/contexts'
import FormSpinner from '../components/spiners/FormSpinner'
import ComplainLog from '../components/FormComponents/ComplainLog'
import Password from '../components/FormComponents/Password'
import clickHandler from '../actionHandlers/DeleteUser'


export default _ => {
  const [ error, setError ] = useState('')
  const [ submiting, setSubmitting ] = useState(false)

  const password = useRef(null)

  return(
    <form id="FormInModal" className={`${submiting? 'FormWithSpinner' : ''}`}>
      <FormSpinner/>
      <ComplainLog message={error}/>
      <p>Enter your password</p>
      <Password placeholder="new password" ref={password}/>
      <Ctx.LogoutHandlerContext.Consumer>
        {logout =>
          <button
            onClick={e => 
              clickHandler(
                e, 
                password.current.value,
                setSubmitting, 
                setError, 
                logout
              )
            }
          >
            Submit
          </button>
        }
      </Ctx.LogoutHandlerContext.Consumer>
    </form>
  )
}