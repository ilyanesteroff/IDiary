import validator from 'validator'
import { passwordPattern } from '../utils/regExp'

export default (password1, password2, setError) => {
  if(password1.length === 0){
    setError('please enter password')
    return false
  }
  if(password2.length === 0){
    setError('please repeat password')
    return false
  }
  if(password1.length !== password2.length){
    setError('passwords should be the same')
    return false
  }
  const validationPassed = validator.matches(password1, passwordPattern)
  if(!validationPassed){
    setError('password should be at least 8 characters long and include at least one Uppercase letter and special character')
    return false
  }
  return true
}