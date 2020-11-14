import React from 'react'
import MessageOptions from './MessageOptions'
import WrittenAt from './WrittenAt'
import useMessageManager from '../../hooks/Messaging/useMessageManager'


export default ({ info }) => {
  const [ optionsOpened, setOptionsOpened, dblClickHandler, ref ] = useMessageManager(info)

  return(
    <>
      <div onDoubleClick={dblClickHandler} ref={ref}>
        <p>{ info.text }</p>
        <WrittenAt time={ info.writtenAt }/>
      </div>
      {optionsOpened && 
        <MessageOptions info={info} handleClick={_ => setOptionsOpened(false)}/>
      }
    </>
  )
}