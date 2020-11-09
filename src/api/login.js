import headers from '../utils/headers'
import { apiLink } from '../utils/serverUrl'


export default (signal, email, password) => 
  fetch(apiLink + '/login', {
    signal: signal,
    method: 'PATCH',
    headers: headers,
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
    .then(res => res.json())