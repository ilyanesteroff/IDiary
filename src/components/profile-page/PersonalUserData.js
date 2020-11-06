import React from 'react'
import { Link } from 'react-router-dom'
import formatNum from '../../utils/formatNum'
import { ViewUserStatsContext } from '../../utils/contexts'


export default ({ reqsTo, reqsFrom, convs, blockedUsers }) => (
  <div>
    <ViewUserStatsContext.Consumer>
      {({set}) =>
        <>
          <div id="flex">
            <h4 id="userSection-flexItem" onClick={_ => set('Incoming Requests')}>
              Incoming Requests: 
              <span id="count">{formatNum(reqsFrom)}</span>
            </h4>
            <h4 id="userSection-flexItem" onClick={_ => set('Sent Requests')}>
              Outcoming Requests: 
              <span id="count">{formatNum(reqsTo)}</span>
            </h4>
          </div>
          <h4 onClick={_ => set('Blacklist')}>
            Blocked users
            <span id="count">{formatNum(blockedUsers)}</span>
          </h4>
        </>
      }
    </ViewUserStatsContext.Consumer>
    <Link to="/messages">
      <h4>
        Conversations: 
        <span id="count">{formatNum(convs)}</span>
      </h4>
    </Link>
  </div>
)
