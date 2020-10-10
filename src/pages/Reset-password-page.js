import React, { useEffect, memo } from 'react'
import Navbar from '../components/navbar/index'
import { BrightThemeContext } from '../utils/contexts'
import RequestPasswordResetForm from '../forms/RequestPasswordResetForm'


export default memo(_ => {
  const controller = new AbortController()
  document.title = 'TooDooDoo - Request password reset'

  useEffect(_ => controller.abort())

  return (
    <>
      <Navbar/>
      <BrightThemeContext.Consumer>
        {theme =>
          <div className="formPage">
            <h2 
              id="headline"
              className={`${theme ? 'Bright' : 'Dark'}Headline`}
            >
              Request password reset
            </h2>
            <RequestPasswordResetForm theme={theme} signal={controller.signal}/>
          </div>
        }
      </BrightThemeContext.Consumer>
    </>
  )
})
