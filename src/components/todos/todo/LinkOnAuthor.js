import React from 'react'
import { Link } from 'react-router-dom'


export default ({ userId, username }) => (
  <Link to={`/user/${userId}`} >
    <h3 id="creatorName">
      {username}
    </h3>
  </Link>
)