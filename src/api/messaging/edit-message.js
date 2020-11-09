import { apiLink } from '../../utils/serverUrl'
import headers from '../../utils/headers'
import { tokenFromStorage as token } from '../../utils/tokens'


export default ( messageId, newText ) => {
  headers.set('Authorization', `Bearer ${token}`)
  return fetch(apiLink + '/updateMessage', {
    method: 'PATCH',
    headers: headers,
    body: JSON.stringify({
      messageId: messageId,
      newText: newText
    })
  })
    .then(res => res.json())
    .then(res => res.messageUpdated)
    .catch(err => {
      console.log(err.message)
      return false
    })
}