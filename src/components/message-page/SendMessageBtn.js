import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import * as Ctx from '../../utils/contexts'
import writeMessage from '../../actionHandlers/WriteMessage'
import createConv from '../../actionHandlers/CreateConv'


export default ({ messageInput }) => {
  const [ clicked, setClicked ] = useState(false)

  return(
    <Ctx.SetConvToEditContext.Consumer>
      {updateConv =>
        <Ctx.SetMessageContext.Consumer>
          {setMsg => 
            <Ctx.CurrentlyOpenedConvContext.Consumer>
              {({ value, set }) => 
                <Ctx.SetConvToAddContext.Consumer>
                  {add => 
                    <Ctx.ReceiverContext.Consumer>
                      {receiver => 
                        <FontAwesomeIcon
                          icon={faPaperPlane}
                          onClick={async _ => {
                            if(!clicked) {
                              value 
                                ? await writeMessage(
                                    value, 
                                    messageInput.current.value, 
                                    val => setClicked(val), 
                                    msg => setMsg.add(msg), 
                                    data => updateConv(data)
                                  )
                                : await createConv(
                                    messageInput.current.value, 
                                    receiver, 
                                    /*msg => setMsg.add(msg), */
                                    conv => add(conv), 
                                    conv => set(conv)
                                  )
                            }
                          }}
                        />
                      }
                    </Ctx.ReceiverContext.Consumer>
                  }
                </Ctx.SetConvToAddContext.Consumer>
              }
            </Ctx.CurrentlyOpenedConvContext.Consumer>
          }
        </Ctx.SetMessageContext.Consumer>
      }
    </Ctx.SetConvToEditContext.Consumer>
  )
}