import React from 'react'

export default ({activeTodos, fullfilledTodos}) => (
  <div id="TodoStats">
    <h2>Total todos: <span>{' ' + (activeTodos + fullfilledTodos)}</span></h2>
    <h3>Todos to Fullfill: <span>{' ' + activeTodos}</span></h3>
    <h3>Fullfilled Todos: <span>{' ' + fullfilledTodos}</span></h3>
  </div>
)