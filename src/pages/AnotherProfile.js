import React, { useState, memo }  from 'react'
import * as Ctx from '../utils/contexts'
import Navbar from '../components/navbar/index'
import useLoader from '../hooks/AnotherProfile/useLoader'
import Spinner from '../components/spiners/BigSpinner'
import User from '../components/profile-page/User'
//import AreYouSure from '../components/controls/AreYouSure'


export default memo(({ userId }) => {
  const [ error, setError ] = useState('')

  const [ loading, info ] = useLoader(userId, setError)
  
  return(
    <div>
      <Navbar/>
      <Ctx.BrightThemeContext.Consumer> 
        {theme =>
          <div className={`${theme? 'Bright' : 'Dark'}Page Page`}> 
            { loading && <Spinner/> }
            { error.length > 0 && <h3>{error}</h3> } 
            <Ctx.UserDataContext.Provider value={info}>
              {info._id && !loading &&
                <User/>
              }
            </Ctx.UserDataContext.Provider>
          </div>
        }
      </Ctx.BrightThemeContext.Consumer>
    </div>
  )
})