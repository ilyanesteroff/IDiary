import React, { useEffect, useContext, useRef, useState } from 'react'
import { Redirect } from 'react-router-dom'
import Conversations from './Conversations'
import CurrentConversation from './Conversation' 
import WriteMessage from '../message/WriteMessage'
import UpperSection from './UpperSection'
import { CurrentlyOpenedConvContext, ReceiverContext } from '../../../utils/contexts'
import _fetch from '../../../api/fetch'
import query from '../../../graphql/fetch-conversation'


export default _ => {  
  const [ warning, setWarning ] = useState()
  const [ receiver, setReceiver ] = useState('')
  const [ width, setWidth ] = useState(window.innerWidth)

  const CurrentConv = _ => useContext(CurrentlyOpenedConvContext)
  const setConv = useRef(CurrentConv().set)

  const resize = _ => setWidth(window.innerWidth)

  useEffect(_ => {
    window.addEventListener('resize', resize)
    return _ => window.removeEventListener('resize', resize)
  })

  useEffect(_ => {
    const potentialUsername = window.location.pathname.split('/')[3]
    if(potentialUsername){
      _fetch(query(potentialUsername))
        .then(res => {
          if(!res.conversation.ifUserAllowed)
            return setWarning(true)
          if(!res.conversation.exists)
            return setReceiver(potentialUsername)

          return setConv.current(res.conversation.conversation)
        })
        .catch(err => console.log(err))
    }
  })

  return(
    <CurrentlyOpenedConvContext.Consumer>
      {({ value }) => 
        <>
          <Conversations/>    
          {value && 
            <CurrentConversation conv={value}/>  
          }
          {warning  &&
            <Redirect to="/messages"/>
          }
          {receiver && 
            <div id="Conversation">
              <ReceiverContext.Provider value={receiver}>
                <UpperSection/>
                <WriteMessage/>
              </ReceiverContext.Provider>  
            </div>
          }
        </>
      }
    </CurrentlyOpenedConvContext.Consumer>
  )
}
