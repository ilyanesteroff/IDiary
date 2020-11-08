import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserShield, faUserTag, faUserEdit, faUsersCog, faUserSlash } from '@fortawesome/free-solid-svg-icons'
import { SetEditUserContext } from '../../../utils/contexts'


export default _ => (
  <SetEditUserContext.Consumer>
    {({ set }) => 
      <>
        <li onClick={_ => set('Profile')}>
          Profile
          <FontAwesomeIcon id="editOption-Icon" icon={faUserEdit}/>
        </li>
        <li onClick={_ => set('Info')}>
          Info
          <FontAwesomeIcon id="editOption-Icon" icon={faUserTag}/>
        </li>
        <li onClick={_ => set('Privacy')}>
          Privacy settings
          <FontAwesomeIcon id="editOption-Icon" icon={faUsersCog}/>
        </li>
        <li onClick={_ => set('Password')}>
          Change Password
          <FontAwesomeIcon id="editOption-Icon" icon={faUserShield}/>
        </li>
        <li id="deleteAccountOption" onClick={_ => set('AreYouSure')}>
          Delete Account
          <FontAwesomeIcon id="editOption-Icon" icon={faUserSlash}/>
        </li>
      </>
    }
  </SetEditUserContext.Consumer>
)