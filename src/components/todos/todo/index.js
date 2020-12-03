import React, { useState } from 'react'
import { YourTodoContext } from '../../../utils/contexts'
import TimeString from './TimeString'
import TodoLowerSection from './TodoLowerSection'
import CompletedLabel from './CompletedLabel'
import Task from './Task'
import Tags from './Tags'
import Image from './Image'
import TimeLeft from './TimeToComplete'
import LinkOnAuthor from './LinkOnAuthor'


export default ({todoData}) => {
  const { createdAt, timeToComplete, task, completed, tags } = todoData
  const [ incompleted, setIncompleted ] = useState(
    timeToComplete !== null && !completed && timeToComplete + createdAt.getTime() < new Date().getTime()
  )

  return(
    <YourTodoContext.Consumer>
      {yourTodo =>
        <div id="Todo">
          {!yourTodo && 
            <LinkOnAuthor 
              userId={todoData.creator._id}
              username={todoData.creator.username}
            />
          }
          <TimeString time={createdAt}/>
          <Task task={task}/>
          <Image imgSrc={todoData.imageUrl}/>
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
            <TodoLowerSection todoData={todoData}/>
          }
        </div>
      }
    </YourTodoContext.Consumer>
  )
}