import validateEmail from '../validators/validateEmail'
import requestSendMail from '../api/resetpassword/request-send-mail'

export default async (e, email, setSubmiting, setMailSent, setError) => {
  e.preventDefault()
  setSubmiting(true)
  const verdict = validateEmail(email, setError)
  if(!verdict) return setSubmiting(false)
  const sentEmail = await requestSendMail(email)
  setError('')
  setSubmiting(false)
  sentEmail 
    ? setMailSent(true)
    : setError('The technical error occured')
}