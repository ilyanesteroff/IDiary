import React, { useRef } from 'react'
import SendMessageBtn from './SendMessageBtn'
import EditMessageBtn from './EditMessageBtn'
import * as Ctx from '../../utils/contexts'


export default _ => {
  const message = useRef(null)
  return(
    <div>
      <Ctx.SetMessageToEditLocallyContext.Consumer>
        {({ value }) =>
          <>
            <textarea ref={message}></textarea>
            {value === null 
              ? <SendMessageBtn messageInput={message}/>
              : <EditMessageBtn messageInput={message} text={value.text}/>
            }
          </>
        }
      </Ctx.SetMessageToEditLocallyContext.Consumer>
    </div>
  )
}