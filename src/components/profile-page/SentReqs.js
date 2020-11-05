import React from 'react'
import SentRequest from './SentRequest'

export default ({ sentReqCount, data }) => (
  <>
    { sentReqCount === 0 && <p>You have not sent any requests yet, when you will, you will see them here</p> 
    }
    { data.length !== 0 && data[0].receiver &&
      data.map((d, i) => <SentRequest data={d} key={'req' + i}/>) 
    }
  </>
)

