import { useState, useEffect, useCallback } from 'react'
import isAllowed from '../../api/profile/another-user/if-user-allowed'
import isFollowing from '../../api/profile/another-user/if-user-follows'
import isRequested from '../../api/profile/another-user/if-request-sent'


export default userId => {
  const [ loading, setLoading ] = useState(false)
  const [ allowed, setAllowed ] = useState(null)
  const [ following, setFollowing ] = useState(null)
  const [ requested, setRequested ] = useState(null)

  const findOut = useCallback(_ => {
    setLoading(true)
    return isAllowed(userId)
      .then(res => {
        setAllowed(res)
        return isFollowing(userId)
      })
      .then(res => {
        setFollowing(res)
        if(res === false)
        return isRequested(userId)
            .then(res => {
              res
                ? setRequested(res)
                : setRequested(false)
              setLoading(false)
            })
        setLoading(false)
      })
      .catch(_ => setLoading(false))
  }, [ userId ])

  useEffect(_ => {
    findOut()
  }, [ findOut ])

  return [ loading, allowed, following, requested, setFollowing, setRequested, setAllowed ]
}