import React from 'react'
import { ViewUserStatsContext, UserIdContext } from '../../utils/contexts'
import ScrollableList from './ScrollableList'


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
          <ScrollableList userId={ userId } category={ value }/>
        }
      </div>
    }
  </ViewUserStatsContext.Consumer>
)