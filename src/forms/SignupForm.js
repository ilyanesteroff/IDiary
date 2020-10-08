import React, { useRef } from 'react'
import ComplainLog from '../components/FormComponents/ComplainLog'
import Email from '../components/FormComponents/Email'
import Password from '../components/FormComponents/Password'
import InputField from '../components/FormComponents/InputField'


export default ({theme}) => {
  const email = useRef(null)
  const password1 = useRef(null)
  const password2 = useRef(null)
  const firstname = useRef(null)
  const lastname = useRef(null)
  const username = useRef(null)
  //const publicProf = useRef(null)
  //const accept = useRef(null)

  const formClassName = `${theme? 'Bright': 'Dark'}LoginForm`

  return (
    <form className={formClassName}>
      <ComplainLog/>
      <div id="names">
        <InputField placeholder="Firstname" ref={firstname} required/>
        <InputField placeholder="Lastname" ref={lastname} required/>
      </div>
      <InputField placeholder="Username" ref={username} required/>
      <p>Your Email address</p>
      <Email ref={email}/>
      <p>Password</p>
      <Password ref={password1}/>
      <p>Password repeat</p>
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