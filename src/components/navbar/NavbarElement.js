import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default ({ link, icon, content, sideMenu }) => {
  return(
    <li id={sideMenu ? 'SideMenuNavbarOption' : 'navbarOption' }>
      <Link to={link}>
        <div>
          <FontAwesomeIcon icon={icon}/>
          <p id={link.split('/')[1] === window.location.pathname.split('/')[1]? 'ActiveNavbarOption' : ''}>
            {content}
          </p>
        </div>
      </Link>
    </li>
  )
}