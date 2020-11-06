import React from 'react'
import { SetItemToDeleteContext, DecreaseUserStatsContext } from '../../utils/contexts'
import RequestTime from './RequestTime'
import Username from './UsernameInReq'
import UnsendReqBtn from './UnsendReq'


export default ({ data }) => (
  <div id="request">
    <Username user={data.receiver}/>
    <SetItemToDeleteContext.Consumer>
      {setItemToDelete => 
        <DecreaseUserStatsContext.Consumer>
          {decrease => 
            <div id="reqButtons">
              <UnsendReqBtn
                reqId={data._id}
                callback={_ => {
                  decrease('requestsTo')
                  setItemToDelete(data._id)
                }}
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

