import React from 'react'
import * as Ctx from '../../../utils/contexts'
import CloseModalBtn from '../../portals/CloseModalBtn'
import Header from './FormHeader'
import EditUserInfoForm from '../../../forms/EditUserInfo'
import EditUserSettingsForm from '../../../forms/EditUserSettingsForm'
import EditUserProfileForm from '../../../forms/EditUserProfile'
import EditPasswordForm from '../../../forms/ChangePasswordForm'
import DeleteUserForm from '../../../forms/DeleteUserForm'
import AvatarImageForm from '../../../forms/AvatarImageForm'


export default ({theme}) => {
  return(
    <Ctx.SetEditUserContext.Consumer>
      {({value, set}) => 
        <div id="createTodo" className={`${theme? 'Bright' : 'Dark'}Modal`}>
          <Header value={value}/>
          <CloseModalBtn 
            clickHandler={_ => {
              set('')
            }}  
            className="NoStats"
          />
          {value === 'Info' && <EditUserInfoForm unsetEditing={_ => set('')}/>}
          {value === 'Privacy' && <EditUserSettingsForm unsetEditing={_ => set('')}/>}
          {value === 'Profile' && <EditUserProfileForm unsetEditing={_ => set('')}/>}
          {value === 'Password' && <EditPasswordForm unsetEditing={_ => set('')}/>}
          {value === 'Delete' && <DeleteUserForm/>}
          {value === 'Avatar' && <AvatarImageForm/>}
        </div>
      }
    </Ctx.SetEditUserContext.Consumer>
  )
}