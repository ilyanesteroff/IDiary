import React, { useState } from 'react'
import TimeString from './TimeString'
import DeleteTodoBtn from './DeleteTodoBtn'
import { TokenContext } from '../../utils/contexts'
import deleteTodo from '../../actionHandlers/DeleteTodo'
import CompletedLabel from './CompletedLabel'


export default ({todoData, theme, setTodoToDelete}) => {
  const now = new Date().getTime()
  const { createdAt, timeToComplete, task, completed, _id } = todoData
  const [deleting, setDeleting] = useState(false)

  return(
    <div id="Todo" className={`${theme ? 'Bright' : 'Dark'}${deleting ? 'Deleting' : ''}Todo`}>
      <h2>{task}</h2>
      <CompletedLabel completed={completed}/>
      <TimeString time={createdAt}/>
      {timeToComplete !== null && !completed && timeToComplete + createdAt.getTime() < now && 
        <p id="red">The time limit for this todo is elapsed</p>
      }
      <TokenContext.Consumer>
        {token => 
          <DeleteTodoBtn 
            clickHandler={async e => {
              e.preventDefault()
              setDeleting(true)
              await deleteTodo(_id, token, _ => setTodoToDelete(_id))
              setDeleting(false)
            }}
            deleting={deleting}
          />
        }
      </TokenContext.Consumer>
    </div>
  )
}