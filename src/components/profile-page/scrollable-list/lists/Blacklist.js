import React from 'react'
import BlockedUser from '../list-items/BlockedUser'


export default ({ blacklistLength, data }) => (
  <>
    { blacklistLength === 0 && <p>Your blacklist is empty</p> 
    }
    { data.length !== 0 && data[0].userWhoBlocked &&
      data.map((d, i) => <BlockedUser data={d} key={'b' + i}/>) 
    }
  </>
)