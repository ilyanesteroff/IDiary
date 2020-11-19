import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { BrightThemeContext } from '../../utils/contexts'


export default _ => (
  <BrightThemeContext.Consumer>
    {theme => 
      <footer id="Footer" className={`${theme ? 'Bright' : 'Dark'}Footer`}>
        <ul id="FooterItems">
          <li id="FormItems-li">
            <h3>Repositories</h3>
            <ul id="FooterItem">
              <li>
                <a href="https://github.com/IlyaNesterow/todoListAPI">Backend</a>
              </li>
              <li>
                <a href="https://github.com/IlyaNesterow/TodoListFrontend">Frontend</a>
              </li>
            </ul>
          </li>
          <li id="FormItems-li">
            <h3>About</h3>
            <ul id="FooterItem">
              <li>
                <Link to="/project">Project</Link>
              </li>
              <li>
                <Link to="/stack">Stack</Link>
              </li>
            </ul>
          </li>
          <li id="FormItems-li">
            <h3>Developer</h3>
            <ul id="FooterItem" className="FooterIcons">
              <li>
                <a href="https://github.com/IlyaNesterow">
                  <FontAwesomeIcon
                    icon={faGithub}
                  />
                </a>
              </li>
              <li>
                <a href="https://stackoverflow.com/users/13448560/ilyanesterow17">
                  <FontAwesomeIcon
                    icon={faStackOverflow}
                  />
                </a>
              </li>
            </ul>
          </li>
        </ul>       
      </footer>
    }
  </BrightThemeContext.Consumer>
)