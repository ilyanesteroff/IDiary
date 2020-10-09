import validateEmail from '../validators/validateEmail'
import requestSendMail from '../api/resetpassword/request-send-mail'

export default async (e, email, setSubmiting, setMailSent, setError, signal) => {
  e.preventDefault()
  setSubmiting(true)
  const verdict = await validateEmail(email, setError, true, signal)
  if(!verdict) return setSubmiting(false)
  const sentEmail = await requestSendMail(email, signal)
  setError('')
  setSubmiting(false)
  sentEmail 
    ? setMailSent(true)
    : setError('The technical error occured')
}