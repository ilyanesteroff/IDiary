import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass } from '@fortawesome/free-regular-svg-icons'


export default _ => (
  <div id="Main-texts">
    <h1 id="Headline">
      IDiary
      <FontAwesomeIcon icon={ faCompass } className="MainIcon"/>
    </h1>
    <h1 id="Headline">
      The TodoList app and even more
    </h1>
    <p id="description">
      The advanced and minimalistic  <span id="activeOption">web-based</span> app for todos and communication
    </p>
    <p id="description">
      Just <Link to="/login">log in</Link> in or <Link to="/create-user">sign up</Link> & <span id="activeOption">go</span>
    </p>
    <h1 id="Headline">In IDiary you can:</h1>
  </div>
)