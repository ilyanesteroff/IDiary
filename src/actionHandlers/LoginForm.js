import validator from 'validator'


export default (event, email, password, session, loginHandler, setSubmiting, setError) => {
  event.preventDefault()
  if(email.length === 0 || password.length === 0) return setError('Fill both fields')
  if(!validator.isEmail(email)) return setError('The email does not seem to be valid')
  if(password.length < 8) return setError('password must be at least 8 characters')
  setSubmiting(true)
  setError('')
  loginHandler(email, password, session, () => setSubmiting(false))
}