import React from 'react'
import * as Ctx from '../../utils/contexts'
import deleteMsg from '../../actionHandlers/DeletingMessage'


export default ({ info, handleClick }) => (
  <ul>
    <Ctx.SetMessageToEditLocallyContext.Consumer>
      {({ set }) =>
        <li onClick={_ => {
          setImmediate(_ => set(info))
          handleClick()
        }}>
          edit
        </li>
      }
    </Ctx.SetMessageToEditLocallyContext.Consumer>
    <Ctx.CurrentlyOpenedConvContext.Consumer>
      {conv => 
        <Ctx.SetConvToDeleteContext.Consumer>
          {deleteConv => 
            <Ctx.SetMessageContext.Consumer>
              {setMessage => 
                <Ctx.SetConvToEditContext.Consumer>
                  {edit => 
                    <li onClick={async _ => 
                      await deleteMsg(info._id, _ => deleteConv(conv._id), res => edit(res), id => setMessage.delete(id))
                    }>
                      delete
                    </li>
                  }
                </Ctx.SetConvToEditContext.Consumer>
              }
            </Ctx.SetMessageContext.Consumer>
          }
        </Ctx.SetConvToDeleteContext.Consumer>
      }
    </Ctx.CurrentlyOpenedConvContext.Consumer>
  </ul>
)