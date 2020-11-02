import { apiLink } from '../../utils/serverUrl'
import headers from '../../utils/headers'
import { tokenFromStorage as token } from '../../utils/tokens'


export default followId => {
  headers.set('Authorization', `Bearer ${token()}`)
  return fetch(`${apiLink}/unfollowOrRemoveFollower/${followId}`,{
    method: 'DELETE',
    headers: headers
  })
    .then(res => res.json())
    .then(res => {
      if(res.error) throw new Error(res.error)
      return res.unfollowed
    })
    .catch(_ => {
      return false
    })
}