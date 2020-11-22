import React from 'react'
import Texts from './Texts'
import Images from './Images'
import { BrightThemeContext } from '../../utils/contexts'


export default _ => (
  <BrightThemeContext.Consumer>
    {theme => 
      <div className={`${theme? 'Bright' : 'Dark'}Page Page`} id="MainPage">
        <Texts/>
        <Images theme={ theme }/>
      </div>
    }
  </BrightThemeContext.Consumer>
)
