import React from 'react'
import MessageOptions from './MessageOptions'
import WrittenAt from './WrittenAt'
import useMessageManager from '../../hooks/Messaging/useMessageManager'
import userIdComparer from '../../utils/userIdComparer'


export default ({ info }) => {
  const [ optionsOpened, setOptionsOpened, dblClickHandler, ref ] = useMessageManager(info)

  return(
    <>
      <div 
        id="Message"
        className={userIdComparer(info.to) ? 'IncomingMsg' : 'SentMsg'}
        onDoubleClick={dblClickHandler} 
        ref={ref}
      >
        <p id="MsgTxt">{ info.text }</p>
        <WrittenAt time={ info.writtenAt }/>
      </div>
      {optionsOpened && 
        <MessageOptions info={info} handleClick={_ => setOptionsOpened(false)}/>
      }
    </>
  )
}