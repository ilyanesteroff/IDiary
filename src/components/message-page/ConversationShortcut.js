import React from 'react'
import { Link } from 'react-router-dom'
import { CurrentlyOpenedConvContext } from '../../utils/contexts'
import Username from './SecondUser'
import UpdatedAt from './UpdatedAt'
import LatestMessage from './LatestMessage'


export default ({ info }) => {
  return(
    <CurrentlyOpenedConvContext.Consumer>
      {({ set }) => 
        <Link to={`/messages/${info._id}`}>
          <div id="shortcut" onClick={_ => set(info)}>
            <Username participants={info.participants}/>
            <UpdatedAt time={info.updatedAt}/>
            <LatestMessage message={info.latestMessage}/>
          </div>
        </Link>
      }
    </CurrentlyOpenedConvContext.Consumer>
  )
}