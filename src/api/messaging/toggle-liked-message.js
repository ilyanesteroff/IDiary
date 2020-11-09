import { apiLink } from '../../utils/serverUrl'
import headers from '../../utils/headers'
import { tokenFromStorage as token } from '../../utils/tokens'


export default ( messageId, liked ) => {
  headers.set('Authorization', `Bearer ${token()}`)
  return fetch(apiLink + '/toggleLikeMessage', {
    headers: headers,
    body: JSON.stringify({
      messageId: messageId,
      liked: liked
    }),
    method: 'PATCH'
  })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      return res.liked
    })
    .catch(err => {
      console.log(err.message)
      return false
    })
}