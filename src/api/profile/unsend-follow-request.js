import { apiLink } from '../../utils/serverUrl'
import headers from '../../utils/headers'
import { tokenFromStorage as token } from '../../utils/tokens'


export default (reqId) => {
  headers.set('Authorization', `Bearer ${token()}`)
  return fetch(`${apiLink}/unsendFollowRequest/${reqId}`, {
    method: 'DELETE',
    headers: headers
  })
    .then(res => res.json())
    .then(res => {
      if(res.error) throw new Error(res.error)
      return res.requestCancelled
    })
    .catch(_ => {
      return false
    })
}