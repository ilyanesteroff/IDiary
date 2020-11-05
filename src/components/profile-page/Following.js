import React from 'react'
import Following from './FollowingUser'


export default ({ followingCount, data }) => (
  <>
    { followingCount === 0 && <p>You do not follow anyone yet, when you will, you will see him here</p> }
    { data.length > 0 && data[0].followingSince &&
      data.map((d, i) => <Following data={d} key={'req' + i}/>) 
    }
  </>
)
