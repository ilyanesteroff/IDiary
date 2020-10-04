import React, { useState } from 'react'
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
      <label>
        <input 
          type="password" 
          onChange={event => pwChange(event.target.value)}
          placeholder="Your password"
        />
      </label>
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