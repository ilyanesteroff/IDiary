import React from 'react'
import EditTodoBtn from './EditTodoBtn'
import DeleteTodoBtn from './DeleteTodoBtn'

export default ({id, tPublic}) => (
  <div id="LowerSection">
    <hr/>
    <p>{tPublic ? 'Todo is public' : 'Todo is private'}</p>
    <div id="TodoButtons">
      <EditTodoBtn/>
      <DeleteTodoBtn id={id}/>
    </div>
  </div>
)