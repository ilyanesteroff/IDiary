import { apiLink } from '../utils/serverUrl'
import headers from '../utils/headers'
import { tokenFromStorage as token } from '../utils/tokens'


export default newUrl => {
  headers.set('Authorization', `Bearer ${token()}`)
  return fetch(apiLink + '/setAvatar', {
    method: 'PATCH',
    headers: headers,
    body: JSON.stringify({ newUrl })
  })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      return res.avatarSet
    })
    .catch(err => {
      console.log(err.message)
      return false
    })
}