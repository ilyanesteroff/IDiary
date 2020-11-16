import React from 'react'
import userIdComparer from '../../../utils/userIdComparer'


export default ({ info }) => 
  info.unseenMessages > 0 && userIdComparer(info.latestMessage.to)
    ? <div id="unseenMessages">
        <p>{ info.unseenMessages }</p>
      </div>
    : null