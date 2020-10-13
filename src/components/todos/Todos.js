import React, { useState } from 'react'
import Todo from './Todo'
import TodoStats from './TodoStats'
import FilterTodos from './FilterTodo'
import useTodoFilter from '../../hooks/useTodoFilter'


export default ({activeTodos, fullfilledTodos, todos, theme}) => {
  const [showOnlyCompletedTodos, setShowOnlyCompletedTodos] = useState(false)
  const [showOnlyActiveTodos, setShowOnlyActiveTodos] = useState(false)
  const [hashtag, setHashtag] = useState('')
  const [taskIncludes, setTaskIncludes] = useState('')
  const [timeToComplete, setTimeToComplete] = useState(0)
  const [createdAt, setCreatedAt] = useState('')

  const [todosToExpose] = useTodoFilter(
    todos, 
    showOnlyCompletedTodos, 
    showOnlyActiveTodos, 
    hashtag,
    taskIncludes,
    timeToComplete,
    createdAt
  ) 

  return(
    <>
      <TodoStats activeTodos={activeTodos} fullfilledTodos={fullfilledTodos} theme={theme}/> 
      <FilterTodos 
        theme={theme} 
        showOnlyCompletedOnChange={e => setShowOnlyCompletedTodos(e.target.checked)}
        showOnlyActiveOnChange={e => setShowOnlyActiveTodos(e.target.checked)}
        tagsOnChange={e => setHashtag(e.target.value)}
        taskOnChange={e => {
          console.log('event on task fired')
          setTaskIncludes(e.target.value)}}
        timeToCompleteOnChange={e => setTimeToComplete(e.target.value)}
        createdAtOnChange={e => setCreatedAt(e.target.value)}
      />
      <div id="Todos">
        {
          todosToExpose.map((todo, index) => 
            <Todo 
              todoData={{
                ...todo,
                createdAt: new Date(todo.createdAt)
              }} 
              key={index+'todo'} 
              theme={theme}
            />
          )
        }
      </div>
    </>
  )
}