import React from 'react'
import Follower from './Follower'
import userIdComparer from '../../utils/userIdComparer'


export default ({ followersCount, data, username, userId }) => {
  const nameString = `${userIdComparer(userId)? 'You have ' : username + 'has '}`

  return(
    <>
      { followersCount === 0 && 
        <p>
          {nameString} no followers yet, when {nameString}, they are available here 
        </p> 
      }
      { data.length > 0 && data[0].followingSince &&
        data.map((d, i) => <Follower data={d} key={'req' + i}/>) 
      }
    </>
  )
}