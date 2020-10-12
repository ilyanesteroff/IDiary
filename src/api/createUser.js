import serverUrl from '../utils/serverUrl'
import headers from '../utils/headers'
import query from '../graphql/create-user'

export default (data, signal) => 
  fetch(serverUrl, {
    headers: headers, 
    method: 'POST',
    body: JSON.stringify(query(data)),
    signal: signal
  })
    .then(res => res.json())
    .then(res => res.data.createUser || false)
    .catch(err => {
      return false
    })