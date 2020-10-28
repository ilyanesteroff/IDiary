import React, { useState } from 'react'
//import * as Ctx from '../utils/contexts'
import FormSpinner from '../components/spiners/FormSpinner'
import ComplainLog from '../components/FormComponents/ComplainLog'
import Input from '../components/FormComponents/TodoInput'
import Checkbox from '../components/FormComponents/Checkbox'


export default _ => {
  const [submiting, setSubmiting] = useState(false)
  const [error, setError] = useState('')


  return(
    <form id="FormInModal" className={`${submiting? 'FormWithSpinner' : ''}`}>
      <FormSpinner/>
      <ComplainLog message={error}/>
      <Input
        type="tel"
        label="Your Phone number"
        placeholder="333333333"
      />
      <Checkbox>
        <p>Your profile is public</p>
      </Checkbox>
      <button>
        Edit
      </button>
    </form>
  )
}