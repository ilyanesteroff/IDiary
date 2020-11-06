import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import unsend from '../../actionHandlers/UnsendReq'


export default ({ reqId, callback }) => {
  const [ loading, setLoading ] = useState(false)

  return(
    <FontAwesomeIcon
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
  )
}