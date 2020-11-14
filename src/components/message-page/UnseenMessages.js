import React from 'react'
import userIdComparer from '../../utils/userIdComparer'


export default ({ info }) => 
  info.unseenMessages > 0 && userIdComparer(info.latestMessage.to)
    ? <p>{ info.unseenMessages }</p>
    : null