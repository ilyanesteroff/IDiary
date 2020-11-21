import React, { useEffect, useState, useCallback, memo } from 'react'
import * as Ctx from '../../../utils/contexts'
import MessagingSection from './MessagingSection'
import UpperSection from './UpperSection'
import Filter from './Filter'
import viewMessages from '../../../actionHandlers/ViewMessages'
import userIdComparer from '../../../utils/userIdComparer'
import useMessages from '../../../hooks/Messaging/useMessages'
import useMessageFilter from '../../../hooks/Messaging/useMessageFilter'


export default memo(({ conv }) => {
  const [ page, setPage ] = useState(1)

  const [ messages, loading, hasNextPage, setHasNextPage, setMessageToAdd, setMessageToDelete, setMessageToEdit ] = useMessages(page, conv, _ => {})

  const [ messagesToExpose, refs, changeHandlers ] = useMessageFilter(messages)

  const definePosition = useCallback(e => {
    if(e.target.scrollTop === 0 && hasNextPage){
      setPage(page + 1)
      setHasNextPage(false)
    }
    // eslint-disable-next-line 
  }, [ page, setHasNextPage, hasNextPage ])

  useEffect(_ => {
    setImmediate(_ => setPage(1))
  }, [ conv._id ])

  useEffect(_ => {
    document.body.style.overflowY = 'hidden'
    document.body.style.maxHeight = '100vh'
    return _ => {
      document.body.style.overflowY = 'auto'
      document.body.scrollTop = 0
      document.body.style.maxHeight = 'auto'
    }
  })

  return(
    <Ctx.CurrentlyOpenedConvContext.Consumer>
      {({ set }) =>     
        <>
          <Ctx.QuitHandlerContext.Provider value={_ => {
            set(null)
          }}>
            <>
              <div id="Conversation">
                <Ctx.ReceiverContext.Provider value={conv.participants[conv.participants.findIndex(p => !userIdComparer(p._id))].username}>
                  <UpperSection/>
                  <Ctx.SetConvToEditContext.Consumer>
                    {edit =>
                      <Ctx.SetMessageContext.Provider value={
                        { 
                          edit: setMessageToEdit, 
                          delete: setMessageToDelete, 
                          add: setMessageToAdd 
                        }
                      }>
                        <Ctx.UnseenMsgsContext.Consumer>
                          { msgs =>
                            <MessagingSection 
                              markMessages={async _ => {
                                await viewMessages(conv, edit)
                                if(userIdComparer(conv.latestMessage.to) && conv.unseenMessages > 0)
                                  msgs.set(msgs.messages - conv.unseenMessages)
                              }}
                              loading={loading}
                              messages={messagesToExpose}
                              definePosition={definePosition}
                            />
                          }
                        </Ctx.UnseenMsgsContext.Consumer>
                      </Ctx.SetMessageContext.Provider>
                    }
                  </Ctx.SetConvToEditContext.Consumer>
                </Ctx.ReceiverContext.Provider>
              </div>
              {messages.length > 0 &&
                <Filter ref={ refs } cHandlers={ changeHandlers }/>
              }
            </>    
          </Ctx.QuitHandlerContext.Provider>
        </>
      }
    </Ctx.CurrentlyOpenedConvContext.Consumer>
  )
}, (prev, next) => {
  return prev.conv === next.conv
})