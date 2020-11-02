import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons'


export default ({ data }) =>(
  <div id="request">
    <p>{ data.sender.username }</p>
    <p>{`${data.sender.firstname} ${data.sender.lastname}`}</p>
    <p>Sent at:{` ${data.sentAt}`}</p>
    <FontAwesomeIcon id="AcceptRequest" icon={ faTimesCircle }/>
    <FontAwesomeIcon id="RejectRequest" icon={ faCheckCircle }/>
  </div>
)