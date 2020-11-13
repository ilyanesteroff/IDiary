import React from 'react'
import { ReceiverContext } from '../../utils/contexts'


export default _ => (
  <div id="ReceiverUsername">
    <ReceiverContext.Consumer>
      {username =>
        <h2>{username}</h2>
      }
    </ReceiverContext.Consumer>
  </div>
)
