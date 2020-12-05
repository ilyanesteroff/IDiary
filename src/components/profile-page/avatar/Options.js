import React from 'react'
import { SetUpdatedUserContext, SetEditUserContext } from '../../../utils/contexts'
import deleteAvatar from '../../../api/delete-avatar'


export default ({ url }) => {
  return(
    <ul>
    <SetEditUserContext.Consumer>
      {({ set }) => 
        <li 
          id="AcceptRequest"
          onClick={_ => set('Image')}
        >
          Update
        </li>
      }
    </SetEditUserContext.Consumer>
      <SetUpdatedUserContext.Consumer>
        {update => 
          <li 
            id="RejectRequest"
            onClick={async _ => {
              const result = await deleteAvatar(url)
              if(result) update({ avatarUrl: 'removed' })
            }}
          >Delete</li>
        }
      </SetUpdatedUserContext.Consumer>
    </ul>
  )
}