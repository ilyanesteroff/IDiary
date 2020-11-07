import React, { useState, memo }  from 'react'
import * as Ctx from '../utils/contexts'
import Navbar from '../components/navbar/index'
import useLoader from '../hooks/AnotherProfile/useLoader'
import useUnfollowHandler from '../hooks/AnotherProfile/useUnfollowHandler'
import Spinner from '../components/spiners/BigSpinner'
import User from '../components/profile-page/User'
import AreYouSure from '../components/controls/AreYouSure'
import blockHandler from '../actionHandlers/BlockUser'


export default memo(({ userId }) => {
  const [ error, setError ] = useState('')
  const [ blocking, setBlocking ] = useState(false)

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
                <Ctx.SetBlockingUserContext.Provider value={val => setBlocking(val)}>
                  {availableInfo._id && !loading &&
                    <User/>
                  }
                  {blocking &&
                    <AreYouSure 
                      theme={theme} 
                      yes={_ => blockHandler(availableInfo._id)} 
                      no={_ => setBlocking(false)}
                    >
                      <h2>Are you sure?</h2>
                      <p>  
                        You Want to block<span>{` ${availableInfo.username}`}</span>
                      </p>
                    </AreYouSure>
                  }
                </Ctx.SetBlockingUserContext.Provider>
              </Ctx.UserDataContext.Provider>
            </Ctx.UnfollowUserContext.Provider>
          </div>
        }
      </Ctx.BrightThemeContext.Consumer>
    </div>
  )
})