import React, { useEffect, useState } from 'react'
import edit from '../../api/messaging/edit-message'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import * as Ctx from '../../utils/contexts'


export default ({ messageInput, text }) => {
  const [ clicked, setClicked ] = useState(false)

  useEffect(_ => {
    messageInput.current.value = text
  }, [ messageInput, text ]);
  
  return(
    <Ctx.SetMessageToEditLocallyContext.Consumer>
      {({ value, set }) =>
        <Ctx.SetMessageContext.Consumer>
          {setMessage =>
            <Ctx.SetConvToEditContext.Consumer>
              {updateConv => 
                <FontAwesomeIcon
                  icon={faPencilAlt}
                  onClick={async _ => {
                    if(!clicked){
                      setImmediate(_ => setClicked(true))
                      if(messageInput.current.value === value.text) set(null)
                      else if(messageInput.current.value.trim().length !== 0){
                        const res = await edit(value._id, messageInput.current.value)
                        if(res.messageUpdated){
                          setMessage.edit({ ...value, text: messageInput.current.value })
                          if(res.conversation) updateConv(res.conversation)
                        }
                      }
                      messageInput.current.value = ''
                      set(null)
                    }
                  }}
                />
              }
            </Ctx.SetConvToEditContext.Consumer>
          }
        </Ctx.SetMessageContext.Consumer>
      }
    </Ctx.SetMessageToEditLocallyContext.Consumer>
  )
}