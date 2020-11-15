import React from 'react'
import * as Ctx from '../../utils/contexts'
import useScrollableList from '../../hooks/useScrollableList'
import ConversationShortcut from './ConversationShortcut'
import Spinner from '../spiners/BigSpinner'


export default ({ hasNextPage, setPage, setHasNextPage, page }) => {
  useScrollableList(page, setHasNextPage, hasNextPage, setPage)

  return(
    <div id="scrollableList">
      <Ctx.ConversationsContext.Consumer>
        {convs => 
          <>
            {
              convs.total === 0 && <h4>You have no conversations yet</h4>
            }
            {
              convs.total > 0 && convs.convs.map((c, i) => <ConversationShortcut info={c} key={'shortcut' + i}/>)
            }
          </>
        }
      </Ctx.ConversationsContext.Consumer>
      <Ctx.LoadingContext.Consumer>
        {loading => 
          loading && <Spinner/>
        }
      </Ctx.LoadingContext.Consumer>
    </div>
  )
}