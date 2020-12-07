import { apiLink } from '../../../utils/serverUrl'
import headers from '../../../utils/headers'


export default (password) =>
  fetch(apiLink + '/verifyPassword', {
    body: JSON.stringify({
      password: password
    }),
    headers: headers,
    method: 'PATCH'
  })
    .then(res => res.json())
    .then(res => res.passwordMatches || false)
    .catch(err => {
      console.log(err.message)
      return false
    })
