import React from 'react'
import { Link } from 'react-router-dom'
import { ReceiverContext } from '../../../utils/contexts'


export default _ => (
  <div id="ReceiverUsername">
    <ReceiverContext.Consumer>
      {username =>
        <Link to={`/user/${username}`}>
          <h2>{username}</h2>
        </Link>
      }
    </ReceiverContext.Consumer>
  </div>
)
