import React from 'react'
import { Link } from 'react-router-dom'


export default _ => (
  <div id="Main-texts">
    <h1 id="Headline">
      The TodoList app and even more
    </h1>
    <p id="description">
      The advanced and minimalistic  <span id="activeOption">web-based</span> app for todos and communication
    </p>
    <p id="description">
      Just <Link to="/login">log in</Link> or <Link to="/create-user">sign up</Link> & <span id="activeOption">go</span>
    </p>
    <h1 id="Headline">IDiary makes it possible to:</h1>
  </div>
)