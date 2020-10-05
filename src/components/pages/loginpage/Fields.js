import React, { useState, forwardRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import './login.css'

export const Password = forwardRef((props, ref) => {
  const [revealPw, setRevealPw] = useState(false)
  const [password, setPassword] = useState('')

  const togglePw = _ => setRevealPw(!revealPw) 
  
  const setPw = event => {
    setPassword(event.target.value)
    if(password.length === 0) setRevealPw(false)
  }
  
  return (
    <div id="pwField">
      <input 
        type={revealPw? 'test' : 'password'} 
        onChange={setPw}
        placeholder="Your password"
        ref={ref}
      />
      {password.length > 0 &&
        <span onClick={togglePw}>
          {revealPw 
            ? <FontAwesomeIcon icon={faEyeSlash} className="revealPwIcon"/>
            : <FontAwesomeIcon icon={faEye} className="revealPwIcon"/>
          }
        </span>
      }
    </div>
  )
})

export const Email = forwardRef((props, ref) => 
  <label>
    <input 
      type="email" 
      ref={ref}
      placeholder="Your email address"
    />
  </label>
)