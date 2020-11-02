import { useState, useEffect } from 'react'
//import fetchRequests from '../../api/profile/stats/fetch-requests'
//import fetchFollowers from '../../api/profile/stats/fetch-followers-following'


export default (category, userData, userId) => {
  const [ page, setPage ] = useState(1)
  const [ hasNextPage, setHasNextPage ] = useState(false)
  const [ _userData, setUserData ] = useState(userData)
  const [ loading, setLoading ] = useState(false)
  const [ info, setInfo ] = useState([])

  useEffect(_ => {
    setUserData(userData)
  }, [ userData ])

  useEffect(_ => {
    setPage(1)
    if(_userData[ category ] > 100) setHasNextPage(true)
    // eslint-disable-next-line
  }, [ category ])

  useEffect(_ => {
    setLoading(true)
    //decide what to fetch and 
  }, [ page ])

  return [ page, setPage, hasNextPage, setHasNextPage, loading, info ]
}