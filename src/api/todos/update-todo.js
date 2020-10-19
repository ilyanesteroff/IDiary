import serverUrl from '../../utils/serverUrl'
import headers from '../../utils/headers'
import query from '../../graphql/update-todo'


export default (todoData, todoId, token) => {
  headers.set('Authorization', `Bearer ${token}`)
  return fetch(serverUrl, {
    headers: headers,
    method: 'POST',
    body: JSON.stringify(query(todoData, todoId)),
  }) 
    .then(res => res.json())
}