import React, { useState, useEffect, useRef } from 'react'
import Spinner from '../components/spiners/BigSpinner'
import InactiveLink from '../components/FormComponents/InactiveLink'
import ResetPasswordForm from '../forms/SetNewPassword'
import { BrightThemeContext } from '../utils/contexts'
import checkIfResetPwIsActual from '../api/checks/if-password-reset-is-actual'
import { tokenFromUrl as token } from '../utils/tokens'

export default _ => {
  document.title = 'TooDooDoo - Set new password'
  const controller = new AbortController()
  const [ checked, setChecked ] = useState(false)
  const [ actual, setActual ] = useState(false)

  const checkForReset = useRef(async _ => {
    const verdict = await checkIfResetPwIsActual(token.current, controller.signal)
    setActual(verdict)
    setTimeout(_ => setChecked(true), 2000)
  })
  
  useEffect(_ => {
    checkForReset.current()
    return _ => controller.abort()
  }, [controller])

  return (
    <>
      <BrightThemeContext.Consumer>
        {theme => 
          <>
            {checked && actual &&
              <div className="formPage">
                <h1 id="headline" className={`${theme ? 'Bright' : 'Dark'}Headline`}>
                  Set new password
                </h1>
                <ResetPasswordForm 
                  theme={theme}
                  signal={controller.signal}
                />
              </div>
            }
            {checked && !actual &&
              <InactiveLink theme={theme}/>
            }
            {!checked && <Spinner/>}
          </>
        }
      </BrightThemeContext.Consumer>
    </>
  )
}