import validator from 'validator'

export default (password1, password2, setError) => {
  if(password1.length !== password2.length){
    setError('passwords should be the same')
    return false
  }
  //const validationPassed = validator.matches(password1, /^(?=.*[0-8])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-8]{8})$/)
  const validationPassed = validator.isAlpha(password1)
  if(!validationPassed){
    setError('password should be at least 8 characters long and include at least one Uppercase letter and special character')
    return false
  }
  return true
}