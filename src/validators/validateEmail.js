import validator from 'validator'
import ifUserExists from '../api/checks/if-user-exists'


export default async (email, setError) => {
  if(email.length === 0) {
    setError('please enter email')
    return false
  }
  if(!validator.isEmail(email)) {
    setError('Input does not seem to be an email')
    return false
  }
  const verdict = await ifUserExists(email, true)
  if(verdict) {
    setError('user with this email already exists')
    return false
  }
  return true
}