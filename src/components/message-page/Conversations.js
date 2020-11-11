import React from 'react'
import ConversationList from './ConversationList'
import * as Ctx from '../../utils/contexts'


export default () => {
  return(
    <div id="EditProfile">
      <h2>Your conversations</h2>
      <Ctx.HasNextPageContext.Consumer>
        {({ has, set }) => 
          <Ctx.PageContext.Consumer>
            {({ page, setPage }) => 
              <ConversationList
                page={page}
                setPage={setPage}
                hasNextPage={has}
                setHasNextPage={set}
              />
            }
          </Ctx.PageContext.Consumer>
        }
      </Ctx.HasNextPageContext.Consumer>
    </div>
  )
}