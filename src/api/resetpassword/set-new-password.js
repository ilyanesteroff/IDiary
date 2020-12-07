import { apiLink } from '../../utils/serverUrl'
import headers from '../../utils/headers'


export default body =>
  fetch(apiLink + '/setNewPassword', {
    body: JSON.stringify(body),
    headers: headers,
    method: 'PATCH'
  })
    .then(res => res.json())
    .then(res => res.reset || false)
    .catch(err => {
      console.log(err.message)
      return false
    })
