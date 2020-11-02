import { graphqlLink } from '../../../utils/serverUrl'
import headers from '../../../utils/headers'
import queryFollowers from '../../../graphql/fetch-followers'
import queryFollowing from '../../../graphql/fetch-following'
import { tokenFromStorage as token } from '../../../utils/tokens'


export default (page, userId, followers) => {
  headers.set('Authorization', `Bearer ${token()}`)
  return fetch(graphqlLink, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(
      followers
        ? queryFollowers(page, userId)
        : queryFollowing(page, userId)
    )
  })
    .then(res => res.json())
    .then(res => {
      if(res.errors) throw new Error(res.errors.message)
      return followers
        ? res.data.followers
        : res.data.following
    })
    .catch(err => {
      return err.message
    })
}