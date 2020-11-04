import { useState, useEffect } from 'react'


export default (info) => {
  const [ updatedUser, setUpdatedUser ] = useState(null)
  const [ updatedUserInfo, setUpdatedUserInfo ] = useState(null)
  const [ updatedUserSettings, setUpdatedUserSettings ] = useState(null)
  const [ userInfo, setUserInfo ] = useState(info)
  const [ decreaseUserStats, setDecreaseUserStats ] = useState(null)

  useEffect(_ => {
    setUserInfo(info)
  }, [ info ])

  useEffect(_ => {
    if(updatedUser !== null) {
      setUserInfo({
        ...userInfo, 
        username: updatedUser.username || userInfo.username,
        lastname: updatedUser.lastname || userInfo.lastname,
        firstname: updatedUser.firstname || userInfo.firstname,
      })
      setUpdatedUser(null)
    } 
  }, [ updatedUser, userInfo ])

  useEffect(_ => {
    if(updatedUserInfo !== null) {
      setUserInfo({
        ...userInfo,
        website: updatedUserInfo.website,
        company: updatedUserInfo.company,
        about: updatedUserInfo.about,
        relationshipStatus: updatedUserInfo.relationshipStatus
      })
      setUpdatedUserInfo(null)
    }
  }, [ updatedUserInfo, userInfo ])

  useEffect(_ => {
    if(updatedUserSettings !== null) {
      setUserInfo({
        ...userInfo,
        phone: updatedUserSettings.phone,
        public: updatedUserSettings.public
      })
      setUpdatedUserSettings(null)
    }
  }, [ updatedUserSettings, userInfo ])

  useEffect(_ => {
    if(decreaseUserStats !== null) {
      if(userInfo[decreaseUserStats] && userInfo[decreaseUserStats] > 0){
        setUserInfo({
          ...userInfo,
          [decreaseUserStats] : userInfo[decreaseUserStats] - 1
        })
      }
      setDecreaseUserStats(null)
    }
  }, [ decreaseUserStats, userInfo ])

  return [ userInfo, setUpdatedUser, setUpdatedUserInfo, setUpdatedUserSettings, category => setDecreaseUserStats(category) ]
}