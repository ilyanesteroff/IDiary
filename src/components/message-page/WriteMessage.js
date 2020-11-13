import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default _ => {
  
  return(
    <div>
      <textarea></textarea>
      <FontAwesomeIcon
        icon={faPaperPlane}
      />
    </div>
  )
}