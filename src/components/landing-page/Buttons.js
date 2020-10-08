import React from 'react'

export default ({theme}) => (
  <div id="buttons" className={theme ? 'BrightButtons' : 'DarkButtons'}>
    <a href='/login'>
      Login
    </a>
    <a href='/create-user'>
      Signup
    </a>
  </div>
)