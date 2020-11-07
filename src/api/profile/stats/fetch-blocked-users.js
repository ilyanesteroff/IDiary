import { graphqlLink } from '../../../utils/serverUrl'
import headers from '../../../utils/headers'
import query from '../../../graphql/fetch-blocked-users'
import { tokenFromStorage as token } from '../../../utils/tokens'


export default page => {
  headers.set('Authorization', `Bearer ${token()}`)
  return fetch(graphqlLink, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(query(page))
  })
    .then(res => res.json())
    .then(res => {
      if(res.errors) throw new Error(res.errors[0].message)
      return res.data.blockedUsers
    })
    .catch(err => {
      return err.message
    })
}