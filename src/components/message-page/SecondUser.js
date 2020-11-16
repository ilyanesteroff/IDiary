import React from 'react'
import userIdComparer from '../../utils/userIdComparer'

export default ({ participants }) => {
  const member = participants.findIndex(p => !userIdComparer(p._id))
  return <h2 id="SecondParticipant">{ participants[member].username }</h2>
}