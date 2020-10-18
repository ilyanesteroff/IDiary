import React from 'react'
import { TodoStatsContext } from '../../utils/contexts'

export default _ => (
  <div id="TodoStats">
    <TodoStatsContext.Consumer>
      {stats =>
        <>
          <h2>Todo Stats</h2>
          <h4>Overall: <span>{' ' + (stats.active + stats.completed)}</span></h4>
          <h4>To Fullfill: <span id="ActiveTodos">{' ' + stats.active}</span></h4>
          <h4>Completed: <span id="FullfilledTodos">{' ' + stats.completed}</span></h4>
        </>
      }
    </TodoStatsContext.Consumer>
  </div>
)