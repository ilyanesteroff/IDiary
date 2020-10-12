import React from 'react'

export default ({activeTodos, fullfilledTodos, theme}) => (
  <div id="TodoStats" className={`${theme? 'Bright' : 'Dark'}TodoStats`}>
    <h2>Total todos: <span>{' ' + (activeTodos + fullfilledTodos)}</span></h2>
    <h4>Todos to Fullfill: <span id="ActiveTodos">{' ' + activeTodos}</span></h4>
    <h4>Fullfilled Todos: <span id="FullfilledTodos">{' ' + fullfilledTodos}</span></h4>
  </div>
)