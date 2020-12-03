import { apiLink } from '../utils/serverUrl'
import headers from '../utils/headers'
import { tokenFromStorage as token } from '../utils/tokens'


export default _ => {
  headers.set('Authorization', `Bearer ${ token() }`)
  return fetch(apiLink + '/getPresignedURL', {
    headers: headers,
    method: 'PATCH' 
  })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      if(res.error) throw new Error('broke')
      return res
    })
    .catch(_ => {
      return false
    })
}