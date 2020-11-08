import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import useTooltip from '../../../hooks/AnotherProfile/useTooltip'
import unsend from '../../../actionHandlers/UnsendReq'


export default ({ reqId, callback, withTooltip }) => {
  const [ loading, setLoading ] = useState(false)
  
  const component = <FontAwesomeIcon
                      id={ loading? 'todoDeletingSpinner' : 'RejectRequest' }
                      icon={ loading ? faSpinner : faTimesCircle }
                      onClick={async _ => {
                        setLoading(true)
                        await unsend(
                          reqId, 
                          callback
                        )
                      }}
                    />
 
  const output = useTooltip(component, withTooltip, 'Cancel request', loading)

  return output
}