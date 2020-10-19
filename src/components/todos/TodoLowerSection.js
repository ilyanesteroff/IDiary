import React from 'react'
import EditTodoBtn from './EditTodoBtn'
import DeleteTodoBtn from './DeleteTodoBtn'

export default ({todoData}) => (
  <div id="LowerSection">
    <hr/>
    <p>{todoData.public ? 'Todo is public' : 'Todo is private'}</p>
    <div id="TodoButtons">
      <EditTodoBtn todoData={todoData}/>
      <DeleteTodoBtn id={todoData._id}/>
    </div>
  </div>
)