import React from 'react'
import MessageOptions from './MessageOptions'
import WrittenAt from './WrittenAt'
import useMessageManager from '../../../hooks/Messaging/useMessageManager'
import LikedIcon from './LikedIcon'
import userIdComparer from '../../../utils/userIdComparer'


export default ({ info }) => {
  const [ optionsOpened, setOptionsOpened, dblClickHandler, ref, liked ] = useMessageManager(info)
  
  return(
    <>
      <div 
        id="Message"
        className={`${userIdComparer(info.to) ? 'IncomingMsg' : 'SentMsg'}`}
        onDoubleClick={dblClickHandler} 
        onClick={_ => optionsOpened && setOptionsOpened(false)}
        ref={ref}
      >
        <p id="MsgTxt">{ info.text }</p>
        <WrittenAt time={ info.writtenAt }/>
        <LikedIcon liked={liked}/>        
        {optionsOpened && 
          <MessageOptions info={info} handleClick={_ => setOptionsOpened(false)}/>
        }
      </div>
    </>
  )
}