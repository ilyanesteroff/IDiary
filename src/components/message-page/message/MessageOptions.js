import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import * as Ctx from '../../../utils/contexts'
import deleteMsg from '../../../actionHandlers/DeletingMessage'


export default ({ info, handleClick }) => (
  <ul id="msgOptions">
    <Ctx.SetMessageToEditLocallyContext.Consumer>
      {({ set }) =>
        <li onClick={_ => {
          setImmediate(_ => set(info))
          handleClick()
        }}>
          <FontAwesomeIcon
            id="EditMsg"
            icon={faPencilAlt}
          />
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
                      await deleteMsg(info, _ => deleteConv(conv._id), setMessage.edit, edit, setMessage.delete)
                    }>
                      <FontAwesomeIcon
                        id="DeleteMsg"
                        icon={faTrashAlt}
                      />
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