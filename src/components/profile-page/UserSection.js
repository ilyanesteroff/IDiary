import React from 'react'
import UserPersonalData from './PersonalUserData'
import PublicUserData from './PublicUserData'
import JoinedAt from './JoinedAt'
import AnotherUserBtns from './AnotherUserBtns'
import userIdComparer from '../../utils/userIdComparer'


export default ({ userData }) => (
  <>
    <div id="Main-flex">
      <div>
        <h4 id="username">{'@' + userData.username}</h4>
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