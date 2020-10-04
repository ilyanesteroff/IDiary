import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/Navbar'
import {
  LoginHandlerContext,
  BrightThemeContext,
} from '../../../utils/contexts'
import './login.css'
import '../../mainsection/main-unit.css'

export const Login = _ => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  return(    
    <div>
      <Navbar/>
      <div id="Main">
        <LoginHandlerContext.Consumer>
          {loginHandler => 
            <BrightThemeContext.Consumer>
              {theme => 
                <>
                  <h2 
                    id="headline"
                    className={
                      theme
                        ? 'BrightHeadline'
                        : 'DarkHeadline'
                    }
                  >
                    Login into your existing account
                  </h2>
                  <LoginForm 
                    emailChange={(email) => setEmail(email)}
                    pwChange={(pw) => setPassword(pw)}
                    loginHandler={_ => loginHandler(email, password)}
                    theme={theme}
                  />
                </>
              }
            </BrightThemeContext.Consumer>
          }
        </LoginHandlerContext.Consumer>
      </div>
    </div>
  )
}

const LoginForm = ({emailChange, pwChange, loginHandler, theme}) => {
  //make it responsive when user submits the data
  const pwComplain = useRef(null)
  const emailComplain = useRef(null)
  const [submiting, setSubmiting] = useState(false)

  return(
    <form 
      id="LoginForm"
      className={
        theme
          ? 'BrightLoginForm'
          : 'DarkLoginForm'
      }
    >
      <label>
        <input 
          type="email" 
          onChange={event => emailChange(event.target.value)}
          placeholder="Your email address"
        />
      </label>
      <span 
        className="complain" 
        ref={emailComplain}
      >
      </span>
      <label>
        <input 
          type="password" 
          onChange={event => pwChange(event.target.value)}
          placeholder="Your password"
        />
      </label>
      <span 
        className="complain" 
        ref={pwComplain}
      ></span>
      <button
        onClick={e => {
            e.preventDefault()
            loginHandler()
          }
        }
      >
        Login
      </button>
      <Link id="firstLink" to="/password-reset">Forgot your password? No problems</Link>
      <hr/>
      <Link id="buttonLikeAnchor" to="/create-user">Create account</Link>
    </form>
  )
}