import { graphqlLink } from '../../utils/serverUrl'
import headers from '../../utils/headers'
import query from '../../graphql/find-todos-for-user'
import { tokenFromStorage as token } from '../../utils/tokens'


export default (page, userId) => {
  headers.set('authorization', `Bearer ${token()}`)
  return fetch(graphqlLink, {
    headers: headers,
    method: 'POST',
    body: JSON.stringify(query(page, userId)),
  }) 
    .then(res => res.json())
}