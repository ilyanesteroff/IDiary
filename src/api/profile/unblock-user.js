import { apiLink } from '../../utils/serverUrl'
import headers from '../../utils/headers'
import { tokenFromStorage as token } from '../../utils/tokens'


export default username => {
  headers.set('Authorization', `Bearer ${token()}`)
  return fetch(`${apiLink}/unblockUser/${username}`, {
    headers: headers,
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      return res.userUnblocked
    })
    .catch(_ => {
      return false
    })
}