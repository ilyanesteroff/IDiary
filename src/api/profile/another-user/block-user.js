import { apiLink } from '../../../utils/serverUrl'
import headers from '../../../utils/headers'
import { tokenFromStorage as token } from '../../../utils/tokens'


export default (userId) => {
  headers.set('Authorization', `Bearer ${token()}`)
  return fetch(apiLink + '/blockUser', {
    method: 'PATCH',
    body: JSON.stringify({ userId: userId }),
    headers: headers
  })
    .then(res => res.json())
    .then(res => res.userBlocked)
    .catch(_ => {
      return false
    })
}