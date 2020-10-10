import query from '../../graphql/check-email-and-username'
import serverUrl from '../../utils/serverUrl'
import headers from '../../utils/headers'

export default (val, isEmail) => 
  fetch(serverUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(query(isEmail, val))
    }
  )
    .then(res => res.json())
    .then(res => res.data.checkEmailAndUsername)
    .catch(err => {
      return false
    })

  