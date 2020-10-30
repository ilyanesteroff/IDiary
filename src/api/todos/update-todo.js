import { graphqlLink } from '../../utils/serverUrl'
import headers from '../../utils/headers'
import query from '../../graphql/update-todo'
import { tokenFromStorage as token } from '../../utils/tokens'


export default (todoData, todoId) => {
  headers.set('Authorization', `Bearer ${token()}`)
  return fetch(graphqlLink, {
    headers: headers,
    method: 'POST',
    body: JSON.stringify(query(todoData, todoId)),
  }) 
    .then(res => res.json())
}