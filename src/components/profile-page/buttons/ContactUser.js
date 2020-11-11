import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import useTooltip from '../../../hooks/AnotherProfile/useTooltip'


export default ({ username, withTooltip }) => {
  const component = <Link to={`/messages/write_or_find/${username}`}>
                      <FontAwesomeIcon
                        icon={ faComment }
                        id="BlueIcon"
                      />
                    </Link>

  const output = useTooltip(component, withTooltip, 'Contact', false)

  return output
}