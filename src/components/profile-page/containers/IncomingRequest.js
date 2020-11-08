import React from 'react'
import AcceptRequestBtn from '../buttons/AcceptRequestBtn'
import RejectRequestBrn from '../buttons/RejectRequestBtn'
import useIncomingReq from '../../../hooks/AnotherProfile/useIncomingRequest'
import { IncreaseUserStatsContext } from '../../../utils/contexts'


export default ({ username, userId }) => {
  const [ request, disposeReq ] = useIncomingReq(userId)
  
  return request !== null
    ? (
        <div id="UserSection" className="IncomingRequest">
          <h4>{`${username} wants to follow you`}</h4>
          <div id="btns">
            <IncreaseUserStatsContext.Consumer>
              {increase => 
                <AcceptRequestBtn
                  reqId={request}
                  callback={_ => {
                    increase('following')
                    disposeReq()
                  }}
                  withToolTip
                />
              }
            </IncreaseUserStatsContext.Consumer>
            <RejectRequestBrn
              reqId={request}
              callback={_ => disposeReq()}
              withToolTip
            />
          </div>
        </div>
      )
    : null
}