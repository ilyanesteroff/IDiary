import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-regular-svg-icons'


export default ({ userId }) => (
  <Link to={`/conversations/${userId}`}>
    <FontAwesomeIcon
      icon={ faComment }
      id="BlueIcon"
    />
  </Link>
)