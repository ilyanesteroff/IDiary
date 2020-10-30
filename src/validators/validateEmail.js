import validator from 'validator'
import ifUserExists from '../api/checks/if-user-exists'


export default async (email, setError, userShouldExist) => {
  if(email.length === 0) {
    setError('please enter email')
    return false
  }
  if(!validator.isEmail(email)) {
    setError('Input does not seem to be an email')
    return false
  }
  const verdict = await ifUserExists(email)
  if(verdict && !userShouldExist) { 
    setError('User with this email already exists')
    return false
  }
  if(!verdict && userShouldExist){
    setError('User with this email does not exist')
    return false
  }
  return true
}