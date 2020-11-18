import React, { useState, useEffect, memo } from 'react'
import Spinner from '../../spiners/BigSpinner'
import WriteMessage from '../message/WriteMessage'
import Message from '../message/index'
import * as Ctx from '../../../utils/contexts'


export default memo(({ loading, messages, markMessages, definePosition }) => {
  const [ msgToEditLocally, setMsgToEditLocally ] = useState(null)

  useEffect(_ => {
    const messageList = document.getElementById('reversed-ScrollableList')
    messageList.scrollTop = messageList.scrollHeight
    messageList.addEventListener('scroll', definePosition)
    return _ => messageList.removeEventListener('scroll', definePosition)
  })

  useEffect(_ => {
    markMessages()
  }, [ markMessages ])
  
  console.log('renders')

  return(    
    <Ctx.SetMessageToEditLocallyContext.Provider value={{ set: val => setMsgToEditLocally(val), value: msgToEditLocally }}>
      <>
        <div id="reversed-ScrollableList">
          { loading && <Spinner/> }
          {messages.length > 0 &&
            messages.map((m, i) => <Message key={m._id || 'm' + i} info={m}/>)
          }
        </div>
        <WriteMessage/>
      </>
    </Ctx.SetMessageToEditLocallyContext.Provider>
  )
}, (prev, next) => 
  prev.loading === next.loading && prev.messages.length === next.messages.length
)