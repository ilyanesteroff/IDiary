

export default userId => {
  return userId === window.localStorage.getItem('userId') || userId === window.sessionStorage.getItem('userId')
}