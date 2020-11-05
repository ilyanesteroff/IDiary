import React from 'react'
import { Link } from 'react-router-dom'


export default ({ user }) => (
  <p id="username">
    <Link to={`/profile/${user._id}`}>
      {user.username}
    </Link>
  </p>
)