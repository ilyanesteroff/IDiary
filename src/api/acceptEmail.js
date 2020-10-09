import query from '../graphql/accept-email'
import serverUrl from '../utils/serverUrl'
import headers from '../utils/headers'

export default (token, signal) => 
  fetch(serverUrl, {
    headers: headers,
    method: 'POST',
    body: JSON.stringify(query(token)),
    signal: signal
  }) 
