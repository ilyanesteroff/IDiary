import React from 'react'
import Follower from './Follower'


export default ({ followersCount, data }) => (
  <>
    { followersCount === 0
      ? <p>You have no followers yet, when you have them you will see them here</p> 
      : <p>You have<span>{` ${followersCount} `}</span>folllowers</p>
    }
    { data.length > 0 && data.map((d, i) => <Follower data={d} key={'req' + i}/>) }
  </>
)
