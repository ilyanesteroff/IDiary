import React from 'react'
import UserPersonalData from './PersonalUserData'
import PublicUserData from './PublicUserData'
import JoinedAt from './JoinedAt'


export default ({ userData }) => (
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
      <JoinedAt date={userData.createdAt}/>
      {userData.followers !== undefined &&
        <PublicUserData userData={userData}/>
      }  
    </div>
    {userData.requestsFrom !== undefined &&
      <UserPersonalData 
        reqsFrom={userData.requestsFrom}
        reqsTo={userData.requestsTo}
        convs={userData.conversations}
      />
    }
  </div>
)