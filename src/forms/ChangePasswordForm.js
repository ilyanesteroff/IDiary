import React, { useState } from 'react'
//import * as Ctx from '../utils/contexts'
import FormSpinner from '../components/spiners/FormSpinner'
import ComplainLog from '../components/FormComponents/ComplainLog'
import Password from '../components/FormComponents/Password'


export default _ => {
  const [submiting, setSubmiting] = useState(false)


  return(
    <form id="FormInModal" className={`${submiting? 'FormWithSpinner' : ''}`}>
      <FormSpinner/>
      <ComplainLog/>
      <p>Enter your old password</p>
      <Password placeholder="old password"/>
      <p>Enter your new password</p>
      <Password placeholder="new password"/>
      <p>Repeat your new password</p>
      <Password placeholder="new password repeat"/>
      <button>
        Edit
      </button>
    </form>
  )
}