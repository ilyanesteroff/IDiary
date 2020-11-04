import { useState, useEffect, useCallback } from 'react'
import fetchRequests from '../../api/profile/stats/fetch-requests'
import fetchFollowers from '../../api/profile/stats/fetch-followers-following'


export default (category, userData, userId, page, setPage) => {
  const [ hasNextPage, setHasNextPage ] = useState(false)
  const [ info, setInfo ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ itemToDelete, setItemToDelete ] = useState(null)

  useEffect(_ => {
    setPage(1)
    setInfo([])
    setLoading(false)
    if(userData[ category ] > 100) setHasNextPage(true)
    // eslint-disable-next-line
  }, [ category ])

  const fetchInfo = useCallback(func => {
    setLoading(true)
    func()
      .then(res => {
        page !== 1
          ? setInfo([...info, ...res])
          : setInfo([...res])
        setLoading(false)
        if(info.length + res.length < userData[ category ])
          setHasNextPage(true)
      })
  }, [ info, userData, category, page ])

  useEffect(_ => {
    if(userData[category] > 0){
      if(category === 'Sent Requests') fetchInfo(_ => fetchRequests(page, false))
      if(category === 'Incoming Requests') fetchInfo(_ => fetchRequests(page, true))
      if(category === 'Followers') fetchInfo(_ => fetchFollowers(page, userId, true))
      if(category === 'Following') fetchInfo(_ => fetchFollowers(page, userId, false))
    }
    // eslint-disable-next-line
  }, [ page, category ])

  useEffect(_ => {
    if(itemToDelete !== null){
      setInfo(info.filter(i => i._id !== itemToDelete))
      setItemToDelete(null)
      console.log(itemToDelete)
    }
  }, [ itemToDelete, info ])

  return [ hasNextPage, setHasNextPage, info, loading, id => setItemToDelete(id) ]
}