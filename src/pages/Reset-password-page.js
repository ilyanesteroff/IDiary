import React, { memo } from 'react'
import Navbar from '../components/navbar/index'
import { BrightThemeContext } from '../utils/contexts'
import RequestPasswordResetForm from '../forms/RequestPasswordResetForm'


export default memo(_ => {
  document.title = 'IDiary - Request password reset'

  return (
    <>
      <Navbar/>
      <BrightThemeContext.Consumer>
        {theme =>
          <div className={`formPage ${theme? 'Bright' : 'Dark'}Page Page`}>
            <h1>
              Request password reset
            </h1>
            <RequestPasswordResetForm theme={theme}/>
          </div>
        }
      </BrightThemeContext.Consumer>
    </>
  )
})
