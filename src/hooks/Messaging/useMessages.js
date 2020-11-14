import { useEffect, useState, useCallback } from 'react'
import query from '../../graphql/fetch-messages'
import _fetch from '../../api/messaging/fetch'
import countMessages from '../../api/messaging/count-messages'


export default (page, convID, setError) => {
  const [ messages, setMessages ] = useState([]) 
  const [ totalMessages, setTotalMessages ] = useState(null)
  const [ messageToEdit, setMessageToEdit ] = useState(null)
  const [ messageToDelete, setMessageToDelete ] = useState(null)
  const [ messageToAdd, setMessageToAdd ] = useState(null)
  const [ loading, setLoading ] = useState(false)
  const [ hasNextPage, setHasNextPage ] = useState(false)

  const fetchMessages = useCallback(_ => 
    !totalMessages && page === 1 
      ? countMessages(convID)
          .then(res1 => {
            setTotalMessages(res1)
            return _fetch(query(page, convID))
              .then(res => {
                if(res1 > res.messages.length) setHasNextPage(true)
                return setMessages(res.messages)
              })
          })
          .catch(err => {
            console.log(err.message)
            return setError(err.message)
          })
          .finally(_ => setLoading(false))
      : _fetch(query(page, convID))
          .then(res => {
            if(totalMessages > res.data.messages.length + messages.length) setHasNextPage(true)
            return setMessages(res.data.messages)
          })
          .catch(err => {
            console.log(err.message)
            return setError(err.message)
          })
          .finally(_ => setLoading(false))
  , [ page, totalMessages, messages, setError, convID ])

  useEffect(_ => {
    setLoading(true)
    fetchMessages()
    // eslint-disable-next-line
  }, [ page ])

  useEffect(_ => {
    if(messageToAdd !== null){
      setMessages([ ...messages, messageToAdd ])
      setTotalMessages(totalMessages + 1)
      setMessageToAdd(null)
    }
  }, [ messageToAdd, messages, totalMessages ])

  useEffect(_ => {
    if(messageToDelete !== null){
      setMessages(messages.filter(m => m._id !== messageToDelete))
      setTotalMessages(totalMessages - 1)
      setMessageToDelete(null)
    }
  }, [ messageToDelete, messages, totalMessages ])
  
  useEffect(_ => {
    if(messageToEdit !== null){
      const updatedMessages = messages.map(m => 
        m._id === messageToEdit._id
          ? messageToEdit
          : m
      )
      setMessages(updatedMessages)
      setMessageToEdit(null)
    }
  }, [ messageToEdit, messages ])

  return [ messages, loading, hasNextPage, setHasNextPage, setMessageToAdd, setMessageToDelete, setMessageToEdit ]
}
