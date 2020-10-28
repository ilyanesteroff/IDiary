import React, { useState, forwardRef, memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import InputLabel from './InputLabel'

export default memo(forwardRef((props, ref) => {
  const [revealPw, setRevealPw] = useState(false)
  const [password, setPassword] = useState('')
  
  const togglePw = _ => setRevealPw(!revealPw) 

  const setPw = event => {
    event.target.value = event.target.value.trim()
    setPassword(event.target.value)
    if(password.length === 0) setRevealPw(false)
  }
    
  return (
    <div id="pwField">
      {props.signup &&
        <InputLabel required label={props.label}/> 
      }
      <input 
        type={revealPw? 'text' : 'password'} 
        onChange={setPw}
        placeholder="Your password"
        ref={ref}
      />
      {password.length > 0 &&
        <span onClick={togglePw}>
          {revealPw 
            ? <FontAwesomeIcon icon={faEyeSlash} className="revealPwIcon" id={props.signup ? 'withSignup' : 'withoutSignup'}/>
            : <FontAwesomeIcon icon={faEye} className="revealPwIcon" id={props.signup ? 'withSignup' : 'withoutSignup'}/>
          }
        </span>
      }
    </div>
  )
}))
  