import React, {memo} from 'react'
import Navbar from '../components/navbar/index'
import LoginForm from '../forms/LoginForm'
import { BrightThemeContext } from '../utils/contexts'


export default memo(_ => {  
  document.title = 'MyDiary - Login'

  return(    
    <>
      <Navbar/>
      <BrightThemeContext.Consumer>
        {theme => 
          <div className={`formPage ${theme? 'Bright' : 'Dark'}Page`}>
            <>
              <h2 id="headline">
                Login into your existing account
              </h2>
              <LoginForm theme={theme}/>
            </>
          </div>
        }
      </BrightThemeContext.Consumer>
    </>
  )
})