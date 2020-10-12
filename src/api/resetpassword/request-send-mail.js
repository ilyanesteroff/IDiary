import query from '../../graphql/request-password-reset'
import headers from '../../utils/headers'
import serverUrl from '../../utils/serverUrl'

export default (email, signal, setError) => 
  fetch(serverUrl, {
    body: JSON.stringify(query(email)),
    headers: headers,
    method: 'POST',
    signal: signal
  })
    .then(res => res.json())
    .then(res =>  {
      if(res.data === null) return false
      if(res.data.requestPasswordReset === false) return setError('Accept your email first')
      else return res.dat.requestPasswordReset
    })
    .catch(err => {
      return false
    })
