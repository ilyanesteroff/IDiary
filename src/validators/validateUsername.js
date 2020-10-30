import validator from 'validator'
import ifUserExists from '../api/checks/if-user-exists'

export default async (username, setError) => {
  if(username.length === 0){
    setError('Please enter username')
    return false
  }
  if(!validator.isAlphanumeric(username)) {
    setError('Username can contain numbers and letters only')
    return false
  }
  const verdict = await ifUserExists(username)
  if(verdict){
    setError('Username is already taken')
    return false
  }
  return true
}