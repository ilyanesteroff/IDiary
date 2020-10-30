import { graphqlLink } from '../../utils/serverUrl'
import headers from '../../utils/headers'
import query from '../../graphql/create-new-todo'
import { tokenFromStorage as token } from '../../utils/tokens'


export default (todoData) => {
  headers.set('Authorization', `Bearer ${token()}`)
  return fetch(graphqlLink, {
    headers: headers,
    method: 'POST',
    body: JSON.stringify(query(todoData)),
  }) 
    .then(res => res.json())
}