import { apiLink } from '../../utils/serverUrl'
import headers from '../../utils/headers'
import { tokenFromStorage as token } from '../../utils/tokens'


export default convId => {
  headers.set('Authorization', `Bearer ${token()}`)
  return fetch(apiLink + '/viewMessages', {
    body: JSON.stringify({
      convId: convId
    }),
    method: 'PATCH',
    headers: headers
  })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      return res.messagesViewed
    })
    .catch(err => {
      console.log(err.message)
      return false
    })
}