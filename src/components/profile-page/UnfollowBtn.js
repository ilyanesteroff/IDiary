import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSlash, faSpinner } from '@fortawesome/free-solid-svg-icons'
import Tooltip from './Tooltip'


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
  let output
  withTooltip
    ?  output = <div className={ !loading ? 'tooltip' : 'noTooltip' }>
                  { component }
                  <Tooltip content="Unfollow"/>
                </div>
    :  output = component

  return output
}
