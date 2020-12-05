import { useState, useEffect } from 'react'


export default (info) => {
  const [ updatedUser, setUpdatedUser ] = useState(null)
  const [ userInfo, setUserInfo ] = useState(info)
  const [ decreaseUserStats, setDecreaseUserStats ] = useState(null)
  const [ increaseUserStats, setIncreaseUserStats ] = useState(null)

  useEffect(_ => {
    setUserInfo(info)
  }, [ info ])

  useEffect(_ => {
    if(updatedUser !== null) {
      console.log(updatedUser)
      setUserInfo({
        ...userInfo, 
        username: updatedUser.username || userInfo.username,
        lastname: updatedUser.lastname || userInfo.lastname,
        firstname: updatedUser.firstname || userInfo.firstname,
        website: updatedUser.website || userInfo.website || null,
        company: updatedUser.company || userInfo.company || null,
        about: updatedUser.about || userInfo.about || null,
        relationshipStatus: updatedUser.relationshipStatus || userInfo.relationshipStatus || null,
        phone: updatedUser.phone || userInfo.phone || null,
        public: updatedUser.public || userInfo.public || null,
        avatarUrl: updatedUser.avatarUrl || userInfo.avatarUrl || null
      })
      setUpdatedUser(null)
    } 
  }, [ updatedUser, userInfo ])

  useEffect(_ => {
    if(decreaseUserStats !== null) {
      if(userInfo[decreaseUserStats] !== null && userInfo[decreaseUserStats] > 0){
        setUserInfo({
          ...userInfo,
          [decreaseUserStats] : userInfo[decreaseUserStats] - 1
        })
      }
      setDecreaseUserStats(null)
    }
  }, [ decreaseUserStats, userInfo ])

  useEffect(_ => {
    if(increaseUserStats !== null) {
      if(userInfo[increaseUserStats] !== null){
        setUserInfo({
          ...userInfo,
          [increaseUserStats] : userInfo[increaseUserStats] + 1
        })
      }
      setIncreaseUserStats(null)
    }
  }, [ increaseUserStats, userInfo ])

  return [ 
    userInfo, 
    setUpdatedUser, 
    category => setDecreaseUserStats(category),
    category => setIncreaseUserStats(category)
  ]
}