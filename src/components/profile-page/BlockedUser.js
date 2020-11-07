import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnlock } from '@fortawesome/free-solid-svg-icons'
import { SetItemToDeleteContext, DecreaseUserStatsContext } from '../../utils/contexts'
import unblock from '../../api/profile/unblock-user'


export default ({ data }) => (
  <div id="request">
    <p id="username">{data.user.username}</p>
    <SetItemToDeleteContext.Consumer>
      {setItemToDelete => 
        <DecreaseUserStatsContext.Consumer>
          {decrease => 
            <div id="reqButtons">
              <FontAwesomeIcon
                id="BlueIcon"
                icon={faUnlock}
                onClick={async _ => {
                  await unblock(data.user.username)
                  decrease('blockedUsers')
                  setItemToDelete(data._id)
                }}
              />
            </div>
          }
        </DecreaseUserStatsContext.Consumer>
      }
    </SetItemToDeleteContext.Consumer>
    <p>{`${data.user.firstname} ${data.user.lastname}`}</p>
  </div>
)