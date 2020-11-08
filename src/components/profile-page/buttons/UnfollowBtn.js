import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSlash, faSpinner } from '@fortawesome/free-solid-svg-icons'
import useTooltip from '../../../hooks/AnotherProfile/useTooltip'


export default ({ clickHandler, withTooltip }) => {
  const [ loading, setLoading ] = useState(false)
  
  const component = <FontAwesomeIcon      
                      id={ loading? 'todoDeletingSpinner' : 'RejectRequest' }
                      icon={ loading ? faSpinner : faUserSlash }
                      onClick={async _ => {
                        setLoading(true)
                        await clickHandler()
                        setLoading(false)
                      }}
                    />
  
  const output = useTooltip(component, withTooltip, 'Unfollow', loading)

  return output
}
