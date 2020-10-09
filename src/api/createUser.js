import serverUrl from '../utils/serverUrl'
import headers from '../utils/headers'
import query from '../graphql/create-user'

export default data => 
  fetch(serverUrl, {
    headers: headers, 
    method: 'POST',
    body: JSON.stringify(query(data))
  })
    .then(res => res.json())
    .then(res => {
      return res
    })
    .catch(err => {
      return false
    })