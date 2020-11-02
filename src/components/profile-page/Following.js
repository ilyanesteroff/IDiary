import React from 'react'


export default ({ followingCount, data }) => {
  
  return(
    <>
      { followingCount === 0 && <p>You do not follow anyone yet, when you will, you will see him here</p> }
    </>
  )
}