import React from 'react'


export default ({ option, clickHandler }) => (
  <div onClick={clickHandler}>
    <p>{option}</p>
  </div>
)