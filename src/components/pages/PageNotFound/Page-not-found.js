import React from 'react'
import {
  BrightThemeContext
} from '../../../utils/contexts'
import Navbar from '../../navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import '../../mainsection/main-unit.css'
import './page-not-found.css'

export default _ => {
  document.title = 'Page Not Found'
  return (
    <BrightThemeContext.Consumer>
      {theme =>
        <>
          <Navbar/>
          <div id="MainBody">
            <h2 
              id="headline"
              className={`${theme ? 'Bright' : 'Dark'}Headline`}
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
}