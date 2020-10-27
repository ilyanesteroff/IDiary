import React from 'react'
import RandomIcon from './RandomIcon'
import EditProfile from './EditProfile'
import * as Ctx from '../../utils/contexts'


export default _ => {
  return (
    <div>
      <Ctx.UserDataContext.Consumer>
        {userData =>
          <h1>
            {`${userData.firstname} ${userData.lastname}`}
            <RandomIcon/>
            <EditProfile/>
          </h1>
        }
      </Ctx.UserDataContext.Consumer>
    </div>
  )
}