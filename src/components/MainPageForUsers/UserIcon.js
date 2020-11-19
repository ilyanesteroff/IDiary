import React from 'react'
import Username from '../profile-page/scrollable-list/components/UsernameInReq'


export default ({ info }) => (
  <div id="request">
    <Username user={info}/>    
    <p id="names">{`${info.firstname} ${info.lastname}`}</p>
  </div>
)