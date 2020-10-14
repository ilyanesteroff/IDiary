import { useEffect, useState } from 'react'


export default (allTodos, showOnlyCompletedTodos, showOnlyActiveTodos, hashtag, taskIncludes, timeToComplete, createdAt) => {
  const [todosToExpose, setTodosToExpose] = useState(allTodos)

  useEffect(_ => {
    setTodosToExpose(allTodos)
  }, [allTodos, showOnlyCompletedTodos, showOnlyActiveTodos, hashtag, taskIncludes, timeToComplete, createdAt])
  
  useEffect(_ => {
    //of course can use allTodos directly, but this looks better :D
    let _filteredTodos = allTodos
    if(showOnlyActiveTodos){
      _filteredTodos = _filteredTodos.filter(todo => !todo.completed)
    }
    if(showOnlyCompletedTodos){
      _filteredTodos = _filteredTodos.filter(todo => todo.completed)
    }
    if(hashtag !== ''){
      _filteredTodos = _filteredTodos.filter(todo =>  todo.tags && todo.tags.some(tag => tag.toLowerCase().includes(hashtag.toLowerCase())))
    }
    if(taskIncludes !== ''){
      _filteredTodos = _filteredTodos.filter(todo => todo.task.toLowerCase().includes(taskIncludes.toLowerCase()))
    }
    if(timeToComplete > 0){
      _filteredTodos = _filteredTodos.filter(todo => todo.timeToComplete === (parseInt(timeToComplete) * 36000))
    }
    if(createdAt !== ''){
      const date = createdAt.split('-')
      _filteredTodos = _filteredTodos.filter(todo => 
        new Date(todo.createdAt).getFullYear() === parseInt(date[0]) &&
        new Date(todo.createdAt).getMonth() + 1 === parseInt(date[1]) &&
        new Date(todo.createdAt).getDate() === parseInt(date[2])
      )
    }
    
    setTodosToExpose(_filteredTodos)
  }, [showOnlyActiveTodos, showOnlyCompletedTodos, hashtag, taskIncludes, timeToComplete, createdAt, allTodos])
  
  return [todosToExpose]
}