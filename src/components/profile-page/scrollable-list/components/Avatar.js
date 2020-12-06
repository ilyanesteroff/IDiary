import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useRandomUserIcon from '../../../../hooks/useRandomUserIcon'
import link from '../../../../utils/AWS'


export default ({ url }) => {
  const [ icon ] = useRandomUserIcon()
  
  return(
    <div id="AvatarFromReq">
      {
        url
          ? <img 
              src={ link + url }
              alt=""
            />
          : <FontAwesomeIcon
              icon={ icon }
            />
      }
    </div>
  )
}