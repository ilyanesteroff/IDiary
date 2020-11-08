import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import useTooltip from '../../../hooks/AnotherProfile/useTooltip'


export default ({ userId, withTooltip }) => {
  const component = <Link to={`/conversations/${userId}`}>
                      <FontAwesomeIcon
                        icon={ faComment }
                        id="BlueIcon"
                      />
                    </Link>

  const output = useTooltip(component, withTooltip, 'Contact', false)

  return output
}