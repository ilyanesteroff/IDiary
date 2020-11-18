import React, { useEffect, useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { CurrentlyOpenedConvContext } from '../../../utils/contexts'
import Username from './SecondUser'
import UpdatedAt from './UpdatedAt'
import LatestMessage from './LatestMessage'
import UnseenMessages from './UnseenMessages'
import userIdComparer from '../../../utils/userIdComparer'


export default ({ info }) => {
  const SetConv = _ => useContext(CurrentlyOpenedConvContext)

  const setConv = useRef(SetConv().set)

  useEffect(_ => {
    const possibleConversation = window.location.pathname.split('/')[2]
    if(possibleConversation === info._id){
      setConv.current(info)
    }
  }, [ info ])

  return(
    <CurrentlyOpenedConvContext.Consumer>
      {({ set }) => 
        <Link to={`/messages/${info._id}`}>
          <div id="shortcut" onClick={_ => set(info)}>
            <Username participants={info.participants}/>
            <div id="middle-section">
              <LatestMessage message={info.latestMessage} unseenMsgs={ info.unseenMessages > 0 && userIdComparer(info.latestMessage.to) }/>
              <UnseenMessages info={info}/>
            </div>
            <UpdatedAt time={info.updatedAt}/>
          </div>
        </Link>
      }
    </CurrentlyOpenedConvContext.Consumer>
  )
}