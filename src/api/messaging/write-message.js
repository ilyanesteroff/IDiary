import { apiLink } from '../../utils/serverUrl'
import headers from '../../utils/headers'
import { tokenFromStorage as token } from '../../utils/tokens'


export default (text, receiver, convId) => {
  headers.set('Authorization', `Bearer ${token()}`)
  return fetch(apiLink + '/writeMessage', {
    method: 'PATCH',
    headers: headers,
    body: JSON.stringify({
      to: receiver,
      text: text, 
      convId: convId
    })
  })
    .then(res => res.json())
    .then(res => res)
    .catch(err => {
      console.log(err.message)
      return ''
    })
}