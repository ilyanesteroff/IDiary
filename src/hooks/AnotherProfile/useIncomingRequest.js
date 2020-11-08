import { useState, useEffect, useCallback } from 'react'
import requested from '../../api/profile/another-user/if-request-received'


export default userId => {
  const [ request, setRequest ] = useState(null)
  
  const findOut = useCallback(_ => 
    requested(userId)
      .then(res => {
        if(res) setRequest(res)
      })
      .catch(err => console.log(err.message))
  , [ userId ])

  useEffect(_ => {
    findOut()
  }, [ findOut ])

  return [ request, _ => setRequest(null) ]
}