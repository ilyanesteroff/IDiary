import React from 'react'
import Username from '../profile-page/scrollable-list/components/UsernameInReq'
import Avatar from '../profile-page/scrollable-list/components/Avatar'


export default ({ info }) => (
  <div id="request">
    <Avatar url={ info.avatarUrl }/>
    <Username user={info}/>    
    <p id="names">{`${info.firstname} ${info.lastname}`}</p>
  </div>
)