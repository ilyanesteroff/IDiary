import { apiLink } from '../utils/serverUrl'
import headers from '../utils/headers'
import { tokenFromStorage as token } from '../utils/tokens'


export default (url) => {
  headers.set('Authorization', `Bearer ${token()}`)
  return fetch(`${apiLink}/deleteAvatar/${url}`, {
    headers: headers,
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      return res.d
    })
    .catch(err => {
      console.log(err.message)
      return false
    })
}