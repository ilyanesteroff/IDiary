import React from 'react'
import { BrightThemeContext } from '../../utils/contexts'
import BrightUserPage from '../../assets/computers/BrightPageUI.png'
import DarkUserPage from '../../assets/computers/DarkPageUI.png'


export default _ => {
  return(
    <BrightThemeContext.Consumer>
      {theme => 
        <div className={`${theme? 'Bright' : 'Dark'}Page Page`}>
          <h1 id="Headline">
            The TodoList app and even more
          </h1>
          <p id="description">
            The advanced and minimalistic web-based app for todos and communication
          </p>
          <p id="description">
            Just log in or sign up & <span id="activeOption">go</span>
          </p>
          <img 
            id="first-image" 
            className="image"
            src={theme ? BrightUserPage : DarkUserPage}
            alt="User's page"
          />
        </div>
      }
    </BrightThemeContext.Consumer>
  )
}