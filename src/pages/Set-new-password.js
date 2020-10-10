import React, { useState, useEffect, useRef, memo } from 'react'
import Spinner from '../components/spiners/BigSpinner'
import InactiveLink from '../components/FormComponents/InactiveLink'
import ResetPasswordForm from '../forms/SetNewPassword'
import { BrightThemeContext } from '../utils/contexts'
import checkIfResetPwIsActual from '../api/checks/if-password-reset-is-actual'
import { tokenFromUrl as token } from '../utils/tokens'

export default memo(_ => {
  document.title = 'TooDooDoo - Set new password'
  const controller = new AbortController()
  const [ checked, setChecked ] = useState(false)
  const [ actual, setActual ] = useState(false)

  const _controller = useRef(controller)
  const abort = _controller.current.abort

  useEffect(_ => {
    checkIfResetPwIsActual(token, _controller.current.signal, setChecked, setActual)
    return _ => abort()
  }, [abort])

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
})