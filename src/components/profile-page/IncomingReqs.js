import React from 'react'


export default ({ incomingReqCount, data }) => {
  
  return(
    <>
      { incomingReqCount === 0 && <p>You have not received any requests yet, when you will be, you will see them here</p> }
    </>
  )
}