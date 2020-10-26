import React from 'react'
import { Link } from 'react-router-dom'

export default _ => (
  <div id="buttons">
    <Link to='/login'>
      Login
    </Link>
    <Link to='/create-user'>
      Signup
    </Link>
  </div>
)