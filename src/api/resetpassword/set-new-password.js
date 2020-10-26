import { apiLink } from '../../utils/serverUrl'
import headers from '../../utils/headers'

export default (token, newPw, signal) =>
  fetch(apiLink + '/setNewPassword', {
    body: JSON.stringify({
      token: token,
      newPassword: newPw
    }),
    headers: headers,
    method: 'PATCH',
    signal: signal
  })
    .then(res => res.json())
    .then(res => res.reset || false)
    .catch(_ => {
      return false
    })
