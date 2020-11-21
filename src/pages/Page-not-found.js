import React from 'react'
import { BrightThemeContext } from '../utils/contexts'
import Navbar from '../components/navbar/index'
import Footer from '../components/Footer/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'


export default _ => {
  document.title = 'Page Not Found'
  return (
    <>
      <Navbar/>      
      <BrightThemeContext.Consumer>
        {theme =>
          <div id="MainBody" className={`${theme? 'Bright' : 'Dark'}Page Page`}>
            <h1>
              Page not found
            </h1>
            <FontAwesomeIcon 
              icon={faExclamationTriangle}
              id="BigIcon"
              className={`${theme ? 'Bright' : 'Dark'}Icon`}
            />
            <a 
              href="/"
              id="linkToHome"
            >Go to main page</a>
          </div>
        }
      </BrightThemeContext.Consumer>
      <Footer/>
    </>
  )
}