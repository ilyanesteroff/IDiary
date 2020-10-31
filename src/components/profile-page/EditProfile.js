import React, { useState } from 'react'
import HideEditOptions from './HideEditOptions'
import EditOptions from './EditOptions'


export default _ => {
  const [ hidden, setHidden ] = useState(false)

  return(
    <div id="EditProfile">
      <h2>
        Edit profile 
        <HideEditOptions clickHandler={_ => setHidden(!hidden)} hidden={hidden}/>
      </h2>
      <ul id="editOptions" className={hidden? 'hidden': 'visible'}>
        <EditOptions/>
      </ul>
    </div>
  )
}