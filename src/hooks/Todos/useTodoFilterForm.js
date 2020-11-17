import { useState, useEffect } from 'react'
import useFilter from '../useFilter'
import useUnsetFilter from './useUnsetTodoFilter'


export default todos => {
  const [ showOnlyCompletedTodos, setShowOnlyCompletedTodos ] = useState(false)
  const [ showOnlyActiveTodos, setShowOnlyActiveTodos ] = useState(false)
  const [ showElapsedTodos, setShowElapsedTodos ] = useState(false)
  const [ hashtag, setHashtag ] = useState('')
  const [ taskIncludes, setTaskIncludes ] = useState('')
  const [ timeToComplete, setTimeToComplete ] = useState(0)
  const [ createdAt, setCreatedAt ] = useState('')
  const [ unsetFilter, setUnsetFilter ] = useState(false)
  const [ _todos, set_todos ] = useState(todos)

  useEffect(_ => {
    set_todos(todos)
  }, [ todos ])

  const [ todosToExpose ] = useFilter(_todos, [
    showOnlyCompletedTodos, showElapsedTodos, showOnlyActiveTodos, hashtag, taskIncludes, timeToComplete, createdAt
  ], elems => {
    let _filteredTodos = elems

    if(showOnlyActiveTodos)
      _filteredTodos = _filteredTodos.filter(todo => !todo.completed)
    if(showOnlyCompletedTodos)
      _filteredTodos = _filteredTodos.filter(todo => todo.completed)
    if(showElapsedTodos)
      _filteredTodos = _filteredTodos.filter(todo => 
        todo.timeToComplete && 
        !todo.completed && 
        todo.timeToComplete + new Date(todo.createdAt).getTime() < new Date().getTime()
      )
    if(hashtag.trim().length > 0)
      _filteredTodos = _filteredTodos.filter(todo =>  todo.tags && todo.tags.some(tag => tag.toLowerCase().includes(hashtag.toLowerCase())))
    if(taskIncludes.trim().length > 0)
      _filteredTodos = _filteredTodos.filter(todo => todo.task.toLowerCase().includes(taskIncludes.toLowerCase()))
    if(timeToComplete > 0)
      _filteredTodos = _filteredTodos.filter(todo => todo.timeToComplete === (parseInt(timeToComplete) * 36000))
    if(createdAt !== ''){
      const date = createdAt.split('-')
      _filteredTodos = _filteredTodos.filter(todo => 
        new Date(todo.createdAt).getFullYear() === parseInt(date[0]) &&
        new Date(todo.createdAt).getMonth() + 1 === parseInt(date[1]) &&
        new Date(todo.createdAt).getDate() === parseInt(date[2])
      )
    }

    return _filteredTodos
  })

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
    if(refs.completedTodos.current && refs.activeTodos.current){
      showOnlyActiveTodos
        ? refs.completedTodos.current.disabled = true
        : refs.completedTodos.current.disabled = false
      showOnlyCompletedTodos
        ? refs.activeTodos.current.disabled = true
        : refs.activeTodos.current.disabled = false
    }
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