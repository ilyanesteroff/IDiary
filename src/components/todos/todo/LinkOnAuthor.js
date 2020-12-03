import React from 'react'
import { Link } from 'react-router-dom'


export default ({ username }) => (
  <Link to={`/user/${username}`} >
    <h3 id="creatorName">
      {username}
    </h3>
  </Link>
)