import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { SetItemToDeleteContext, DecreaseUserStatsContext } from '../../utils/contexts'

export default ({ data }) => {
  return(
    <div id="request">
      <p>{ data.sender.username }</p>
      <p>{`${data.sender.firstname} ${data.sender.lastname}`}</p>
      <p>Sent at:{` ${data.sentAt}`}</p>
      <DecreaseUserStatsContext.Consumer>
        {decrease => 
          <SetItemToDeleteContext.Consumer>
            {deleteItem => 
              <>
                <FontAwesomeIcon 
                  id="AcceptRequest" 
                  icon={ faTimesCircle } 
                  onClick={_ => {
                    decrease('requestsFrom')
                    deleteItem(data._id)
                  }}
                />
                <FontAwesomeIcon 
                  id="RejectRequest" 
                  icon={ faCheckCircle }
                  onClick={_ => {
                    decrease('requestsFrom')
                    deleteItem(data._id)
                  }}
                />
              </>
            }
          </SetItemToDeleteContext.Consumer>
        }
      </DecreaseUserStatsContext.Consumer>
    </div>
  )
}