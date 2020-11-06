import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSlash, faSpinner } from '@fortawesome/free-solid-svg-icons'


export default ({ clickHandler }) => {
  const [ loading, setLoading ] = useState(false)

  return(
    <FontAwesomeIcon      
      id={ loading? 'todoDeletingSpinner' : 'RejectRequest' }
      icon={ loading ? faSpinner : faUserSlash }
      onClick={async _ => {
        setLoading(true)
        await clickHandler()
        setLoading(false)
      }}
    />
  )
}
