import serverUrl from '../../utils/serverUrl'
import headers from '../../utils/headers'
import query from '../../graphql/delete-todo'


export default (todoId, token) => {
  headers.set('Authorization', `Bearer ${token}`)
  return fetch(serverUrl, {
    headers: headers,
    method: 'POST',
    body: JSON.stringify(query(todoId)),
  }) 
    .then(res => res.json())
}