import { apiLink } from '../../utils/serverUrl'
import headers from '../../utils/headers'
import { tokenFromStorage as token } from '../../utils/tokens'


export default (messageId) => {
  headers.set('Authorization', `Bearer ${token}`)
  return fetch(`${apiLink}/deleteMessage/${messageId}`, {
    method: 'DELETE',
    headers: headers
  })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      return res.messageDeleted
    })
    .catch(err => {
      console.log(err.message)
      return false
    })
}