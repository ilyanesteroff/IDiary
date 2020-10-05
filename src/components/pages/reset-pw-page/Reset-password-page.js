import React, { 
  useRef, 
  useContext, 
  useState 
} from 'react'
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
import '../loginpage/forms.css'
import DoneMessage from './doneMessage'


export default _ => {
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
            <ResetPasswordForm theme={theme}/>
          </div>
        }
      </BrightThemeContext.Consumer>
    </>
  )
}

const ResetPasswordForm = ({theme}) => {
  const Error = _ => useContext(ErrorContext)
  const [ mailSent, setMailSent ] = useState(false)
  const [ submiting, setSubmiting ] = useState(false)
  const email = useRef(null)
  const setError = useRef(Error().setError)

  const requestPwReset = async e => {
    e.preventDefault()
    setSubmiting(true)
    const _email = email.current.value
    const verdict = await checkIfUserExists(_email, true)
    if(!verdict) {
      setSubmiting(false)
      return setError.current('It seems there is no user matching email')
    }
    const sentEmail = await requestSendMail(_email)
    setError.current('')
    setSubmiting(false)
    sentEmail 
      ? setMailSent(true)
      : setError('The technical error occured')
  }
  
  const formClassName = `${theme? 'Bright': 'Dark'}LoginForm ${submiting? theme? 'BrightSubmitingForm': 'DarkSubmitingForm' : ''}`

  return (
    <form className={formClassName}>
      { mailSent
        ? <DoneMessage theme={theme}>
            Check your email
          </DoneMessage>
        : <>
            <ComplainLog/>
            <p
              className={`${theme? 'Bright' : 'Dark'}Text margin-bottom`}
            >
              We will send you password reset link on your email
            </p>
            <Email ref={email}/>
            <button onClick={requestPwReset}>
              Submit
            </button>
            <hr/>
            <Link id="buttonLikeAnchor" to="/create-user">Create account</Link>
          </>
      }
    </form>
  )
}
