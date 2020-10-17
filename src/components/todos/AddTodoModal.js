import React from 'react'
import CreateTodoPortal from '../portals/index'
import CreateTodoForm from './CreateTodoForm'

export default _ => {
  return (
    <CreateTodoPortal parent="create-todo">
      <CreateTodoForm/>
    </CreateTodoPortal>
  )
}