import React from 'react'
import { SetItemToDeleteContext, DecreaseUserStatsContext } from '../../../../utils/contexts'
import Username from '../components/UsernameInReq'
import RequestTime from '../components/RequestTime'
import UnsendReqBtn from '../../buttons/UnsendReq'
import Avatar from '../components/Avatar'


export default ({ data }) => (
  <div id="request">
    <Avatar url={ data.receiver.avatarUrl }/>
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