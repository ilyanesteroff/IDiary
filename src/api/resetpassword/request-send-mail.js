import headers from '../../utils/headers'
import { apiLink } from '../../utils/serverUrl'


export default (email, signal, setError) => 
  fetch(apiLink + '/requestPasswordReset', {
    body: JSON.stringify({ field: email }),
    headers: headers,
    method: 'PATCH',
    signal: signal
  })
    .then(res => res.json())
    .then(res =>  {
      if(res.requested === null) return false
      if(res.requested === false) return setError('Accept your email first')
      else return res.requested
    })
    .catch(err => {
      console.log(err.message)
      return false
    })
