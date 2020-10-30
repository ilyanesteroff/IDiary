import React, { useContext, useRef, useState, memo } from 'react'
import * as Ctx from '../utils/contexts'
import Navbar from '../components/navbar/index'
import useLoader from '../hooks/Profile/useLoader'
import useUserInfoManager from '../hooks/Profile/useProfileInfoManager'
import Spinner from '../components/spiners/BigSpinner'
import User from '../components/profile-page/User'
import EditProfileModal from '../components/profile-page/EditProfileModal'


export default memo(_ => {
  const [ error, setError ] = useState('')
  const [ editUser, setEditUser ] = useState('')
  
  const Firstname = _ => useContext(Ctx.FirstnameContext)

  const firstname = useRef(Firstname().firstname)
  
  const [ loading, info ] = useLoader(setError)
  const [ setUpdatedUser, setUpdatedUserInfo, setUpdatedUserSettings, userInfo ] = useUserInfoManager(info)

  document.title = firstname.current

  return(
    <>
      <Navbar/>
      <Ctx.BrightThemeContext.Consumer> 
        {theme =>
          <div className={`${theme? 'Bright' : 'Dark'}Page Page`}>
            {loading && <Spinner/>}
            {error.length > 0 && <h3>{error}</h3>}   
            <Ctx.SetEditUserContext.Provider value={{ value: editUser, set: val => setEditUser(val) }}>
              <Ctx.UserDataContext.Provider value={userInfo}>
                {info._id && !loading &&
                  <User/>
                }
                {(editUser === 'Profile' || editUser === 'Info' || editUser === 'Privacy' || editUser === 'Password') &&
                  <Ctx.SetUpdatedUser.Provider value={{setSettings: setUpdatedUserSettings, setUser: setUpdatedUser, setInfo: setUpdatedUserInfo}}>
                    <EditProfileModal theme={theme}/>
                  </Ctx.SetUpdatedUser.Provider>
                }
              </Ctx.UserDataContext.Provider>
            </Ctx.SetEditUserContext.Provider>
          </div>
        }
      </Ctx.BrightThemeContext.Consumer>
    </>
  )
})