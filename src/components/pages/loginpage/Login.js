import React, { useState } from 'react'
import Navbar from '../../navbar/Navbar'
import {
  LoginHandlerContext,
  BrightThemeContext,
} from '../../../utils/contexts'
import './login.css'
import { Link } from 'react-router-dom'


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
                  <h1>Login into your existing account</h1>
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
          ? 'DarkLoginForm'
          : 'BrightLoginForm'
      }
    >
      <label>
        <p>Email:</p>
        <input 
          type="email" 
          onChange={event => emailChange(event.target.value)}
        />
      </label>
      <label>
        <p>Password:</p>
        <input 
          type="password" 
          onChange={event => pwChange(event.target.value)}
        />
        <Link to="/password-reset">Forgot your password? No problems</Link>
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
      <Link to="/create-user">Don't have an account? create one</Link>
    </form>
  )
}