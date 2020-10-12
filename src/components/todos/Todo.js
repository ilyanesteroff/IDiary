import React from 'react'

export default ({todoData}) => (
  <div>
    <h2>{todoData.task}</h2>
    <h3>completed: {' ' + todoData.completed}</h3>
  </div>
)