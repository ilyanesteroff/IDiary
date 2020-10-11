import serverUrl from '../../utils/serverUrl'
import headers from '../../utils/headers'
import query from '../../graphql/fetch-users-todos-stats'


export default token => {
  headers.set('Authorization', `Bearer ${token}`)
  return fetch(serverUrl, {
    headers: headers,
    method: 'POST',
    body: JSON.stringify(query()),
  }) 
    .then(res => res.json())
}