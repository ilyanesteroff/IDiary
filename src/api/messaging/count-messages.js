import { apiLink } from '../../utils/serverUrl'
import headers from '../../utils/headers'
import { tokenFromStorage as token } from '../../utils/tokens'


export default (convID) {
  headers.set('Authorization', `Bearer ${token()}`)
  return fetch(apiLink + '/countMessages',{
    headers: headers,
    method: 'PATCH',
    body: JSON.stringify({
      convID: convID
    })
  })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      return res.messages
    })
    .catch(err => {
      console.log(err.message)
      return 0
    })
}