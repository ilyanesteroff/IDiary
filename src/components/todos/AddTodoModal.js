import React from 'react'
import CreateTodoPortal from '../portals/index'
import CreateOrUpdateModal from './CreateOrUpdateModal'

export default _ => {
  return (
    <CreateTodoPortal parent="create-todo">
      <CreateOrUpdateModal/>
    </CreateTodoPortal>
  )
} 