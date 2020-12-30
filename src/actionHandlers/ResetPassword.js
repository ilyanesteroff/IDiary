import requestSendMail from '../api/resetpassword/request-send-mail'
import ifUserExists from '../api/checks/if-user-exists'


export default async (e, email, setSubmiting, setMailSent, setError, signal) => {
  e.preventDefault()
  setSubmiting(true)
  setError('')
  const verdict = await ifUserExists(email, signal)
  console.log('This endpoint')
  if(!verdict) return setSubmiting(false)
  const sentEmail = await requestSendMail(email, signal, setError)
  setSubmiting(false)
  sentEmail
    ? setMailSent(true)
    : setError('Technical error occured')
}