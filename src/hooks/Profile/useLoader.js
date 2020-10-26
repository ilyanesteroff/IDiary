import { useState, useEffect } from 'react'
import fetchBasicInfo from '../../api/profile/fetch-basic-info'


export default (token, setError) => {
  const [ loading, setLoading ] = useState(false)
  const [ info, setInfo ] = useState({})

  const fetchInfo = _ => {
    setLoading(true)
    return fetchBasicInfo(token)
      .then(res => {
        setLoading(false)
        setInfo(res.data.getAuthUser)
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