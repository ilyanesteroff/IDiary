import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import Tooltip from './Tooltip'


export default ({ userId, withTooltip }) => {
  const component = <Link to={`/conversations/${userId}`}>
                      <FontAwesomeIcon
                        icon={ faComment }
                        id="BlueIcon"
                      />
                    </Link>

  let output
  withTooltip 
    ? output = <div className="tooltip">
                { component }
                <Tooltip content="Contact"/>
               </div>
    : output = component

  return output
}