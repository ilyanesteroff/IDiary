import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import TimeString from './TimeString'

export default ({todoData, theme}) => {
  const now = new Date().getHours()
  const { createdAt, timeToComplete, task, completed } = todoData
  return(
    <div id="Todo" className={`${theme ? 'Bright' : 'Dark'}Todo`}>
      <h2>{task}</h2>
      <h3>
        {completed ? 'Done ': 'Need to complete '}
        {
          completed 
            ? <span id="DoneTodo">
                <FontAwesomeIcon icon={faCheck}/>
              </span>
            : <span id="NeedToCompleteTodo">
                <FontAwesomeIcon icon={faClock}/>
              </span>
        }  
      </h3>
      <TimeString time={createdAt}/>
      {timeToComplete !== null && timeToComplete + createdAt.getTime() < now && 
        <p id="red">The time limit for this todo is elapsed</p>
      }
    </div>
  )
}