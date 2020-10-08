import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass } from '@fortawesome/free-solid-svg-icons'
import { BrightThemeContext } from '../../utils/contexts'

export default props => {
  
  return(
    <BrightThemeContext.Consumer> 
      { value => 
        <div className={value? "darkLogo" : "brightLogo"} id="logo">
          <FontAwesomeIcon 
            icon={faCompass} 
            onClick={props.clickHandler}
          />
        </div> 
      }
    </BrightThemeContext.Consumer>
  )
}