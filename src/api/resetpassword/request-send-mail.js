import query from '../../graphql/request-password-reset'
import headers from '../../utils/headers'
import serverUrl from '../../utils/serverUrl'

export default (email) => 
  fetch(serverUrl, {
    body: JSON.stringify(query(email)),
    headers: headers,
    method: 'POST'
  })
    .then(res => res.json())
    .then(_ => true)
    .catch(err => {
      return false
    })
