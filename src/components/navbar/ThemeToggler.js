import React from 'react'
import { 
  BrightThemeContext, 
  ToggleThemeContext 
} from '../../utils/contexts'


export default _ => {
  return(
    <ToggleThemeContext.Consumer>
      {toggle => 
        <BrightThemeContext.Consumer>
          {theme => 
            <div id="ThemeToggler">
              <label className="switch">
                <input 
                  type="checkbox" 
                  checked={theme} 
                  onChange={toggle}
                />
                <span className="slider round"></span>
              </label>
            </div>
          }
        </BrightThemeContext.Consumer>
      }
    </ToggleThemeContext.Consumer>
  )
}