import React from 'react'
import { Link } from 'react-router-dom'
import formatNum from '../../utils/formatNum'
import { ViewUserStatsContext } from '../../utils/contexts'


export default ({ userData }) => (
  <>
    <ViewUserStatsContext.Consumer>
      {({set}) =>
        <div id="flex">
          <h4 id="userSection-flexItem" onClick={_ => set('Followers')}>
            Followers: 
            <span id="count">
              {formatNum(userData.followers)}
            </span>
          </h4>
          <h4 id="userSection-flexItem" onClick={_ => set('Following')}>
            Following: 
            <span id="count">
              {formatNum(userData.following)}
            </span>
          </h4>
        </div>
      }
    </ViewUserStatsContext.Consumer>
    <Link to="/todos">
      <div id="flex">
        <h4 id="userSection-flexItem">
          Active Todos: 
          <span id="count">
            {formatNum(userData.ActiveTodos)}
          </span>
        </h4>
        <h4 id="userSection-flexItem">
          Completed Todos: 
          <span id="count">
            {formatNum(userData.FullfilledTodos)}
          </span>
        </h4>
      </div>
    </Link>
  </>
)