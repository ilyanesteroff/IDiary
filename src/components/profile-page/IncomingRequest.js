import React from 'react'
import AcceptRequestBtn from './AcceptRequestBtn'
import RejectRequestBrn from './RejectRequestBtn'
import useIncomingReq from '../../hooks/AnotherProfile/useIncomingRequest'


export default ({ username, userId }) => {
  const [ request, disposeReq ] = useIncomingReq(userId)
  
  return request !== null
    ? (
        <div id="UserSection" className="IncomingRequest">
          <h4>{`${username} wants to follow you`}</h4>
          <div id="btns">
            <AcceptRequestBtn
              reqId={request}
              callback={_ => disposeReq()}
              withToolTip
            />
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