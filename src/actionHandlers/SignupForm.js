import signupDataValidator from '../validators/validateSignup'
import createUser from '../api/createUser'


export default async (signupData, setError, setUserCreated, setSubmiting, signal) => {
  setError('')
  setSubmiting(true)
  const validationSucceded = await signupDataValidator(signupData, setError, signal)
  if(!validationSucceded) return setSubmiting(false)
  const userCreated = await createUser({
    username: signupData.username,
    firstname: signupData.firstname, 
    lastname: signupData.lastname,
    password: signupData.password1,
    email: signupData.email,
    public: signupData.public
  })
  userCreated
    ? setUserCreated(true)
    : setError('Technical error, please try later')
  setSubmiting(false)
}