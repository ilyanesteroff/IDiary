import React, { useEffect, useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { CurrentlyOpenedConvContext, SetConvToEditContext } from '../../utils/contexts'
import Username from './SecondUser'
import UpdatedAt from './UpdatedAt'
import LatestMessage from './LatestMessage'
import UnseenMessages from './UnseenMessages'
import viewMessages from '../../actionHandlers/ViewMessages'


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
        <SetConvToEditContext.Consumer>
          {edit =>
            <Link 
              to={`/messages/${info._id}`}
              onClick={async _ => await viewMessages(info, edit)}
            >
              <div id="shortcut" onClick={_ => set(info)}>
                <div>
                  <Username participants={info.participants}/>
                  <UpdatedAt time={info.updatedAt}/>
                </div>
                <LatestMessage message={info.latestMessage}/>
                <UnseenMessages info={info}/>
              </div>
            </Link>
          }
        </SetConvToEditContext.Consumer>
      }
    </CurrentlyOpenedConvContext.Consumer>
  )
}