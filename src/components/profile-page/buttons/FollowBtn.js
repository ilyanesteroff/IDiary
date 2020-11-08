import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import sendFollowRequest from '../../../api/profile/send-follow-request'
import useTooltip from '../../../hooks/AnotherProfile/useTooltip'


export default ({ userId, callback, setRequested, withTooltip }) => {
  const [ loading, setLoading ] = useState(false)
  
  const component = <FontAwesomeIcon      
                      id={ loading? 'todoDeletingSpinner' : 'AcceptRequest' }
                      icon={ loading ? faSpinner : faUserPlus }
                      onClick={async _ => {
                        setLoading(true)
                        const request = await sendFollowRequest(userId)
                        setImmediate(_ => setRequested(request))
                        callback()
                        setLoading(false)
                      }}
                    />
                    
  const output = useTooltip(component, withTooltip, 'Follow', loading)

  return output
}