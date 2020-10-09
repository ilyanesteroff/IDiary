import { useRef } from 'react'

export default _ => {
  return [{
    email: useRef(null),
    password1: useRef(null),
    password2: useRef(null),
    firstname: useRef(null),
    lastname: useRef(null),
    username: useRef(null),
    publicProf: useRef(null),
    accept: useRef(null)
  }]
}
