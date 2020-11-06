import { apiLink } from '../../../utils/serverUrl'
import headers from '../../../utils/headers'
import { tokenFromStorage as token } from '../../../utils/tokens'


export default (userId) => {
  headers.set('Authorization', `Bearer ${token()}`)
  return fetch(apiLink + '/ifUserFollows', {
    method: 'PATCH',
    headers: headers,
    body: JSON.stringify({ userId: userId })
  })
    .then(res => res.json())
    .then(res => res.userFollows)
    .catch(_ => {
      return false
    })
}