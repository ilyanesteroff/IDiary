import React from 'react'


export default ({ sentReqCount, data }) => {
  
  return(
    <>
      { sentReqCount === 0 && <p>You have not sent any requests yet, when you will, you will see them here</p> }
    </>
  )
}