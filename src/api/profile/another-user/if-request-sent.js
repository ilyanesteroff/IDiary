import { apiLink } from '../../../utils/serverUrl'
import headers from '../../../utils/headers'
import { tokenFromStorage as token } from '../../../utils/tokens'


export default userId => {
  headers.set('Authorization', `Bearer ${token()}`)
  return fetch(apiLink + '/requestTo', {
    headers: headers,
    method: 'PATCH',
    body: JSON.stringify({ userId: userId })
  })
    .then(res => res.json())
    .then(res => res) 
    .catch(_ => {
      return false
    })
}