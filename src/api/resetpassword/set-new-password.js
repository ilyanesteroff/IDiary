import { apiLink } from '../../utils/serverUrl'
import headers from '../../utils/headers'


export default (body, signal) =>
  fetch(apiLink + '/setNewPassword', {
    body: JSON.stringify(body),
    headers: headers,
    method: 'PATCH',
    signal: signal
  })
    .then(res => res.json())
    .then(res => res.reset || false)
    .catch(_ => {
      return false
    })
