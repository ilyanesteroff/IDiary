import { apiLink } from '../../utils/serverUrl'
import headers from '../../utils/headers'


export default (token, setChecked, setActual) => 
  fetch(apiLink + '/getResetPassword', {
    method: 'PATCH',
    headers: headers,
    body: JSON.stringify({ token: token })
  })
    .then(res => res.json())
    .then(res => {
      setChecked(true)
      setActual(res.resetPasswordIsActual || false)
    })
    .catch(err => {
      setChecked(true)
      setActual(false)
    })