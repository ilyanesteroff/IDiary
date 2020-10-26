import { graphqlLink } from '../../utils/serverUrl'
import headers from '../../utils/headers'
import query from '../../graphql/get-full-user'


export default (token) => {
  headers.set('Authorization', `Bearer ${token}`)
  return fetch(graphqlLink, {
    headers: headers,
    method: 'POST',
    body: JSON.stringify(query),
  }) 
    .then(res => res.json())
}