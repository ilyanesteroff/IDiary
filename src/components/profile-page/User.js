import React, { useState } from 'react'
import RandomIcon from './RandomIcon'
import * as Ctx from '../../utils/contexts'
import UserSection from './UserSection'
import UserFriendBar from './UserFriendsBar'
import EditProfile from './EditProfile'
import UserOptions from './Options'
import userIdComparer from '../../utils/userIdComparer'


export default _ => {
  const [ statsToView, setStatsToView ] = useState('')

  return (
    <Ctx.ViewUserStatsContext.Provider value={{value: statsToView, set: val => setStatsToView(val)}}>
      <Ctx.UserDataContext.Consumer>
        {userData =>
          <>
            <div id="UserSection">
              { userData._id && !userIdComparer(userData._id) &&
                <UserOptions/>
              }
              <h1 id="UserNames">
                {`${userData.firstname} ${userData.lastname}`}
                <RandomIcon/>
              </h1>
              <UserSection userData={ userData }/>   
            </div>
            {userData.followers !== null &&
              <UserFriendBar 
                userId={userData._id} 
                username={userData.username}
              />
            }
            {userIdComparer(userData._id) &&
              <h2>
                <EditProfile/>
              </h2> 
            }
          </>
        }
      </Ctx.UserDataContext.Consumer>
    </Ctx.ViewUserStatsContext.Provider>
  )
}