import React from 'react'
import UserPersonalData from '../user/PersonalUserData'
import PublicUserData from '../user/PublicUserData'
import JoinedAt from '../user/JoinedAt'
import AnotherUserBtns from '../user/AnotherUserBtns'
import LastSeen from '../user/LastSeen'
import userIdComparer from '../../../utils/userIdComparer'


export default ({ userData }) => (
  <>
    <div id="Main-flex">
      <div>
        <h4 id="username">{'@' + userData.username}</h4>
        {userData._id && !userIdComparer(userData._id) &&
          <LastSeen lastSeen={userData.lastSeen}/>
        }
        {userData.about &&
          <h4 id="contrast">{userData.about}</h4>
        }
        {userData.company &&
          <h4 id="contrast">Works at {' ' + userData.company}</h4>
        }
        {userData.website &&
          <h4 id="contrast">{userData.website}</h4>
        }
        {userData.relationshipStatus &&
          <h4 id="contrast">{userData.relationshipStatus}</h4>
        } 
        {userData.createdAt !== null &&
          <JoinedAt date={userData.createdAt}/>
        }
        { userData._id && <PublicUserData userData={userData}/> }
      </div>    
      {userIdComparer(userData._id) &&
        <UserPersonalData 
          reqsFrom={userData.requestsFrom}
          reqsTo={userData.requestsTo}
          convs={userData.conversations}
          blockedUsers={userData.blockedUsers}
        />
      }
    </div>
    {userData._id && userData._id !== window.localStorage.getItem('userId') &&
      <AnotherUserBtns userId={userData._id}/>
    }
  </>
)