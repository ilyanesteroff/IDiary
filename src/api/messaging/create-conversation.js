import { apiLink } from '../../utils/serverUrl'
import headers from '../../utils/headers'
import { tokenFromStorage as token } from '../../utils/tokens'


export default (receiver, messageText) => {
  headers.set('Authorization', `Bearer ${token()}`)
  return fetch(apiLink + '/writeFirstMessage', {
    method: 'PATCH',
    headers: headers,
    body: JSON.stringify({
      receiver: receiver,
      messageText: messageText
    })
  })
    .then(res => res.json())
    .then(res => res.conversationCreated)
    .catch(err => {
      console.log(err.message)
      return false
    })
}