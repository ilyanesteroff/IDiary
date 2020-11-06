import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import sendFollowRequest from '../../api/profile/send-follow-request'


export default ({ userId, callback, setRequested }) => {
  const [ loading, setLoading ] = useState(false)
  //TODO: check for cleanup
  return(
    <FontAwesomeIcon      
      id={ loading? 'todoDeletingSpinner' : 'AcceptRequest' }
      icon={ loading ? faSpinner : faUserPlus }
      onClick={async _ => {
        setLoading(true)
        const request = await sendFollowRequest(userId)
        setRequested(request)
        callback()
        setLoading(false)
      }}
    />
  )
}