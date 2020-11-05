import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { SetItemToDeleteContext, DecreaseUserStatsContext } from '../../utils/contexts'
import RequestTime from './RequestTime'
import Username from './UsernameInReq'
import unsend from '../../actionHandlers/UnsendReq'


export default ({ data }) => {
  const [ loading, setLoading ] = useState(false)

  return(
    <div id="request">
      <Username user={data.receiver}/>
      <SetItemToDeleteContext.Consumer>
        {setItemToDelete => 
          <DecreaseUserStatsContext.Consumer>
            {decrease => 
              <div id="reqButtons">
                <FontAwesomeIcon 
                  id={ loading? 'todoDeletingSpinner' : 'RejectRequest' }
                  icon={ loading ? faSpinner : faTimesCircle }
                  onClick={_ => 
                    unsend(
                      data._id, 
                      val => setLoading(val), 
                      _ => {
                        decrease('requestsTo')
                        setItemToDelete(data._id)
                      }
                    )
                  }
                />
              </div>
            }
          </DecreaseUserStatsContext.Consumer>
        }
      </SetItemToDeleteContext.Consumer>
      <p id="names">{`${data.receiver.firstname} ${data.receiver.lastname}`}</p>
      <RequestTime date={data.sentAt}/>
    </div>
  )
}
