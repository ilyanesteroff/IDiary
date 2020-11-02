import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSlash } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'


export default ({ data }) => (
  <div>
    <p>{data.user.username}</p>
    <p>{`${data.user.firstname} ${data.user.lastname}`}</p>
    <p>Sent at:{` ${data.followingSince}`}</p>
    <FontAwesomeIcon id="ContactFollower" icon={ faComment }/>
    <FontAwesomeIcon id="Unfollow" icon={ faUserSlash }/>
  </div>
)