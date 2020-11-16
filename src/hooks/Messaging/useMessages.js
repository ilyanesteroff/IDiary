import { useEffect, useState, useCallback } from 'react'
import query from '../../graphql/fetch-messages'
import _fetch from '../../api/fetch'
import countMessages from '../../api/messaging/count-messages'


export default (page, conv, setError) => {
  const [ messages, setMessages ] = useState([]) 
  const [ totalMessages, setTotalMessages ] = useState(null)
  const [ messageToEdit, setMessageToEdit ] = useState(null)
  const [ messageToDelete, setMessageToDelete ] = useState(null)
  const [ messageToAdd, setMessageToAdd ] = useState(null)
  const [ loading, setLoading ] = useState(false)
  const [ hasNextPage, setHasNextPage ] = useState(false)

  const fetchMessages = useCallback(_ => {   
    if(conv.new){
      setTotalMessages(1)
      return setMessages([ ...messages, conv.latestMessage ])
    }
    setLoading(true)
    return page === 1 
      ? countMessages(conv._id)
          .then(res1 => {
            setTotalMessages(res1)
            return _fetch(query(page, conv._id))
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
      : _fetch(query(page, conv._id))
          .then(res => {
            if(totalMessages > res.data.messages.length + messages.length) setHasNextPage(true)
            return setMessages(res.data.messages)
          })
          .catch(err => {
            console.log(err.message)
            return setError(err.message)
          })
          .finally(_ => setLoading(false))
  }, [ page, totalMessages, messages, setError, conv._id, conv.latestMessage, conv.new ])

  useEffect(_ => {
    if(!conv.new) {
      setImmediate(_ => setMessages([]))
      setImmediate(_ => setTotalMessages(null))
      fetchMessages()
    }
  // eslint-disable-next-line
  }, [ conv._id ])

  useEffect(_ => {
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
      if(messageToEdit._id){
        const updatedMessages = messages.map(m => 
          m._id === messageToEdit._id
            ? messageToEdit
            : m
        )
        setMessages(updatedMessages)
      } else if (messageToEdit.oldMessage) {
        const mIndex = messages.findIndex(m => {
          return (m.loading && m.writtenAt === messageToEdit.oldMessage.writtenAt && m.text === messageToEdit.oldMessage.text)
        })
        let updatedMessages = messages
        updatedMessages[ mIndex ] = messageToEdit.verifiedMessage
        setMessages(updatedMessages)
      }
      setMessageToEdit(null)
    }
  }, [ messageToEdit, messages ])

  return [ messages, loading, hasNextPage, setHasNextPage, setMessageToAdd, setMessageToDelete, setMessageToEdit ]
}