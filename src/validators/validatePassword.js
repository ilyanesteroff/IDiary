import validator from 'validator'

export default (password1, password2, setError) => {
  if(password1.length === 0){
    setError('please enter password')
    return false
  }
  if(password2.length === 0){
    setError('please repeat password')
    return true
  }
  if(password1.length !== password2.length){
    setError('passwords should be the same')
    return false
  }
  const pwPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-+=/!@#$%^&*])(?=.{8,})")
  const validationPassed = validator.matches(password1, pwPattern)
  if(!validationPassed){
    setError('password should be at least 8 characters long and include at least one Uppercase letter and special character')
    return false
  }
  return true
}