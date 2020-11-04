import React from 'react'
import IncomingReq from './IncomingReq'


export default ({ incomingReqCount, data }) => (
  <>
    { incomingReqCount === 0 
      ? <p>You have not received any requests yet, when you will be, you will see them here</p>
      : <p>You have received<span>{` ${incomingReqCount} `}</span>requests</p> 
    }
    { data.length !== 0 && data[0].sender &&
      data.map((d, i) => <IncomingReq data={d} key={'req' + i}/>) 
    }
  </>
)

