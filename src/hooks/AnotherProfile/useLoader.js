import { useState, useEffect } from 'react'
import fetchUserInfo from '../../api/fetchUserInfo'


export default (userId, setError) => {
  const [ loading, setLoading ] = useState(false)
  const [ info, setInfo ] = useState({})

  const fetchInfo = _ => {
    setLoading(true)
    return fetchUserInfo(userId)
      .then(res => {
        setLoading(false)
        setInfo(res)
      })
      .catch(err => {
        setLoading(false)
        setError(err.message)
      })
  }

  useEffect(_ => {
    fetchInfo()
    // eslint-disable-next-line
  }, [])

  return [ loading, info ]
}