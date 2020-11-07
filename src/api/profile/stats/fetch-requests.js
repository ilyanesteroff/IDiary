import { graphqlLink } from '../../../utils/serverUrl'
import headers from '../../../utils/headers'
import incomingReqs from '../../../graphql/fetch-incoming-requests'
import sentReqs from '../../../graphql/fetch-sent-requests'
import { tokenFromStorage as token } from '../../../utils/tokens'


export default (page, incoming) => {
  headers.set('Authorization', `Bearer ${token()}`)
  return fetch(graphqlLink, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(
      incoming
        ? incomingReqs(page)
        : sentReqs(page)
    )
  })
    .then(res => res.json())
    .then(res => {
      if(res.errors) throw new Error(res.errors[0].message)
      return res.data.requests
    })
    .catch(err => {
      return err.message
    })
}