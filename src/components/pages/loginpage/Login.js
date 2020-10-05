import React, { 
  useRef, 
  useState
} from 'react'
import { Link } from 'react-router-dom'
import validator from 'validator'
import { ComplainLog } from './ComplainLog'
import { Password, Email } from './Fields'
import Navbar from '../../navbar/Navbar'
import {
  LoginHandlerContext,
  BrightThemeContext,
  ErrorContext
} from '../../../utils/contexts'
import './login.css'
import '../../mainsection/main-unit.css'


export const Login = _ => {  
  return(    
    <div>
      <Navbar/>
      <div id="Main">
        <BrightThemeContext.Consumer>
          {theme => 
            <>
              <h2 
                id="headline"
                className={`${theme ? 'Bright' : 'Dark'}Headline`}
              >
                Login into your existing account
              </h2>
                <LoginForm 
                  theme={theme}
                />
            </>
          }
        </BrightThemeContext.Consumer>
      </div>
    </div>
  )
}

const LoginForm = ({theme}) => {
  const password = useRef(null)
  const email = useRef(null)
  const [submiting, setSubmiting] = useState(false)  
  const Error = _ => React.useContext(ErrorContext)

  const formClassName = `${theme? 'Bright': 'Dark'}LoginForm ${submiting? theme? 'BrightSubmitingForm': 'DarkSubmitingForm' : ''}`
  
  const setError = React.useRef(Error().setError)

  const handleClick = (event, login) =>{
    event.preventDefault()
    const _email = email.current.value.trim()
    const _password = password.current.value.trim()
    //validate
    if(_email.length === 0 || _password.length === 0) return setError.current('Fill both fields')
    if(!validator.isEmail(_email)) return setError.current('The email does not seem to be valid')
    if(_password.length < 8) return setError.current('password must be at least 8 characters')
    setSubmiting(true)
    setError.current('')
    login(_email, _password, () => setSubmiting(false))
  }

  return(
    <form id="LoginForm" className={formClassName}>
      <ComplainLog/>
      <Email ref={email}/>
      <Password ref={password}/>
      <LoginHandlerContext.Consumer>
        {loginHandler => 
          <button onClick={(e) => handleClick(e, loginHandler)}>
            Login
          </button>
        }
      </LoginHandlerContext.Consumer>
      <Link id="firstLink" to="/password-reset">Forgot your password? No problems</Link>
      <hr/>
      <Link id="buttonLikeAnchor" to="/create-user">Create account</Link>
    </form>
  )
}
