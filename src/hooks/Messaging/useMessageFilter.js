import { useState, useEffect } from 'react'
import useFilter from '../useFilter'
import useRefManager from './useRefManager'
import userIdComparer from '../../utils/userIdComparer'


export default messages => {
  const [ showOnlyReceiverMsg, setShowOnlyReceiverMsg ] = useState(false)
  const [ showOnlyYourMsg, setShowOnlyYourMsg ] = useState(false)
  const [ showOnlyLikedMsg, setShowOnlyLikedMsg ] = useState(false)
  const [ text, setText ] = useState('')
  const [ writtenAt, setWrittenAt ] = useState('')
  const [ unsetFilter, setUnsetFilter ] = useState(false)
  const [ _messages, set_messages ] = useState(messages)

  useEffect(_ => {
    set_messages(messages)
  }, [ messages ])

  const [ messagesToExpose ] = useFilter(_messages, [
    showOnlyReceiverMsg, showOnlyYourMsg, showOnlyLikedMsg, text, writtenAt
  ], elems => {
    let filtered = elems
    if(showOnlyReceiverMsg)
      filtered = filtered.filter(m => userIdComparer(m.to))
    if(showOnlyYourMsg)
      filtered = filtered.filter(m => !userIdComparer(m.to))
    if(showOnlyLikedMsg)
      filtered = filtered.filter(m => m.liked)
    if(text.trim().length > 0)
      filtered = filtered.filter(m => m.text.includes(text))
    if(writtenAt !== ''){
      const date = writtenAt.split('-')
      filtered = filtered.filter(m => 
        new Date(m.writtenAt).getFullYear() === parseInt(date[0]) &&
        new Date(m.writtenAt).getMonth() + 1 === parseInt(date[1]) &&
        new Date(m.writtenAt).getDate() === parseInt(date[2])
      )
    }
    
    return filtered
  })

  const [ refs ] = useRefManager(unsetFilter, _ => {
    setShowOnlyLikedMsg(false)
    setShowOnlyReceiverMsg(false)
    setShowOnlyYourMsg(false)
    setText('')
    setWrittenAt('')
    setUnsetFilter(false)
  })

  useEffect(_ => {
    if(refs.receiversMsgs.current && refs.yourMsgs.current){
      showOnlyReceiverMsg
        ? refs.yourMsgs.current.disabled = true
        : refs.yourMsgs.current.disabled = false
      showOnlyYourMsg
        ? refs.receiversMsgs.current.disabled = true
        : refs.receiversMsgs.current.disabled = false
    }
  }, [ showOnlyReceiverMsg, showOnlyYourMsg, refs.yourMsgs, refs.receiversMsgs ])

  const changeHandlers = {
    showOnlyReceiversMsgs: e => setShowOnlyReceiverMsg(e.target.checked),
    showOnlyYourMsgs: e => setShowOnlyYourMsg(e.target.checked),
    showLikedMsgs: e => setShowOnlyLikedMsg(e.target.checked),
    msgTextOnChange: e => setText(e.target.value),
    writtenAtOnChange: e => setWrittenAt(e.target.value),
    onUnsetFilter: e => {
      e.preventDefault()
      setUnsetFilter(true)
    }
  }

  return [ messagesToExpose, refs, changeHandlers ]
}