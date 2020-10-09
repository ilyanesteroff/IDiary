import validator from 'validator'
import ifUserExists from '../api/checks/if-user-exists'

export default async (username, setError, signal) => {
  if(username.length === 0){
    setError('Please enter username')
    return false
  }
  if(!validator.isAlphanumeric(username)) {
    setError('Username can contain numbers and letters only')
    return false
  }
  const verdict = await ifUserExists(username, false, signal)
  //because it will be true if user exists
  if(verdict){
    setError('Username is already taken')
    return false
  }
  return true
}