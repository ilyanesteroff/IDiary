import React from 'react'


export default ({ user }) => (
  <p id="username">
    <a href={`/user/${user._id}`}>
      {user.username}
    </a>
  </p>
)