import React, { useContext, useRef, useState, useEffect, memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import * as Ctx from '../utils/contexts'
import Navbar from '../components/navbar/index'
import Footer from '../components/Footer/index'
import useLoader from '../hooks/Profile/useLoader'
import useUserInfoManager from '../hooks/Profile/useProfileInfoManager'
import Spinner from '../components/spiners/BigSpinner'
import User from '../components/profile-page/containers/index'
import EditProfileModal from '../components/profile-page/edit/EditProfileModal'
import AreYouSure from '../components/controls/AreYouSure'

 
export default memo(_ => {
  const [ error, setError ] = useState('')
  const [ editUser, setEditUser ] = useState('')
  const [ possibleEditOptions ] = useState([ 'Profile', 'Info', 'Privacy', 'Password', 'Delete', 'Avatar' ])
  
  const Firstname = _ => useContext(Ctx.FirstnameContext)

  const firstname = useRef(Firstname().firstname)
  
  const [ loading, info ] = useLoader(setError)
  const [ userInfo, setUpdatedUser, setDecreaseUserStats, setIncreaseUserStats ] = useUserInfoManager(info)

  document.title = firstname.current
  
  useEffect(_ => window.scrollTo(0, 0), [ ])
  console.log(userInfo)
  return(
    <>
      <Navbar/>
      <Ctx.BrightThemeContext.Consumer> 
        {theme =>
          <div className={`${theme? 'Bright' : 'Dark'}Page Page`}>
            {loading && <Spinner/>}
            {error.length > 0 && <h3>{error}</h3>}   
            <Ctx.SetEditUserContext.Provider value={{ value: editUser, set: val => setEditUser(val) }}>
              <Ctx.SetUpdatedUserContext.Provider value={val => setUpdatedUser(val)}>
                <Ctx.UserDataContext.Provider value={userInfo}>
                  {info._id && !loading &&
                    <Ctx.DecreaseUserStatsContext.Provider value={setDecreaseUserStats}>
                      <Ctx.IncreaseUserStatsContext.Provider value={setIncreaseUserStats}>
                        <User/>
                      </Ctx.IncreaseUserStatsContext.Provider>
                    </Ctx.DecreaseUserStatsContext.Provider>
                  }
                  {possibleEditOptions.some(p => p === editUser) &&
                    <EditProfileModal theme={theme}/>
                  }
                  {editUser === 'AreYouSure' &&
                    <AreYouSure 
                      theme={theme} 
                      yes={_ => setEditUser('Delete')} 
                      no={_ => setEditUser('')}
                    >
                      <h2>Are you sure?</h2>
                      <p>  
                        All of your todos, followers and conversations will be lost
                        <FontAwesomeIcon icon={faHeartBroken}/>
                      </p>
                    </AreYouSure>
                  }
                </Ctx.UserDataContext.Provider>
              </Ctx.SetUpdatedUserContext.Provider>
            </Ctx.SetEditUserContext.Provider>
          </div>
        }
      </Ctx.BrightThemeContext.Consumer>
      <Footer/>
    </>
  )
})