import React, { useEffect, useState, useRef, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import * as Ctx from '../../utils/contexts'
import UpperSection from './UpperSection'
import MessagingSection from './MessagingSection'
import WriteMessage from './WriteMessage'
import _fetch from '../../api/messaging/fetch'
import query from '../../graphql/fetch-conversation'
import viewMessages from '../../actionHandlers/ViewMessages'
import userIdComparer from '../../utils/userIdComparer'


export default _ => {
  const CurrentConv = _ => useContext(Ctx.CurrentlyOpenedConvContext)
  const setConv = useRef(CurrentConv().set)

  const [ warning, setWarning ] = useState(false)
  const [ receiver, setReceiver ] = useState('')

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
  }, [ ])

  return(
    <Ctx.CurrentlyOpenedConvContext.Consumer>
      {({ value, set }) =>     
        <>
          <Ctx.QuitHandlerContext.Provider value={_ => {
            set(null)
          }}>
            {value &&
              <div id="Conversation">
                <Ctx.ReceiverContext.Provider value={value.participants[value.participants.findIndex(p => !userIdComparer(p._id))].username}>
                  <UpperSection/>
                  <Ctx.SetConvToEditContext.Consumer>
                    {edit =>
                      <MessagingSection convId={value._id} markMessages={async _ => await viewMessages(value, edit)}/>
                    }
                  </Ctx.SetConvToEditContext.Consumer>
                </Ctx.ReceiverContext.Provider>
              </div>
            }
            {receiver && 
              <div id="Conversation">
                <Ctx.ReceiverContext.Provider value={receiver}>
                  <UpperSection/>
                  <WriteMessage/>
                </Ctx.ReceiverContext.Provider>
              </div>
            }
          </Ctx.QuitHandlerContext.Provider>
          {warning  &&
            <Redirect to="/messages"/>
          }
        </>
      }
    </Ctx.CurrentlyOpenedConvContext.Consumer>
  )
}