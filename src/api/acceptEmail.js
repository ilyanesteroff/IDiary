import { apiLink } from '../utils/serverUrl'
import headers from '../utils/headers'


export default (token, signal) => 
  fetch(apiLink + '/acceptEmail', {
    headers: headers,
    method: 'PATCH',
    body: JSON.stringify({ token: token }),
    signal: signal
  }) 
    .then(res => res.json())
    .then(res => {
      console.log(res)
      return res
    })
