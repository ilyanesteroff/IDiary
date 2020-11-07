import React from 'react'
import Following from './FollowingUser'
import userIdComparer from '../../utils/userIdComparer'


export default ({ followingCount, data, username, userId }) => {
  const nameString = `${userIdComparer(userId)? 'You ' : username + ' '}`

  return(
    <>
      { followingCount === 0 && 
        <p>
          { nameString } do<span>{userIdComparer(userId)? '' : 'es '}</span> not follow anyone yet, when { nameString } will, they will be available here 
        </p> 
      }
      { data.length > 0 && data[0].followingSince &&
        data.map((d, i) => <Following data={d} key={'req' + i}/>) 
      }
    </>
  )
}
