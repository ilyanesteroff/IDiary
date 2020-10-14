import { useRef, useEffect } from 'react'


export default (unset, cb) => {
  const activeTodos = useRef(null)
  const completedTodos = useRef(null)
  const tags = useRef(null)
  const task = useRef(null)
  const createdAt = useRef(null)
  const timeToComplete = useRef(null)
  
  useEffect(_ => {
    activeTodos.current.checked = false
    completedTodos.current.checked = false
    tags.current.value = ''
    task.current.value = ''
    createdAt.current.value = ''
    timeToComplete.current.value = 0
    cb()
    // eslint-disable-next-line
  }, [unset])

  return [
    {
      activeTodos : activeTodos, 
      completedTodos: completedTodos,
      tags: tags,
      task: task,
      createdAt: createdAt, 
      timeToComplete: timeToComplete
    }]
}