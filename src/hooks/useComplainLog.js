import React, { useState } from 'react'
import ComplainLog from '../components/FormComponents/ComplainLog'


export default _ => {
  const [ error, setError ] = useState('')
  
  return [
    val => setError(val),
    <ComplainLog message={error}/>
  ]
}