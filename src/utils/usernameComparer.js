
export default username => {
  return username === window.localStorage.getItem('username') || username === window.sessionStorage.getItem('username')
}