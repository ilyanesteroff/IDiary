import React from 'react'
import * as Ctx from '../../utils/contexts'
import CloseModalBtn from '../portals/CloseModalBtn'
import EditUserInfoForm from '../../forms/EditUserInfo'
import EditUserSettingsForm from '../../forms/EditUserSettingsForm'
import EditUserProfileForm from '../../forms/EditUserProfile'
import EditPasswordForm from '../../forms/ChangePasswordForm'


export default _ => {
  return(
    <Ctx.setEditUserContext.Consumer>
      {({value, set}) => 
        <Ctx.BrightThemeContext.Consumer>
          {theme => 
            <div id="createTodo" className={`${theme? 'Bright' : 'Dark'}Modal`}>
              <h2>{`Edit User ${value}`}</h2>
              <CloseModalBtn 
                clickHandler={_ => {
                  set('')
                }}  
                className="NoStats"
              />
              {value === 'Info' && <EditUserInfoForm/>}
              {value === 'Privacy' && <EditUserSettingsForm/>}
              {value === 'Profile' && <EditUserProfileForm/>}
              {value === 'Password' && <EditPasswordForm/>}
            </div>
          }
        </Ctx.BrightThemeContext.Consumer>
      }
    </Ctx.setEditUserContext.Consumer>
  )
}