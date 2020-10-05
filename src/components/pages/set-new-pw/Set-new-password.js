import React, { 
  useState, 
  useRef, 
  useContext,
  useEffect
} from 'react'
import { Link } from 'react-router-dom'
//import Navbar from '../../navbar/Navbar'
import { 
  BrightThemeContext,
  ErrorContext 
} from '../../../utils/contexts'
import { checkIfResetPwIsActual } from '../../../utils/checks'
import { Password } from '../loginpage/Fields'
import { ComplainLog } from '../loginpage/ComplainLog'
import passwordValidator from '../../../utils/validatePasswords'
import resetPassword from './resetPassword'
import '../loginpage/forms.css'

const abortController = new AbortController()
const token = window.location.pathname.split('/')[2]

export default ({isAuth}) => {
  //will add check for isAuth
  const [ checked, setChecked ] = useState(false)
  const [ actual, setActual ] = useState(false)

  const checkForReset = async _ => {
    const verdict = await checkIfResetPwIsActual(token, abortController.signal)
    setActual(verdict)
    setChecked(true)
  }

  useEffect(_ => {
    checkForReset()
    return _ => abortController.abort()
  }, [])

  return (
    <>
      <BrightThemeContext.Consumer>
        {theme => 
          <>
            {checked && actual &&
              <div id="ResetPwFormMain">
                <h1 
                  id="headline"
                  className={`${theme ? 'Bright' : 'Dark'}Headline`}
                >
                  Set new password
                </h1>
                <ResetPasswordForm theme={theme}/>
              </div>
            }
            {checked && !actual &&
              <LinkInactive theme={theme}/>
            }
          </>
        }
      </BrightThemeContext.Consumer>
    </>
  )
}

const ResetPasswordForm = ({theme}) => {
  const Error = _ => useContext(ErrorContext)

  const [ errorResetingPw, setErrorResetingPw ] = useState(false)
  const [ submiting, setSubmiting ] = useState(false)

  const password1 = useRef(null)
  const password2 = useRef(null)
  const setError = useRef(Error().setError)

  const setNewPassword = async e => {
    e.preventDefault()
    setSubmiting(true)
    setError.current('')
    const _password1 = password1.current.value
    const _passowrd2 = password2.current.value
    const verdict = passwordValidator(_password1, _passowrd2, setError.current)
    if(verdict) {
      const resetPw = await resetPassword(token, _password1, abortController.signal)
      if(!resetPw) {
        setErrorResetingPw(true)
        setError.current('Reseting password failed try later')
      } else window.location.pathname = '/login'
    } 
    //test this
    setSubmiting(false)
  }

  const formClassName = `${theme? 'Bright': 'Dark'}LoginForm ${submiting? theme? 'BrightSubmitingForm': 'DarkSubmitingForm' : ''}`

  return(
    <form className={formClassName}>
      <ComplainLog/>
      {!errorResetingPw &&
        <>
          <Password ref={password1}/>
          <Password ref={password2}/>
          <button onClick={setNewPassword}>Reset</button>
        </>
      }
    </form>
  )
}

const LinkInactive = ({theme}) => (
  <div>
    <h1 
      id="headline"
      className={`${theme ? 'Bright' : 'Dark'}Headline`}
    >
      It seems like the link is inactive
    </h1>
    <p>
      You have either already reset password or the link is overdued, so you can request password reset agail
    </p>
    <Link id="buttonLikeAnchor" to="/password-reset">Request password reset</Link>
  </div>
)