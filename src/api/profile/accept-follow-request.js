import { apiLink } from '../../utils/serverUrl'
import headers from '../../utils/headers'
import { tokenFromStorage as token } from '../../utils/tokens'


export default reqId => {
  headers.set('Authorization', `Bearer ${token()}`)
  return fetch(`${apiLink}/acceptFollowRequest`, {
    method: 'PATCH',
    headers: headers,
    body: JSON.stringify({ reqId: reqId })
  })
    .then(res => res.json())
    .then(res => {
      if(res.error) throw new Error(res.error)
      return res.requestAccepted
    })
    .catch(_ => {
      return false
    })
}