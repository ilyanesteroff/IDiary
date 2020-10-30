import { apiLink } from '../../utils/serverUrl'
import headers from '../../utils/headers'


export default (val) => 
  fetch(apiLink + '/checkUsernameAndEmail', {
      method: 'PATCH',
      headers: headers,
      body: JSON.stringify({
        field: val
      })
    }
  )
    .then(res => res.json())
    .then(res => res.userExists || false)
    .catch(err => {
      return false
    })
 