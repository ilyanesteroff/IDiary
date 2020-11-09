import { graphqlLink } from '../../../utils/serverUrl'
import headers from '../../../utils/headers'
import { tokenFromStorage as token } from '../../../utils/tokens'


export default query => {
  headers.set('Authorization', `Bearer ${token()}`)
  return fetch(graphqlLink, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(query)
  })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      return res.data
    })
    .catch(err => {
      console.log(err.message)
      return []
    })
}
