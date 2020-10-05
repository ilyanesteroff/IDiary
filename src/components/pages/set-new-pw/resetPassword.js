import serverUrl from '../../../utils/serverUrl'
import headers from '../../../utils/headers'

export default (token, newPw, signal) => {
  const query = {
    query: `
      mutation setNewPw($token: String!, $newPassword: String!) {
        setNewPassword(token: $token, newPassword: $newPassword)
      }
    `,
    variables: {
      token: token,
      newPassword: newPw
    }
  }

  return fetch(serverUrl, {
    body: JSON.stringify(query),
    headers: headers,
    method: 'POST',
    signal: signal
  })
    .then(res => res.json())
    .then(res => res.data.setNewPassword)
    .catch(err => {
      console.log(err.message)
      return false
    })
}