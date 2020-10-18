import { useState, useEffect } from 'react'
import useTodoFilter from './useTodoFilter'
import useUnsetFilter from './useUnsetTodoFilter'


export default (todos) => {
  //filter params
  const [showOnlyCompletedTodos, setShowOnlyCompletedTodos] = useState(false)
  const [showOnlyActiveTodos, setShowOnlyActiveTodos] = useState(false)
  const [showElapsedTodos, setShowElapsedTodos] = useState(false)
  const [hashtag, setHashtag] = useState('')
  const [taskIncludes, setTaskIncludes] = useState('')
  const [timeToComplete, setTimeToComplete] = useState(0)
  const [createdAt, setCreatedAt] = useState('')
  const [unsetFilter, setUnsetFilter] = useState(false)
  const [_todos, set_todos] = useState(todos)

  useEffect(_ => {
    set_todos(todos)
  }, [todos])

  const [todosToExpose] = useTodoFilter(
    _todos, 
    showOnlyCompletedTodos, 
    showElapsedTodos,
    showOnlyActiveTodos, 
    hashtag,
    taskIncludes,
    timeToComplete,
    createdAt
  ) 

  const [refs] = useUnsetFilter(unsetFilter, _ => {
    setShowOnlyActiveTodos(false)
    setShowOnlyCompletedTodos(false)
    setShowElapsedTodos(false)
    setHashtag('')
    setTaskIncludes('')
    setTimeToComplete(0)
    setCreatedAt('')
    setUnsetFilter(false)
  })

  useEffect(_ => {    
    showOnlyActiveTodos
      ? refs.completedTodos.current.disabled = true
      : refs.completedTodos.current.disabled = false
    showOnlyCompletedTodos
      ? refs.activeTodos.current.disabled = true
      : refs.activeTodos.current.disabled = false
  }, [showOnlyActiveTodos, showOnlyCompletedTodos, refs.completedTodos, refs.activeTodos])

  const changeHandlers = {
    showOnlyCompletedOnChange: e => setShowOnlyCompletedTodos(e.target.checked),
    showOnlyActiveOnChange: e => setShowOnlyActiveTodos(e.target.checked),
    showElapsedOnChange: e => setShowElapsedTodos(e.target.checked),
    tagsOnChange: e => setHashtag(e.target.value),
    taskOnChange: e => setTaskIncludes(e.target.value),
    timeToCompleteOnChange: e => setTimeToComplete(e.target.value),
    createdAtOnChange: e => setCreatedAt(e.target.value),
    onUnsetFilter: e => {
      e.preventDefault()
      setUnsetFilter(true)
    }
  }

  return [todosToExpose, refs, changeHandlers]
}