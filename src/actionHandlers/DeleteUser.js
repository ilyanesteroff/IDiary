import deleteUser from '../api/profile/delete-user'
import verifyPassword from '../api/profile/updateuser/verify-password'


export default async (e, password, setSubmitting, setError, logout) => {
  e.preventDefault()
  setSubmitting(true)
  setError('')
 
  const pwMatches = await verifyPassword(password)
  if(!pwMatches) {
    setSubmitting(false)
    return setError('Password is invalid')
  } else {
    const userDeleted = await deleteUser(setError)
    if(!userDeleted){
      return setSubmitting(false)
    } else {
      logout()
      window.location.pathname = '/'
    }
  }
}