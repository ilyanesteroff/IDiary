import { apiLink } from '../utils/serverUrl'
import headers from '../utils/headers'
import { tokenFromStorage as token } from '../utils/tokens'


export default (url) => {
  headers.set('Authorization', `Bearer ${token()}`)
  return fetch(apiLink + '/deleteAvatar', {
    headers: headers,
    method: 'PATCH',
    body: JSON.stringify({
      url: url
    })
  })
    .then(res => res.json())
    .then(res => res.deleted)
    .catch(err => {
      return false
    })
}