import { apiLink } from '../../utils/serverUrl'
import headers from '../../utils/headers'
import { tokenFromStorage as token } from '../../utils/tokens'


export default to => {
  headers.set('Authorization', `Bearer ${token()}`)
  return fetch(apiLink + '/sendFollowRequest', {
    headers: headers,
    method: 'PATCH',
    body: JSON.stringify({ to: to })
  })
    .then(res => res.json())
    .then(res => res.requestSent)
    .catch(_ => {
      return false
    })
}