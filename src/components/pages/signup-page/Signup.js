import React, { useContext, useRef } from 'react'
import Navbar from '../../navbar/Navbar'
import { Password, Email } from '../loginpage/Fields'
import { ComplainLog } from '../loginpage/ComplainLog'
import { BrightThemeContext } from '../../../utils/contexts'
import './signup.css'
import '../loginpage/forms.css'
import '../../mainsection/main-unit.css'

export default _ => {
  return(
    <BrightThemeContext.Consumer>
      {theme =>
        <>
          <Navbar/>
          <div id="SignUpForm">
            <h1
              id="headline"
              className={`${theme ? 'Bright' : 'Dark'}Headline`}
            >
              Create your account
            </h1>
            <SignupForm theme={theme}/>
          </div>
        </>
      }
    </BrightThemeContext.Consumer>
  )
}

const SignupForm = ({theme}) => {
  const email = useRef(null)
  const password1 = useRef(null)
  const password2 = useRef(null)
  
  return (
    <form>
      <ComplainLog/>
      <div id="names">
        <input 
          id="firstname" 
          placeholder="Firstname"
          type="text"
        />
        <input 
          id="lastname" 
          placeholder="Lastname"
          type="text"
        />
      </div>
      <input 
        id="username" 
        placeholder="username"
        type="text"
      />
      <Email ref={email}/>
      <Password ref={password1}/>
      <Password ref={password2}/>
      <input 
        type="checkbox" 
        id="publicProfile"
      />
      <input
        type="checkbox" 
        id="Agreement"
      />
      <button>Submit</button>
    </form>
  )
}