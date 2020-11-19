import { useEffect, useState, useCallback, useRef } from 'react'
import _fetch from '../../api/fetch'
import query from '../../graphql/find-users'


export default (page, setError, username) => {
  const [ nextPage, setNextPage ] = useState(false)
  const [ users, setUsers ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ fetched, setFetched ] = useState(null)
  const _username = useRef(null)

  const loadUsers = useCallback(_page => 
    _fetch(query(_page, username))
      .then(res => {
        if(!fetched) setFetched(true)
        if(res.findUsers){
          if(res.findUsers > 0) setNextPage(true)
          _username.current === username 
            ? setUsers([...users, ...res.findUsers])
            : setUsers([...res.findUsers])            
          return _username.current = username
        } else return 
      })
      .catch(err => setError(err.message))
      .finally(_ => setLoading(false))
  , [ username, setError, users, fetched ])

  useEffect(_ => {
    if(page > 1){
      setLoading(true)
      loadUsers(page)
    }
    // eslint-disable-next-line
  }, [ page ])

  useEffect(_ => {
    if(page === 1){
      setUsers([])
      setNextPage(false)
      setLoading(true)
      loadUsers(1)
    }
    // eslint-disable-next-line
  }, [ username ])

  return [ nextPage, setNextPage, users, loading, fetched ]
}