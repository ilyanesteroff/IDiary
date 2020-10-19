import React, {memo} from 'react'
import { BrightThemeContext } from '../utils/contexts'
import Navbar from '../components/navbar/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

export default memo(_ => {
  document.title = 'Page Not Found'
  return (
    <BrightThemeContext.Consumer>
      {theme =>
        <>
          <Navbar/>
          <div id="MainBody" className={`formPage ${theme? 'Bright' : 'Dark'}Page`}>
            <h2 
              id="headline"
            >
              Page not found
            </h2>
            <FontAwesomeIcon 
              icon={faExclamationTriangle}
              id="Icon"
              className={`${theme ? 'Bright' : 'Dark'}Icon`}
            />
            <a 
              href="/"
              id="linkToHome"
            >Go to main page</a>
          </div>
        </>
      }
    </BrightThemeContext.Consumer>
  )
})