import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrightThemeContext } from '../../utils/contexts'
import { faCompass } from '@fortawesome/free-regular-svg-icons'

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