import ifUserExists from '../api/checks/if-user-exists'
import requestSendMail from '../api/resetpassword/request-send-mail'

export default async (e, email, setSubmiting, setMailSent, setError) => {
  e.preventDefault()
  setSubmiting(true)
  const verdict = await ifUserExists(email, true)
  if(!verdict) { 
    setSubmiting(false)
    return setError('It seems there is no user matching email')
  }
  const sentEmail = await requestSendMail(email)
  setError('')
  setSubmiting(false)
  sentEmail 
    ? setMailSent(true)
    : setError('The technical error occured')
}