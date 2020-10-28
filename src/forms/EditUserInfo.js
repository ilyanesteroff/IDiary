import React, { useState } from 'react'
//import * as Ctx from '../utils/contexts'
import FormSpinner from '../components/spiners/FormSpinner'
import ComplainLog from '../components/FormComponents/ComplainLog'
import Input from '../components/FormComponents/TodoInput'
import Textarea from '../components/todos/Textarea'


export default _ => {
  const [submiting, setSubmiting] = useState(false)
  const [error, setError] = useState('')

  return(
    <form id="FormInModal" className={`${submiting? 'FormWithSpinner' : ''}`}>
      <FormSpinner/>
      <ComplainLog message={error}/>
      <Textarea
        label="Tell us about yourself?"
        placeholder="Everything you wish"
      />
      <Input
        type="url"
        label="Your Webpage"
        placeholder="URL"
      />
      <Input
        type="text"
        label="Your Company"
        placeholder="Where you are working"
      />
      <p style={{marginTop: '1vh'}}>Your relationship status</p>
      <select>
        <option selected></option>
        <option value="single">Single</option>
        <option value="married">Married</option>
        <option value="civil union">In civil union</option>
        <option value="complicated">It's complicated</option>
        <option value="divorced">Divorced</option>
      </select>
      <button>
        Edit
      </button>
    </form>
  )
}