import React from 'react'
import { ViewUserStatsContext, UserIdContext } from '../../utils/contexts'


export default ({ userId, username }) => (
  <ViewUserStatsContext.Consumer>
    {({value}) =>
      <div id="UserFriendBar">
        <UserIdContext.Consumer>
          {_userId =>
            <h2>
              {value === '' 
                ? _userId === userId 
                  ? 'Your stats' 
                  : `${username} stats`
                :  _userId === userId 
                  ? `Your ${value}` 
                  : `${username} ${value}`
              }
            </h2>
          }
        </UserIdContext.Consumer>
        {value !== '' &&
          <div id="scrollableList">
            <ul>
              { 'a a a a a a a a a a a a a a a a a a a a a a a a'.split(' ').map((s, i) => <li key={i+'k'} style={{margin: '3vh auto'}}>{s * 10}</li>) }
            </ul>
          </div>
        }
      </div>
    }
  </ViewUserStatsContext.Consumer>
)