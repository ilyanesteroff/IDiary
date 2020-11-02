import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'


export default ({ data }) => (
  <div id="request">
    <p>{data.receiver.username}</p>
    <p>{`${data.receiver.firstname} ${data.receiver.lastname}`}</p>
    <p>Sent at:{` ${data.sentAt}`}</p>
    <FontAwesomeIcon id="RejectRequest" icon={ faTimesCircle }/>
  </div>
)
