import validator from 'validator'
import { passwordPattern } from '../utils/regExp'

export default (password1, password2, setError) => {
  if(password1.length === 0){
    setError('Please enter password')
    return false
  }
  if(password2.length === 0){
    setError('Please repeat password')
    return false
  }
  if(password1 !== password2){
    setError('Passwords should be the same')
    return false
  }
  const validationPassed = validator.matches(password1, passwordPattern)
  if(!validationPassed){
    setError('Password is insecure')
    return false
  }
  return true
}