import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faEnvelope } from '@fortawesome/free-regular-svg-icons'


export default ({ seen }) => (
  <span>
    { ' ' }
    <FontAwesomeIcon
      className={ seen ? 'seen' : 'notSeen' }
      icon={ seen ? faEnvelopeOpen : faEnvelope }
    />
  </span>
)