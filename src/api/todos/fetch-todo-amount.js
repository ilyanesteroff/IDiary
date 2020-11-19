import { apiLink } from '../../utils/serverUrl'
import headers from '../../utils/headers'
import { tokenFromStorage as token } from '../../utils/tokens'


export default (tag, signal) => {
  headers.set('Authorization', `Bearer ${token()}`)
  return fetch(apiLink + `/countTodosByTag/${tag}`, {
    headers: headers,
    method: 'GET',
    signal: signal
  })
    .then(res => res.json())
    .then(res => res.todoCount)
    .catch(err => {
      console.log(err.message)
      return null
    })
}