import React from 'react'
import { 
  BrightThemeContext, 
  toggleThemeContext 
} from '../../../utils/contexts'
import './theme-toggler.css'


export const ThemeToggler = _ => {
  return(
    <toggleThemeContext.Consumer>
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
    </toggleThemeContext.Consumer>
  )
}