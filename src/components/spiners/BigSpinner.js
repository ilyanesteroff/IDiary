import React from 'react'
import { BrightThemeContext } from '../../utils/contexts'

export default _ => (
  <BrightThemeContext.Consumer>
    {theme => 
      <div className="spinner">
        <div 
          id="double-bounce1"
          className={`${theme? 'BrightSpinner' : 'DarkSpinner'}`}
        ></div>
        <div 
          id="double-bounce2"
          className={`${theme? 'BrightSpinner' : 'DarkSpinner'}`}
        ></div>
      </div>
    }
  </BrightThemeContext.Consumer>
)