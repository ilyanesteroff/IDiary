import React, { useState, memo }  from 'react'
import * as Ctx from '../utils/contexts'
import Navbar from '../components/navbar/index'
import useLoader from '../hooks/AnotherProfile/useLoader'
import useUnfollowHandler from '../hooks/AnotherProfile/useUnfollowHandler'
import Spinner from '../components/spiners/BigSpinner'
import User from '../components/profile-page/User'
//import AreYouSure from '../components/controls/AreYouSure'


export default memo(({ userId }) => {
  const [ error, setError ] = useState('')

  const [ loading, info ] = useLoader(userId, setError)
  const [ availableInfo, setUnfollow ] = useUnfollowHandler(info)
  
  return(
    <div>
      <Navbar/>
      <Ctx.BrightThemeContext.Consumer> 
        {theme =>
          <div className={`${theme? 'Bright' : 'Dark'}Page Page`}> 
            { loading && <Spinner/> }
            { error.length > 0 && <h3>{error}</h3> } 
            <Ctx.UnfollowUserContext.Provider value={{setUnfollow: setUnfollow, publicProfile: availableInfo.public }}>
              <Ctx.UserDataContext.Provider value={availableInfo}>
                {availableInfo._id && !loading &&
                  <User/>
                }
              </Ctx.UserDataContext.Provider>
            </Ctx.UnfollowUserContext.Provider>
          </div>
        }
      </Ctx.BrightThemeContext.Consumer>
    </div>
  )
})