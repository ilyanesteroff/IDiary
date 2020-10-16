import React, { useState, useEffect } from 'react'
import TimeString from './TimeString'
import DeleteTodoBtn from './DeleteTodoBtn'
import { TokenContext } from '../../utils/contexts'
import deleteTodo from '../../actionHandlers/DeleteTodo'
import CompletedLabel from './CompletedLabel'
import EditTodoBtn from './EditTodoBtn'
import Task from './Task'
import Tags from './Tags'
import TimeLeft from './TimeToComplete'

//TODO: complete todo component
export default ({todoData, theme, setTodoToDelete, yourTodo}) => {
  const { createdAt, timeToComplete, task, completed, _id, tags } = todoData
  const [ deleting, setDeleting ] = useState(false)
  const [ incompleted, setIncompleted ] = useState(null)

  useEffect(_ => {
    const now = new Date().getTime()
    if(
      timeToComplete !== null && 
      !completed && 
      timeToComplete + createdAt.getTime() < now
    ) setIncompleted(true)
  }, [timeToComplete, completed, createdAt])

  return(
    <div id="Todo" className={`${theme ? 'Bright' : 'Dark'}Todo`}>
      {!yourTodo && <h3 id="creatorName">{todoData.creator.userName}</h3>}
      <TimeString time={createdAt}/>
      <Task task={task}/>
      <CompletedLabel completed={completed}/>
      {incompleted && 
        <p id="red">The time limit for this todo is elapsed</p>
      }
      {timeToComplete !== null && !incompleted &&
        <TimeLeft 
          createdAt={createdAt.getTime()} 
          timeToComplete={timeToComplete}
          setIncompleted={_ => setIncompleted(true)}
        />
      }
      {tags && tags.length !== 0 && <Tags tags={tags}/>}
      {yourTodo &&
        <div id="LowerSection">
          <hr/>
          <p>{todoData.public ? 'Todo is visible for other users' : 'Only you can see this todo'}</p>
          <div id="TodoButtons">
            <EditTodoBtn/>
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
        </div>
      }
    </div>
  )
}