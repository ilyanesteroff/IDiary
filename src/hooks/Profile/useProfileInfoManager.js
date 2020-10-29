import { useState, useEffect } from 'react'


export default (info) => {
  const [ updatedUser, setUpdatedUser ] = useState(null)
  const [ updatedUserInfo, setUpdatedUserInfo ] = useState(null)
  const [ updatedUserSettings, setUpdatedUserSettings ] = useState(null)
  const [ userInfo, setUserInfo ] = useState(info)

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
  }, [ updatedUser ])

  useState(_ => {
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
  }, [ updatedUserInfo ])

  useEffect(_ => {
    if(updatedUserSettings !== null) {
      setUserInfo({
        ...userInfo,
        phone: updatedUserSettings.phone,
        public: updatedUserSettings.public
      })
      setUpdatedUserSettings(null)
    }
  }, [ updatedUserSettings ])

  return [ setUpdatedUser, setUpdatedUserInfo, setUpdatedUserSettings, userInfo ]
}