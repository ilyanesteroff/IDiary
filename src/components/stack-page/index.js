import React from 'react'
import Backend from './Backend'
import Frontend from './Frontend'
import Chapter from './Chapter'


export default _ => {
  return(
    <>
      <Chapter/>
      <div id="StackLists">
        <Backend/>
        <Frontend/>
      </div>
    </>
  )
}