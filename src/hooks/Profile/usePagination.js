import { useState, useEffect, useLayoutEffect, useCallback } from 'react'
import fetchRequests from '../../api/profile/stats/fetch-requests'
import fetchFollowers from '../../api/profile/stats/fetch-followers-following'


export default (category, userData, userId, page, setPage) => {
  const [ hasNextPage, setHasNextPage ] = useState(false)
  const [ info, setInfo ] = useState([])
  const [ loading, setLoading ] = useState(false)

  useLayoutEffect(_ => {
    setPage(1)
    setInfo([])
    if(userData[ category ] > 100) setHasNextPage(true)
    // eslint-disable-next-line
  }, [ category ])

  const fetchInfo = useCallback(func => {
    setLoading(true)
    func()
      .then(res => {
        setInfo([...info, ...res])
        setLoading(false)
        if(info.length + res.length < userData[ category ])
          setHasNextPage(true)
      })
  }, [ info, userData, category ])

  useEffect(_ => {
    if(userData[category] > 0){
      if(category === 'Sent Requests') fetchInfo(_ => fetchRequests(page, false))
      if(category === 'Incoming Requests') fetchInfo(_ => fetchRequests(page, true))
      if(category === 'Followers') fetchInfo(_ => fetchFollowers(page, userId, true))
      if(category === 'Following') fetchInfo(_ => fetchFollowers(page, userId, false))
    }
    // eslint-disable-next-line
  }, [ page, category ])

  return [ hasNextPage, setHasNextPage, info, loading ]
}