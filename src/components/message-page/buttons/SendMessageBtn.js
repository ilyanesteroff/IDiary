import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import * as Ctx from '../../../utils/contexts'
import writeMessage from '../../../actionHandlers/WriteMessage'
import createConv from '../../../actionHandlers/CreateConv'


export default ({ messageInput }) => {
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
                        <div 
                          id="SendMsgBtn"
                          onClick={async _ => 
                            value 
                              ? await writeMessage(
                                  value, 
                                  messageInput, 
                                  msg => setMsg.add(msg), 
                                  msg => setMsg.edit(msg),
                                  data => updateConv(data)
                                )
                              : await createConv(
                                  messageInput, 
                                  receiver, 
                                  conv => add(conv), 
                                  conv => set(conv)
                                )
                          }
                        >
                          <FontAwesomeIcon icon={faPaperPlane}/>
                        </div>
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