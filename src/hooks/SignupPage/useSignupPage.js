import { useState, useEffect, useCallback } from 'react'
import ifEnoughSpace from '../../api/checks/if-enough-space'


export default setError => {
  const [ loading, setLoading ] = useState(false)
  const [ enoughSpace, setEnoughSpace ] = useState(null)

  const findOut = useCallback(_ => {
    return ifEnoughSpace(3, setError)
      .then(res => {
        if(res !== null) setEnoughSpace(res)
        else return
      })
      .finally(_ => setLoading(false))
  }, [ setError ])

  useEffect(_ => {
    setLoading(true)
    findOut()
    // eslint-disable-next-line 
  }, [ ])

  return [ loading, enoughSpace ]
}