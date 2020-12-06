import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SetEditUserContext } from '../../../utils/contexts'
import userIdComparer from '../../../utils/userIdComparer'
import useRandomUserIcon from '../../../hooks/useRandomUserIcon'


export default ({ userId }) => {
  const [ icon ] = useRandomUserIcon()
  
  return(
    <SetEditUserContext.Consumer>
      {({ set }) => 
        <FontAwesomeIcon 
          id="h1-Icon" 
          icon={ icon }
          onClick={_ => {
            if(userIdComparer(userId))
              set('Avatar')
          }}
        /> 
      }
    </SetEditUserContext.Consumer>
  )
}
