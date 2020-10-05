import serverUrl from '../../../utils/serverUrl'
import headers from '../../../utils/headers'

export default email => {
  const query = {
    query: `mutation RequestPasswordReset($email: String!) {
        requestPasswordReset(email: $email)
    }`,
    variables: {
      email: email
    }
  }
  
  return fetch(serverUrl, {
    body: JSON.stringify(query),
    headers: headers,
    method: 'POST'
  })
    .then(res => res.json())
    .then(_ => true)
    .catch(_ => {
      return false
    })
}