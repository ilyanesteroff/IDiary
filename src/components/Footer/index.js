import React from 'react'
import { BrightThemeContext } from '../../utils/contexts'
import Repositories from './Repositories'
import About from './About'
import Developer from './Developer'


export default _ => (
  <BrightThemeContext.Consumer>
    {theme => 
      <footer id="Footer" className={`${theme ? 'Bright' : 'Dark'}Footer`}>
        <div id="FooterItems">   
          <Repositories/>
          <About/>
          <Developer/>
        </div>
      </footer>
    }
  </BrightThemeContext.Consumer>
)