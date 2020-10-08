import React from 'react'
import Navbar from '../components/navbar/index'
import LoginForm from '../forms/LoginForm'
import { BrightThemeContext } from '../utils/contexts'


export default _ => {  
  document.title = 'TooDooDoo - Login'

  return(    
    <>
      <Navbar/>
      <div className="formPage">
        <BrightThemeContext.Consumer>
          {theme => 
            <>
              <h2 id="headline" className={`${theme ? 'Bright' : 'Dark'}Headline`}>
                Login into your existing account
              </h2>
              <LoginForm theme={theme}/>
            </>
          }
        </BrightThemeContext.Consumer>
      </div>
    </>
  )
}