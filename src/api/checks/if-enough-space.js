import { apiLink } from '../../utils/serverUrl'
import headers from '../../utils/headers'


export default (documents, setError) => 
  fetch(apiLink + '/enoughSpace', {
    method: 'PATCH',
    headers: headers,
    body: JSON.stringify({
      documentsAmount: documents
    })
  })
    .then(res => res.json())
    .then(res => {
      if(res.enough) return res.enough
      else throw new Error('Something break')
    })
    .catch(err => {
      setError(err.message)
      return null
    })