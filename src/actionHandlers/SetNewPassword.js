import passwordValidator from '../validators/validatePassword'
import resetPassword from '../api/resetpassword/set-new-password'
import { tokenFromUrl as token } from '../utils/tokens'

export default async (e, password1, password2, setErrorResetingPw, setSubmiting, setError, signal) => {
  e.preventDefault()
  setSubmiting(true)
  setError('')
  console.log(password1, password2)
  const verdict = passwordValidator(password1, password2, setError)
  console.log(verdict)
  if(verdict) {
    const resetPw = await resetPassword(token, password1, signal)
    if(!resetPw) {
      setErrorResetingPw(true)
      setError('Reseting password failed try later')
    } else window.location.pathname = '/login'
  } 
  setSubmiting(false)
}