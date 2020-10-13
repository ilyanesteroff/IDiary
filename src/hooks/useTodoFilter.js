import { useEffect, useRef, useState } from 'react'

export default (allTodos, showOnlyCompletedTodos, showOnlyActiveTodos, hashtag, taskIncludes, timeToComplete, createdAt) => {
  const touched = useRef(false)
  const [todosToExpose, setTodosToExpose] = useState(allTodos)

  useEffect(_ => {
    setTodosToExpose(allTodos)
  }, [allTodos, showOnlyCompletedTodos, showOnlyActiveTodos, hashtag, taskIncludes, timeToComplete])
  
  useEffect(_ => {
    if(showOnlyActiveTodos && !touched.current){
      setTodosToExpose(allTodos.filter(todo => !todo.completed))
      touched.current = true
    }
    if(showOnlyCompletedTodos && !touched.current){
      setTodosToExpose(allTodos.filter(todo => todo.completed))
      touched.current = true
    }
    if(hashtag !== ''){
      if(touched.current)
        setTodosToExpose(todosToExpose.filter(todo =>  todo.tags && todo.tags.some(tag => tag.toLowerCase().includes(hashtag.toLowerCase()))))
      else 
        setTodosToExpose(allTodos.filter(todo => todo.tags && todo.tags.some(tag => tag.toLowerCase().includes(hashtag.toLowerCase()))))
      touched.current = true
    }
    if(taskIncludes !== ''){
      if(touched.current)
        setTodosToExpose(todosToExpose.filter(todo => todo.task.toLowerCase().includes(taskIncludes.toLowerCase())))
      else 
        setTodosToExpose(allTodos.filter(todo => todo.task.toLowerCase().includes(taskIncludes.toLowerCase())))
      touched.current = true
    }
    if(timeToComplete > 0){
      if(touched.current)
        setTodosToExpose(todosToExpose.filter(todo => todo.timeToComplete === (parseInt(timeToComplete) * 3600)))
      else 
        setTodosToExpose(allTodos.filter(todo => todo.timeToComplete === (parseInt(timeToComplete) * 3600)))
      touched.current = true
    }
    if(createdAt !== ''){
      const date = createdAt.split('-')
      if(touched.current)
        setTodosToExpose(todosToExpose.filter(todo => 
          new Date(todo.createdAt).getFullYear() === parseInt(date[0]) &&
          new Date(todo.createdAt).getMonth() + 1 === parseInt(date[1]) &&
          new Date(todo.createdAt).getDate() === parseInt(date[2])
        ))
      else 
        setTodosToExpose(allTodos.filter(todo => 
          new Date(todo.createdAt).getFullYear() === parseInt(date[0]) &&
          new Date(todo.createdAt).getMonth() + 1 === parseInt(date[1]) &&
          new Date(todo.createdAt).getDate() === parseInt(date[2])
        ))
      touched.current = true
    }
    
    if(touched.current) touched.current = false   
    // eslint-disable-next-line 
  }, [showOnlyActiveTodos, showOnlyCompletedTodos, hashtag, taskIncludes, timeToComplete, createdAt])
  
  return [todosToExpose]
}