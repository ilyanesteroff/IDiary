import { useState, useEffect, useCallback } from 'react'
import _fetch from '../../api/messaging/fetch'
import queryConvs from '../../graphql/fetch-conversations'
import queryConvLength from '../../graphql/fetch-conversation-length'


export default (page, setError) => {
  const [ loading, setLoading ] = useState(false)
  const [ convs, setConvs ] = useState([])
  const [ hasNextPage, setHasNextPage ] = useState(false)
  const [ convLength, setConvLength ] = useState(null)
  const [ convToDelete, setConvToDelete ] = useState(null)
  const [ convToEdit, setConvToEdit ] = useState(null)
  const [ convToAdd, setConvToAdd ] = useState(null)

  const loadConversations = useCallback(_ => 
    !convLength && page === 1
      ? _fetch(queryConvLength())
          .then(res1 => {
            if(res1.getAuthUser.conversations === 0) return setConvLength(0)
            else {
              setConvLength(res1.getAuthUser.conversations)
              return _fetch(queryConvs(page))
                .then(res => {
                  res.conversations.length < res1.getAuthUser.conversations && setHasNextPage(true)
                  return setConvs(res.conversations)
                })
            }
          })
          .catch(err => setError(err.message))
          .finally(_ => setLoading(false))
      : _fetch(queryConvs(page))
          .then(res => {
            convs.length + res.conversations.length > convLength && setHasNextPage(true)
            return setConvs([ ...convs, ...res.conversations ])
          })
          .catch(err => setError(err.message))
          .finally(_ => setLoading(false)),
  [ page, convLength, convs, setError ])

  useEffect(_ => {      
    setLoading(true)
    loadConversations()
    // eslint-disable-next-line
  }, [ page ])

  useEffect(_ => {
    if(convToDelete !== null){
      setConvLength(convLength - 1)
      setConvs([ ...convs.filter(c => c._id !== convToDelete) ])
      setConvToDelete(null)
    }
  }, [ convToDelete, convLength, convs ])

  useEffect(_ => {
    if(convToEdit !== null){
      const index = convs.findIndex(c => c._id === convToEdit._id)
      setConvs([
        ...convs,
        convs[index] = convToEdit 
      ])
      setConvToEdit(null)
    }
  }, [ convToEdit, convs ])

  useEffect(_ => {
    if(convToAdd !== null){
      setConvs([ convToAdd, ...convs ])
      setConvLength(convLength + 1)
      setConvToAdd(null)
    }
  }, [ convToAdd, convLength, convs ])

  return [ loading, convs, hasNextPage, convLength, setConvToDelete, setConvToEdit, setConvToAdd ]
}