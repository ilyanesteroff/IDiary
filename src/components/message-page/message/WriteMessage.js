import React, { useRef } from 'react'
import SendMessageBtn from '../buttons/SendMessageBtn'
import EditMessageBtn from '../buttons/EditMessageBtn'
import CloseEditingBtn from '../buttons/CloseEditingBtn'
import * as Ctx from '../../../utils/contexts'


export default _ => {
  const message = useRef(null)
  return(
    <div id="WriteMessageSection">
      <Ctx.SetMessageToEditLocallyContext.Consumer>
        {({ value }) =>
          <>
            <textarea ref={message}></textarea>
            {value === null 
              ? <div id="WriteMessage-buttons">
                  <SendMessageBtn messageInput={message}/>
                </div>
              : <div id="WriteMessage-buttons">
                  <EditMessageBtn messageInput={message} text={value.text}/>
                  <CloseEditingBtn clearTxtbox={_ => message.current.value = ''}/>
                </div>
            }
          </>
        }
      </Ctx.SetMessageToEditLocallyContext.Consumer>
    </div>
  )
}