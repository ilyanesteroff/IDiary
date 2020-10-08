import serverUrl from '../../utils/serverUrl'
import headers from '../../utils/headers'
import query from '../../graphql/set-new-password'

export default (token, newPw, signal) =>
  fetch(serverUrl, {
    body: JSON.stringify(query(token, newPw)),
    headers: headers,
    method: 'POST',
    signal: signal
  })
    .then(res => res.json())
    .then(res => res.data.setNewPassword)
    .catch(_ => {
      return false
    })
