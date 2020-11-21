import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import userIdComparer from '../../../utils/userIdComparer'

export default ({ participants }) => {
  const [ redirect, setRedirect ] = useState(false)

  const member = participants.findIndex(p => !userIdComparer(p._id))

  return(
    <> 
      <h2 id="SecondParticipant" onDoubleClick={_ => setRedirect(true)}>
        { participants[member].username }
      </h2>
      {redirect &&
        <Redirect to={`/user/${participants[member]._id}`}/>
      }
    </>
  )
}