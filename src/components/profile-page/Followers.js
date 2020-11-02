import React from 'react'


export default ({ followersCount, data }) => {
  
  return(
    <>
      { followersCount === 0 && <p>You have no followers yet, when you have them you will see them here</p> }
    </>
  )
}