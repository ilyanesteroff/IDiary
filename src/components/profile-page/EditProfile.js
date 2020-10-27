import React, { forwardRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faUserShield, faUserTag, faUserEdit, faUsersCog } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { setEditUserContext } from '../../utils/contexts'


export default forwardRef((props, refs) => {
  const [ hidden, setHidden ] = useState(false)

  return(
    <div id="EditProfile">
      <h2>
        Edit profile 
        <div 
          id="HideFilter" 
        >
          <FontAwesomeIcon icon={hidden ? faCog : faTimesCircle } onClick={_ => setHidden(!hidden)}/>
        </div>
      </h2>
      <setEditUserContext.Consumer>
        {({ set }) => 
          <ul id="editOptions" className={hidden? 'hidden': 'visible'}>
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
          </ul>
        }
      </setEditUserContext.Consumer>
    </div>
  )
})