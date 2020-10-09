import usernameValidator from './validateUsername'
import passwordValidator from './validatePassword'
import emailValidator from './validateEmail'

export default async (data, setError) => {
  if(data.firstname.length < 2) {
    data.firstname.length === 0 
      ? setError('Please enter firstname')
      : setError('Firstname should be at least 2 characters long')
    return false
  }
  if(data.lastname.length < 4) {
    data.lastname.length === 0 
    ? setError('Please enter lastname')
    : setError('Lastname should be at least 4 characters long')
    return false
  }
  const usernameValidated = await usernameValidator(data.username, setError)
  if(!usernameValidated) return false
  const isEmailValid = await emailValidator(data.email, setError)
  if(!isEmailValid) return false
    
  const pwValidated = passwordValidator(
    data.password1,
    data.password2,
    setError
  )
  if(!pwValidated) return false
  if(!data.accept) {
    setError('You must accept all policy rules')
    return false
  }
  return true
} 