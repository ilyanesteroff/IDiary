import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { SetItemToDeleteContext, DecreaseUserStatsContext } from '../../utils/contexts'


export default ({ data }) => {
  return(
    <div id="request">
      <p>{data.receiver.username}</p>
      <p>{`${data.receiver.firstname} ${data.receiver.lastname}`}</p>
      <p>Sent at:{` ${data.sentAt}`}</p>
      <SetItemToDeleteContext.Consumer>
        {setItemToDelete => 
          <DecreaseUserStatsContext.Consumer>
            {decrease => 
              <FontAwesomeIcon 
                id="RejectRequest" 
                icon={ faTimesCircle }
                onClick={_ => {
                  decrease('requestsTo')
                  setItemToDelete(data._id)
                }}
              />
            }
          </DecreaseUserStatsContext.Consumer>
        }
      </SetItemToDeleteContext.Consumer>
    </div>
  )
}
