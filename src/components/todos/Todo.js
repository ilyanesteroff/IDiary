import React, { useState, useEffect } from 'react'
import { YourTodoContext } from '../../utils/contexts'
import TimeString from './TimeString'
import TodoLowerSection from './TodoLowerSection'
import CompletedLabel from './CompletedLabel'
import Task from './Task'
import Tags from './Tags'
import TimeLeft from './TimeToComplete'

//TODO: complete todo component
export default ({todoData}) => {
  const { createdAt, timeToComplete, task, completed, _id, tags } = todoData
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
    <YourTodoContext.Consumer>
      {yourTodo =>
        <div id="Todo">
          {!yourTodo && <h3 id="creatorName">{todoData.creator.userName}</h3>}
          <TimeString time={createdAt}/>
          <Task task={task}/>
          <CompletedLabel completed={completed}/>
          {incompleted && 
            <p id="red">The time limit for this todo is elapsed</p>
          }
          {timeToComplete !== null && !incompleted && !completed &&
            <TimeLeft 
              createdAt={createdAt.getTime()} 
              timeToComplete={timeToComplete}
              setIncompleted={_ => setIncompleted(true)}
            />
          }
          {tags && tags.length !== 0 && <Tags tags={tags}/>}
          {yourTodo &&
            <TodoLowerSection id={_id} tPublic={todoData.public}/>
          }
        </div>
      }
    </YourTodoContext.Consumer>
  )
}