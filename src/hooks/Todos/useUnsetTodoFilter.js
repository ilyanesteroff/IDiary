import { useRef, useEffect } from 'react'


export default (unset, cb) => {
  const activeTodos = useRef(null)
  const completedTodos = useRef(null)
  const elapsedTodos = useRef(null)
  const tags = useRef(null)
  const task = useRef(null)
  const createdAt = useRef(null)
  const timeToComplete = useRef(null)
  
  useEffect(_ => {
    if(activeTodos.current) activeTodos.current.checked = false
    if(completedTodos.current) completedTodos.current.checked = false
    if(elapsedTodos.current) elapsedTodos.current.checked = false
    if(tags.current) tags.current.value = ''
    if(task.current) task.current.value = ''
    if(createdAt.current) createdAt.current.value = ''
    if(timeToComplete.current) timeToComplete.current.value = 0
    cb()
    // eslint-disable-next-line
  }, [ unset ])

  return [
    {
      activeTodos : activeTodos, 
      completedTodos: completedTodos,
      elapsedTodos: elapsedTodos,
      tags: tags,
      task: task,
      createdAt: createdAt, 
      timeToComplete: timeToComplete
    }]
}