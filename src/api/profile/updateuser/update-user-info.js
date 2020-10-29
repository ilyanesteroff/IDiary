import { graphqlLink } from '../../../utils/serverUrl'
import query from '../../../graphql/update-user-info'
import headers from '../../../utils/headers'


export default (token, data) => {
  headers.set('Authorization', `Bearer ${token}`)
  return fetch(graphqlLink, {
    headers: headers,
    body: JSON.stringify(query(data)),
    method: 'POST'
  })
  .then(res => res.json())
  .then(res => res.data.updateUserInfo)
  .catch(_ => {
    return false
  })
}