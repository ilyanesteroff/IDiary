

export default _ => {
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('userId')
  window.localStorage.removeItem('firstname')
  sessionStorage.removeItem('token')
  sessionStorage.removeItem('userId')
  sessionStorage.removeItem('firstname')
}