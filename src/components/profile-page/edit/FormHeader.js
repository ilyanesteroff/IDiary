import React from 'react'


export default ({ value }) => {
  let output
  switch (value) {
    case 'Delete':
      output = 'Delete your account'
      break
    case 'Password':
      output = 'Set a new Password'
      break
    default:
      output = `Edit your ${value}`
  }
  return <h2>{output}</h2>
}