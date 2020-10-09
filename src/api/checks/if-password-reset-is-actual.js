import serverUrl from '../../utils/serverUrl'
import headers from '../../utils/headers'
import query from '../../graphql/if-password-reset-is-actual'

export default (token, signal, setChecked, setActual) => 
  fetch(serverUrl, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(query(token)),
    signal: signal
  })
    .then(res => res.json())
    .then(res => {
      setChecked(true)
      setActual(res.data.getResetPassword)
    })
    .catch(_ => {
      setChecked(true)
      setActual(false)
    })