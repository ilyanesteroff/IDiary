import serverUrl from '../../utils/serverUrl'
import headers from '../../utils/headers'
import query from '../../graphql/if-password-reset-is-actual'

export default (token, setChecked, setActual) => 
  fetch(serverUrl, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(query(token))
  })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setChecked(true)
      setActual(res.data.getResetPassword)
    })
    .catch(err => {
      console.log(err.message)
      setChecked(true)
      setActual(false)
    })