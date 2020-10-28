


export default (oldPw, newPw1, newPw2, setError) => {
  if(oldPw.length === 0) {
    setError('Please Enter your old password')
    return true
  }
  if(newPw1.length === 0){
    setError('Please enter a new password')
    return true
  }
  if(newPw2.length === 0){
    setError('Please repeat new password')
    return true
  }
  return false
}