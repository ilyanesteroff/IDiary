import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import * as Ctx from '../../utils/contexts'
import RequestTime from './RequestTime'
import rejectOrAccept from '../../actionHandlers/RejectAcceptReq'
import Username from './UsernameInReq'


export default ({ data }) => {
  const [ loading, setLoading ] = useState(false)

  return(
    <div id="request">
      <Username user={data.sender}/>
      <Ctx.DecreaseUserStatsContext.Consumer>
        {decrease => 
          <Ctx.SetItemToDeleteContext.Consumer>
            {deleteItem => 
              <div id="reqButtons">
                <Ctx.IncreaseUserStatsContext.Consumer>
                  {increase => 
                    <FontAwesomeIcon 
                      id={ loading? 'todoDeletingSpinner' : 'AcceptRequest' }
                      icon={ loading ? faSpinner : faCheckCircle } 
                      onClick={_ => 
                        rejectOrAccept(
                          data._id,
                          val => setLoading(val),
                          _ => {
                            new Promise((resolve) => resolve(decrease('requestsFrom')))
                              .then(_ => {
                                increase('followers')
                                deleteItem(data._id)
                              })
                          },
                          true
                        )
                      }
                    />
                  }
                </Ctx.IncreaseUserStatsContext.Consumer>
                <FontAwesomeIcon 
                  id={ loading? 'todoDeletingSpinner' : 'RejectRequest' }
                  icon={ loading ? faSpinner : faTimesCircle }
                  onClick={_ => 
                    rejectOrAccept(
                      data._id,
                      val => setLoading(val), 
                      _ => {
                        decrease('requestsFrom')
                        deleteItem(data._id)
                      },
                      false
                    )
                  }
                />
              </div>
            }
          </Ctx.SetItemToDeleteContext.Consumer>
        }
      </Ctx.DecreaseUserStatsContext.Consumer>
      <p id="names">{`${data.sender.firstname} ${data.sender.lastname}`}</p>
      <RequestTime date={data.sentAt}/>
    </div>
  )
}