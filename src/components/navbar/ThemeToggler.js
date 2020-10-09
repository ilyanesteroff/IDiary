import React from 'react'
import { 
  BrightThemeContext, 
  ToggleThemeContext 
} from '../../utils/contexts'
import Toggler from '../controls/Toogler'

export default _ => {
  return(
    <ToggleThemeContext.Consumer>
      {toggle => 
        <BrightThemeContext.Consumer>
          {theme => 
            <div id="ThemeToggler">
              <Toggler 
                checked={theme}
                onChange={toggle}
              />
            </div>
          }
        </BrightThemeContext.Consumer>
      }
    </ToggleThemeContext.Consumer>
  )
}