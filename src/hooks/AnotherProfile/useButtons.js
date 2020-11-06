import { useState, useEffect } from 'react'
import isAllowed from '../../api/profile/another-user/if-user-allowed'
import isFollowing from '../../api/profile/another-user/if-user-follows'
import isRequested from '../../api/profile/another-user/if-request-sent'


export default userId => {
  const [ loading, setLoading ] = useState(false)
  const [ allowed, setAllowed ] = useState(null)
  const [ following, setFollowing ] = useState(null)
  const [ requested, setRequested ] = useState(null)

  const findOut = _ => {
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
              console.log(res.request)
              res.request
                ? setRequested(res.request)
                : setRequested(false)
              setLoading(false)
            })
      })
      .catch(_ => setLoading(false))
  }

  useEffect(_ => {
    findOut()
    // eslint-disable-next-line
  }, [ ])

  return [ loading, allowed, following, requested, setFollowing, setRequested ]
}