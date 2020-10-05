import React, { useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/Navbar'
import { ComplainLog } from '../loginpage/ComplainLog'
import { Email } from '../loginpage/Fields'
import { 
  BrightThemeContext,
  ErrorContext
} from '../../../utils/contexts'
import { checkIfUserExists } from '../../../utils/checks'
import requestSendMail from './requestSendMail'
import '../../mainsection/main-unit.css'
import './reset-password-page.css'


export const ResetPassword = _ => {
  document.title = 'TooDooDoo - Request password reset'

  return (
    <>
      <Navbar/>
      <BrightThemeContext.Consumer>
        {theme =>
          <div id="ResetPwFormMain">
            <h2 
              id="headline"
              className={`${theme ? 'Bright' : 'Dark'}Headline`}
            >
              Request password reset
            </h2>
            <ResetPasswordForm/>
          </div>
        }
      </BrightThemeContext.Consumer>
    </>
  )
}

const ResetPasswordForm = _ => {
  const Error = _ => useContext(ErrorContext)
  const email = useRef(null)
  const setError = useRef(Error().setError)

  const requestPwReset = async e => {
    e.preventDefault()
    const _email = email.current.value
    const verdict = await checkIfUserExists(_email, true)
    if(!verdict) return setError.current('It seems that there is no user matching email')
    const sentEmail = await requestSendMail(_email)
    console.log(sentEmail)
  }

  return (
    <form>
      <ComplainLog/>
      <Email ref={email}/>
      <button onClick={requestPwReset}>
        Submit
      </button>
      <hr/>
      <Link id="buttonLikeAnchor" to="/create-user">Create account</Link>
    </form>
  )
}