import { useState, useEffect } from 'react'


export default ( info ) => {
  const [ unfollow, setUnfollow ] = useState(null)
  const [ availableInfo, setAvailableInfo ] = useState(info)

  useEffect(_ => {
    setAvailableInfo(info)
  }, [ info ])

  useEffect(_ => {
    if(unfollow){
      if(!availableInfo.public){
        setAvailableInfo({
          _id: availableInfo._id,
          createdAt: availableInfo.createdAt,
          lastSeen: availableInfo.lastSeen,
          firstname: availableInfo.firstname,
          lastname: availableInfo.lastname,
          username: availableInfo.username,
          public: availableInfo.public
        })
        setUnfollow(null)
      }
    }
    // eslint-disable-next-line
  }, [ unfollow ])
 
  return [ availableInfo, _ => setUnfollow(true) ]
}