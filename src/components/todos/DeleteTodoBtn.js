import React, { useState, memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { SetTodoToDeleteContext } from '../../utils/contexts'
import deleteTodo from '../../actionHandlers/DeleteTodo'

export default memo(({id}) => {
  const [deleting, setDeleting] = useState(false)

  return (
    <SetTodoToDeleteContext.Consumer>
      {setTodoToDelete =>
        <FontAwesomeIcon 
          id={deleting? 'todoDeletingSpinner' : 'red'}
          icon={deleting? faSpinner : faTrashAlt}
          onClick={async e => {
            e.preventDefault()
            setDeleting(true)
            await deleteTodo(id, _ => setTodoToDelete(id))
            setDeleting(false)
          }}
        />
      }
    </SetTodoToDeleteContext.Consumer>
  )
})