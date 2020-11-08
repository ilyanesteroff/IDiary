import { apiLink } from '../../../utils/serverUrl'
import headers from '../../../utils/headers'
import { tokenFromStorage as token } from '../../../utils/tokens'


export default userId => {
  headers.set('Authorization', `Bearer ${token()}`)
  return fetch(apiLink + '/requestFrom', {
    method: 'PATCH',
    headers: headers,
    body: JSON.stringify({ userId: userId })
  })
    .then(res => res.json())
    .then(res => 
      res.requestReceived
        ? res.request
        : null
    )
    .catch(_ => {
      return null
    })
}