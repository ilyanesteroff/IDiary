import React, { useState } from 'react'
//import * as Ctx from '../utils/contexts'
import FormSpinner from '../components/spiners/FormSpinner'
import ComplainLog from '../components/FormComponents/ComplainLog'
import Input from '../components/FormComponents/TodoInput'


export default _ => {
  const [submiting, setSubmiting] = useState(false)


  return(
    <form id="FormInModal" className={`${submiting? 'FormWithSpinner' : ''}`}>
      <FormSpinner/>
      <ComplainLog/>
      <Input
        type="text"
        label="Your Username"
        placeholder="Your username"
      />
      <Input
        type="text"
        label="Your Firstname"
        placeholder="What is your name?"
      />
      <Input
        type="text"
        label="Your Lastname"
        placeholder="What is your surname?"
      />
      <button>
        Edit
      </button>
    </form>
  )
}