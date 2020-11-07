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
    .then(res => res.json())
    .then(res => {
      if(res.errors){
        if(
          res.errors[0].message === 'User not found' ||
          res.errors[0].message.includes('Argument passed in') ||
          res.errors[0].message === 'Unable to view'
        ) throw new Error('User not found') 
      }
      return res.data.user
    })
}