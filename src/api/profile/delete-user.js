import { graphqlLink } from '../../utils/serverUrl' 
import headers from '../../utils/headers'
import { tokenFromStorage as token } from '../../utils/tokens'


export default (setError) => {
  headers.set('Authorization', `Bearer ${token()}`)
  return fetch(graphqlLink, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      query: `
        mutation{
          deleteUser
        }`
    })
  })
    .then(res => {
      if(res.status === 500){
        throw new Error('Technical error occured')
      }
      return res.formData.deleteUser
    })
    .catch(err => {
      return setError(err.message)
    })

}