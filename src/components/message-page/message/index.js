import React from 'react'
import MessageOptions from './MessageOptions'
import MessageText from './MessageText'
import WrittenAt from './WrittenAt'
import useMessageManager from '../../../hooks/Messaging/useMessageManager'
import LikedIcon from './LikedIcon'
import Seen from './Seen'
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
        <MessageText text={ info.text }/>
        <>
          <WrittenAt time={ info.writtenAt }/>
          {!userIdComparer(info.to) &&
            <Seen seen={ info.seen }/>
          }
        </>
        <LikedIcon liked={liked}/>        
        {optionsOpened && 
          <MessageOptions info={info} handleClick={_ => setOptionsOpened(false)}/>
        }
      </div>
    </>
  )
}