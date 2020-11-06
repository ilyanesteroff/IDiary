import { graphqlLink } from '../utils/serverUrl'
import headers from '../utils/headers'
import query from '../graphql/fetch-user-info'
import { tokenFromStorage as token } from '../utils/tokens'


export default (userId) => {
  headers.set('Authorization', `Bearer ${token()}`)
  return fetch(graphqlLink, {
    method: 'POST',
    body: JSON.stringify(query(userId)),
    headers: headers
  })
    .then(res => {
      if(res.status === 500) throw new Error('Technical error occured')
      return res.json()
    })
    .then(res => {
      if(res.data === null) throw new Error('Technical error occured')      
      return res.data.user
    })
}