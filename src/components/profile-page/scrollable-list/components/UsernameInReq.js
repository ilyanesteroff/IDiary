import React from 'react'


export default ({ user }) => (
  <p id="username">
    <a href={`/user/${user.username}`}>
      {user.username}
    </a>
  </p>
)