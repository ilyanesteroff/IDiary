import { useState, useEffect } from 'react'

export default (todos, activeTodos, completedTodos) => {
  const [newTodo, setNewTodo] = useState(null)
  const [todoToDelete, setTodoToDelete] = useState(null)
  const [sortedTodos, setSortedTodos] = useState(todos)
  const [active, setActive] = useState(activeTodos)
  const [completed, setCompleted] = useState(completedTodos)

  useEffect(_ => {
    setSortedTodos(todos)
  }, [todos])
  
  useEffect(_ => {
    setActive(activeTodos)
    setCompleted(completedTodos)
  }, [activeTodos, completedTodos])

  useEffect(_ => {
    if(newTodo !==  null){
      setSortedTodos([newTodo, ...sortedTodos])
      newTodo.completed
        ? setCompleted(completed + 1)
        : setActive(active + 1)
      setNewTodo(null)
    }
    // eslint-disable-next-line
  }, [newTodo])

  useEffect(_ => {
    if(todoToDelete !== null){
      const indexOfTodoToDelete = sortedTodos.findIndex(t => t._id === todoToDelete)
      sortedTodos[indexOfTodoToDelete].completed
        ? setCompleted(completed - 1)
        : setActive(active - 1)
      setSortedTodos(sortedTodos.filter(t => t._id !== todoToDelete))
      setTodoToDelete(null)
    }
    // eslint-disable-next-line
  }, [todoToDelete])

  return [sortedTodos, setNewTodo, setTodoToDelete, active, completed]
}